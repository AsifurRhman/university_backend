import { Request, Response } from 'express'
import {
  createStudentIntoDB,
  getSingleStudentFromDB,
  getStudentFromDB,
} from './student.service'

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    //console.log(student)
    const result = await createStudentIntoDB(studentData)
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await getStudentFromDB()
    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params

    const result = await getSingleStudentFromDB(studentId)

    res.status(200).json({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
