import Company from "../models/Company.js";
import bcrypt from 'bcrypt'
import { v2 as cloudinary} from 'cloudinary'
import generateToken from "../utils/generateToken.js";
import Job from "../models/job.js";

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

}

// Obter empregos postados pela empresa
export const getCompanyPostedJobs = async (req, res) => {

}

// Alterar o status da candidatura
export const ChangeJobApplicationsStatus = async (req, res) => {

}

// Alterar visibilidade da vaga
export const changeVisiblity = async (req, res) => {

}
