const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes.js');

app.use('/api', userRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})