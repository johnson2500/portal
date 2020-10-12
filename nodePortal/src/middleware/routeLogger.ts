import express, { 
    NextFunction,
    Request,
    Response,
    Router,
} from 'express';

const router: Router = express.Router();

router.use(function timeLog (req: Request , res: Response, next: NextFunction) {

    console.log('Time: ', Date.now())

    console.log(`Time ${Date.now()}: Route:   `)
    
    next()
  })