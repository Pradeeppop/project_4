// Configuring the database
const url='mongodb://localhost:27017/project_4_db';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(() => {
    console.log("Successfully connected to mongodb database");
}).catch(err => {
    console.log('Cant be connect to the database', err);
    process.exit();
});



