import { Schema, model } from 'mongoose'
import { TGuardian, TLocalGuardian, TName, TStudent } from './student.interface'

const userNameSchema = new Schema<TName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
})

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  motherName: { type: String, required: true },
})
const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
})

const studentSchema = new Schema<TStudent>(
  {
    id: { type: String },
    name: userNameSchema,
    gender: { type: String, enum: ['male', 'female'], required: true },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: guardianSchema,

    localGuardian: localGuardianSchema,
    profileImg: { type: String },
    isActive: { type: String, enum: ['active', 'blocked '], default: 'active' },
  },
  { timestamps: true },
)

export const StudentModel = model<TStudent>('Student', studentSchema)
