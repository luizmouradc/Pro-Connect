import express from 'express'
import { registerCompany } from '../controllers/companyController.js'
import { ChangeJobApplicationsStatus, changeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router = express.Router()

// Registrar uma empresa
router.post('/register', upload.single('image'), registerCompany)

// Login da empresa
router.post('/login', loginCompany)

// Obter dados da empresa
router.get('/company',protectCompany ,getCompanyData)

// Postar uma vaga de emprego
router.post('/post-job',protectCompany, postJob)

// Obter dados dos candidatos da empresa
router.get('/applicants', protectCompany, getCompanyJobApplicants)

// Obter lista de vagas da empresa
router.get('/list-jobs',protectCompany, getCompanyPostedJobs)

// Alterar status das candidaturas
router.post('/change-status',protectCompany, ChangeJobApplicationsStatus)

// Alterar visibilidade das candidaturas
router.post('/change-visiblity',protectCompany,  changeVisiblity)

export default router
