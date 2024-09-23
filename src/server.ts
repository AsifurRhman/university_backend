import mongoose from 'mongoose'
import { DATABASE_URL, PORT } from './config'
import { app } from './app'

async function main() {
  try {
    await mongoose.connect(DATABASE_URL as string)
    console.log('mongodb connected successfully')
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()
