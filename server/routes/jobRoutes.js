import express from 'express'
import { getJobById, getJobs } from '../controllers/jobController.js';

const router = express.Router()

// Rota para obter todos os dados de empregos
router.get('/', getJobs)

// Rota para obter um único emprego pelo ID
router.get('/:id', getJobById)

export default router;
