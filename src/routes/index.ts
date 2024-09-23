import express from 'express'
import { studentRoutes } from '../modules/student/student.route'
const router = express.Router()

router.use('/api/v1/students', studentRoutes)

export default router
