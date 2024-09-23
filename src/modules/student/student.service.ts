import { TStudent } from './student.interface'
import { StudentModel } from './student.model'

export const createStudentIntoDB = async (studentData: TStudent) => {
  const result = await StudentModel.create(studentData)
  return result
}

export const getStudentFromDB = async () => {
  const result = await StudentModel.find().sort({ createdAt: -1 })
  return result
}

export const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id })
  return result
}
