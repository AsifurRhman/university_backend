import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join((process.cwd(), '.env')) })

export const PORT = process.env.PORT || 8000
export const DATABASE_URL = process.env.DATABASE_URL
