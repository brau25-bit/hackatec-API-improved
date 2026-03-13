import express from "express"
import authRouter from "./src/modules/auth/auth.router.js"
import reportRouter from "./src/modules/report/report.router.js"
const app = express()

app.use(express.json())
app.disable("x-powered-by")

app.use('/auth', authRouter)
app.use('/report', reportRouter)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("http://localhost:"+port)
})