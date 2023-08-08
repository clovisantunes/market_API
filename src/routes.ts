import {Router, Request, Response} from 'express';
import multer from 'multer';

import { CreateUserAdminController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateVeiculeController } from './controllers/veicule/CreateVeiculeController';
import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./temp"))

// Routes users/client
router.post('/user', new CreateUserAdminController().handle)
// Routes Login
router.post('/session', new AuthUserController().handle)
// Routes user Information
router.get('/me', isAuthenticated, new DetailUserController().handle)

// Routes category
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', new ListCategoryController().handle)

// Routes products
router.post('/veicule', isAuthenticated, upload.single("file"), new CreateVeiculeController().handle)


export { router };