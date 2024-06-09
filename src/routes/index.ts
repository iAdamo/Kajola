import { Router } from 'express';
import appController from '../controllers/appController';


const indexRouter = Router();

indexRouter.get('/status', appController.getStatus);
indexRouter.get('/stats', appController.getStats);

export default indexRouter;
