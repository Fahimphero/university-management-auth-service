import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users/', UserRoutes)
// console.log(process.env)

// Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   //   console.log(x)
//   //   Promise.reject(new Error('Unhandled Promise Rejection'))
//   throw new Error('Testing Error logger')
//   // next('Ore baba Error')
// })

// Global Error Handler
app.use(globalErrorHandler)

export default app
