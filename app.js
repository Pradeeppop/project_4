const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const dbConnection=require('./config/mongo_connection');
const customerRoute=require('./routes/customerRoute');
const spRoute=require('./routes/spRoute');
const adminRoute=require('./routes/adminRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const port = 3000;

//middlewares for docs swagger
app.use('/project-api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//middleware for customer, sp and admin
app.use('/customer',customerRoute);
app.use('/sp',spRoute);
app.use('/admin',adminRoute);

app.listen(port, () => {
    console.log(`Server is listening on : ${port}`);
});
