export type TGuardian = {
  fatherName: string
  fatherContactNo: string
  fatherOccupation: string
  motherName: string
  motherContactNo: string
  motherOccupation: string
}
export type TName = {
  firstName: string
  middleName: string
  lastName: string
}
export type TLocalGuardian = {
  name: string
  contactNo: string
  address: string
}
export type TStudent = {
  id: string
  name: TName
  email: string
  gender: 'male' | 'female'
  dateOfBirth: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: TGuardian
  localGuardian: TLocalGuardian
  profileImg?: string
  isActive: 'active' | 'blocked'
}
