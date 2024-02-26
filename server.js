const express = require('express');
// const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const swagger = require('swagger-ui-express');

const { PORT, SYNC_DB } = require('./src/config/serverConfig.js');
const db  = require('./src/models/index.js');
const authRouter = require('./src/Routes/auth.routes.js');
const UserError = require('./src/Error/user.error.js');
const categoryRouter = require('./src/Routes/category.routes.js');
const productRouter = require('./src/Routes/product.routes.js');
const cartRouter = require('./src/Routes/cart.routes.js');
const orderRouter = require('./src/Routes/orderRoutes.js');
const apiDoc = require('./swagger.json');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/auth', authRouter);
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api-docs', swagger.serve, swagger.setup(apiDoc))

app.use((err, req, res, next) => {
    if(err instanceof UserError){
        return res.status(403).json({
            success: false,
            data: null,
            message: err.message,
            err: err,
        })
    }
    console.log(err.error)

    return res.status(500).json({
        success: false,
        data: null,
        message: 'Internal Server error',
        err: err.error,
    })
})


app.listen(PORT, async () => {
    if(SYNC_DB === true){
        // db.Sequelize.sync({alter: true});
        console.log(db)
    }
    console.log(`Server started on port ${PORT}`)
})