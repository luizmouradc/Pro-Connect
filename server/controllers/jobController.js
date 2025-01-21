import Job from "../models/job.js"

// obter todos os empregos
export const getJobs = async (req, res) => {
    try {
        
        const jobs = await Job.find({visible:true}).
        populate({path:'companyId', select:'-password'})

        res.json({success:true, jobs})

    } catch (error) {
        res.json({success:false, message: error.message})
    }
}

// obter um único emprego pelo ID
export const getJobById = async (req, res) => {

}
