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
import { ListByCategoryController } from './controllers/veicule/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AdditemController } from './controllers/order/AdditemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';

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
router.get('/veicule/list', new ListByCategoryController().handle)

// Routes Order

router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.post('/order/add', isAuthenticated, new AdditemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.get('/order', isAuthenticated, new DetailOrderController().handle)

export { router };