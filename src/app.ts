import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './routes'
export const app: Application = express()

app.use(express.json())
app.use(cors())
//all routes
app.use(router)

app.get('/', (req: Request, res: Response) => {
  let a = 10
  res.send('Hello World!')
})
