import express, { Application } from 'express';
import cors from 'cors';
import routes from '../src/app/routes'
const app:Application = express();

//middleware
app.use(cors())


//parse
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// application
app.use('/api/v1', routes)

export default app;
