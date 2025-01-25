import Company from "../models/Company.js";
import bcrypt from 'bcrypt'
import { v2 as cloudinary} from 'cloudinary'
import generateToken from "../utils/generateToken.js";
import Job from "../models/Job.js";
import JobApplication from "../models/JobApplication.js";

// Registrar uma nova empresa
export const registerCompany = async (req, res) => {

    const {name, email, password} = req.body

    const imageFile = req.file;

    if(!name || !email || !password || !imageFile){
        return res.json({success:false, message: "Detalhes faltando."})
    }

    try {
        
        const companyExists = await Company.findOne({email})

        if(companyExists){
            return res.json({success:false, message: 'Empresa já registrada.'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const imageUpload = await cloudinary.uploader.upload(imageFile.path);

        const company = await Company.create({
            name, email,
            password: hashPassword,
            image: imageUpload.secure_url
        })

        res.json({
            success: true,
            company: {
                _id: company._id,
                name: company.name,
                email: company.email,
                image:company.image
            },
            token:generateToken(company._id)
        })

    } catch (error) {
        res.json({success:false, message:error.message})
    }

}

// Login da empresa
export const loginCompany = async (req, res) => {
    
    const {email, password} = req.body

    try {

        const company = await Company.findOne({email})

        const passwordMatch = await bcrypt.compare(password, company.password);
        if (passwordMatch) {

            res.json({
                success:true,
                company: {
                    _id: company._id,
                    name: company.name,
                    email: company.email,
                    image:company.image
                },
                token:generateToken(company._id)
            })

        }else{
            res.json({success:false, message: 'E-mail ou Senha Inváslido'})
        }

    } catch (error) {
        res.json({success:false, message: error.message})
    }
}

// Obter dados da empresa
export const getCompanyData = async (req, res) => {

    const company = req.company

    try {
        res.json({success:true, company})
    }catch(error){
        res.json({
            success:false, message:error.message
        })
    }

}

// Postar um novo emprego
export const postJob = async (req, res) => {

    const {title, description, location, salary, level,category} = req.body

    const companyId = req.company._id

    try {
        
        const newJob = new Job({
            title,
            description,
            location,
            salary,
            companyId,
            date: Date.now(),
            level,
            category
        })

        await newJob.save()

        res.json({success:true, newJob})

    } catch (error) {

        res.json({success:false, message:error.message})
        
    }

}

// Obter candidatos para vaga da empresa
export const getCompanyJobApplicants = async (req, res) => {
    try {
        
        const companyId = req.company._id

        // find job applications fot he user and populete realted data
        const applications = await JobApplication.find({companyId}).populate('userId','name image resume').pupulate('jobId','title location category level salary').exec()

        return res.json({success:true, applications})

    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

// Obter empregos postados pela empresa
export const getCompanyPostedJobs = async (req, res) => {
    try {
        const companyId = req.company._id

        const jobs = await Job.find({companyId})

        // (ToDo) Adicionando o número de informações dos candidatos nos dados
        const jobsData = await Promise.all(jobs.map(async (job) => {
            const applicants = await JobApplication.find({jobId: job._id});
            return {...job.toObject(),applicants:applicants.length}
        }))

        res.json({success:true, jobsData: jobsData})

    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

// Alterar o status da candidatura
export const ChangeJobApplicationsStatus = async (req, res) => {

    try {

        const {id, status} = req.body
    
        // find job application and update status
        await JobApplication.findOneAndUpdate({_id:id},{status})
    
        res.json({success:true, message:'Status alterado'})
        
    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

// Alterar visibilidade da vaga
export const changeVisiblity = async (req, res) => {
    try {
        
        const {id} = req.body

        const companyId = req.company._id

        const job = await Job.findById(id)

        if(companyId.toString() === job.companyId.toString()){
            job.visible = !job.visible
        }

        await job.save()

        res.json({success:true, job})

    } catch (error) {
        res.json({success:false, message:error.message})
    }
}
