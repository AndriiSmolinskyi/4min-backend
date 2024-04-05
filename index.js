const express = require('express');
const cors = require('cors')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.router')
const PORT = process.env.PORT || 8080;

const app = express();

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204,
// }));

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`));