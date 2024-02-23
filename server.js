const express = require('express');
// const sequelize = require('sequelize');
const bodyParser = require('body-parser')

const { PORT, SYNC_DB } = require('./src/config/serverConfig.js');
const db  = require('./src/models/index.js');
const authRouter = require('./src/Routes/auth.routes.js');
const UserError = require('./src/Error/user.error.js');
const categoryRouter = require('./src/Routes/category.routes.js');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/auth', authRouter);
app.use('/api/category', categoryRouter);

app.use((err, req, res, next) => {
    if(err instanceof UserError){
        return res.status(403).json({
            success: false,
            data: null,
            message: err.message,
            err: err,
        })
    }

    return res.status(500).json({
        success: false,
        data: null,
        message: 'Internal Server error',
        err: err,
    })
})


app.listen(PORT, async () => {
    if(SYNC_DB === true){
        // db.Sequelize.sync({alter: true});
        console.log(db)
    }
    console.log(`Server started on port ${PORT}`)
})