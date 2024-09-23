import express from 'express'
import {
  createStudent,
  getAllStudent,
  getSingleStudent,
} from './student.controller'

const router = express.Router()

router.post('/create-student', createStudent)
router.get('/', getAllStudent)
router.get('/:studentId', getSingleStudent)
export const studentRoutes = router
