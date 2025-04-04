const express = require('express');
const userRoute = require('./src/routes/userRoute.js');
const bodyParser = require('body-parser'); 
const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use('/api/users', userRoute);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
