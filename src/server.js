
import express from 'express'
import db from './database.js'
import routes from './routes.js'
import cors from 'cors'

const app = express()

const port = 3000

app.use(cors())
app.use(express.json())
db.connect()
app.use(routes)



app.listen(port, () => { console.log(`✔ Server is running on port ${port}`) })