const express = require("express");
const morgan = require('morgan');
const app = express();
const patientsRouter = require('./routers/patientsRouter')
const servicesRouter = require('./routers/servicesRouter')
const employesRouter = require('./routers/employesRouter')
const adminRouter = require('./routers/adminRouter')
const cors = require('cors')

app.use(cors())

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Middleware
app.use(express.json());


// Router Middleware
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/patients', patientsRouter);
app.use('/api/v1/services', servicesRouter);
app.use('/api/v1/employes', employesRouter);

module.exports = app;