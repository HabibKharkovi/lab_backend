const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env'});

const app = require('./app');

// database connection
mongoose.connect(process.env.LOCAL_DATABASE, { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useFindAndModify: false,
    useUnifiedTopology: true})
    .then(con => {
        console.log('db connection successful')
    })
    .catch(err => {
        console.log('db connection fail');
    });


const port = process.env.PORT || 4000;
// Start Server
app.listen(port, (err) => {
    if(!err) {
        console.log('server connected');
    } else {
        console.log('server connection fail');
    }
});