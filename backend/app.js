const express = require('express')
const cors = require("cors")
const dotenv = require('dotenv')
dotenv.config({ path: './configs/.env' })

const mongoose = require('mongoose')

const app = express()
const port = `${process.env.APP_PORT}`

app.use(cors({
    credentials: true,
    origin: [
        'http://localhost:3000',
        'http://10.10.0.10:3000',
        'http://10.1.62.3:3000',
    ]
}))

app.use('/news', require('./routes/news'))
app.use('/stufs', require('./routes/stufs'))
app.use('/initiatives', require('./routes/initiatives'))
app.use('/events', require('./routes/events'))

async function start() {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}`, {

        })
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`)
        })
    } catch (error) {
        console.log('Server Error', error.message)
        process.exit(1)
    }
}

start()