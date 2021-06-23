import { Router } from 'express'
import { CreateUserController } from '../controllers/CreateUserController';
import { CreateTagController } from '../controllers/CreateTagController';
import { admin } from '../middlewares/admin';


const routes = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();


routes.post('/user', admin,  createUserController.handle)
routes.post('/tag', admin, createTagController.handle )



export{routes}