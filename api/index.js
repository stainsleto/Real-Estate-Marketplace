const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')




app.use(bodyParser.json())

app.use('/api/admin',adminRouter)
app.use('/api/user',userRouter)

const PORT = 3000


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})