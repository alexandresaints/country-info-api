import express from 'express'
import cors from 'cors'
import routes from './routes.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3002, () => {
  console.log(`🚀 Server is running on 3002 port`)
})
