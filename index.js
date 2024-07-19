const express = require('express');
const cors = require('cors')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.router')
const PORT = process.env.PORT || 8080;
const nodemailer = require('nodemailer');

const app = express();

app.use(cors({
    origin: 'https://4min-frontend.vercel.app',
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // credentials: true,
    // optionsSuccessStatus: 204,

}));

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

// Додавання маршруту для тестового запиту до SMTP-сервера
app.get('/test-smtp', async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587, // або 25
        auth: {
            user: process.env.EMAIL_NAME,
            pass: process.env.EMAIL_PASS
        },
        secure: false,
        requireTLS: true,
    });

    transporter.verify(function(error, success) {
        if (error) {
            console.log('Помилка підключення:', error);
            res.status(500).json({ error: 'Помилка підключення до SMTP-сервера', details: error });
        } else {
            console.log('Підключення до SMTP-сервера успішне');
            res.send('Підключення до SMTP-сервера успішне');
        }
    });
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));