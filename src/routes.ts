import {Router, Request, Response} from 'express';

import { CreateUserAdminController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
const router = Router();
// Routes users/client

router.post('/user', new CreateUserAdminController().handle)
// Routes Login
router.post('/session', new AuthUserController().handle)
// Routes user Information
router.get('/me', isAuthenticated, new DetailUserController().handle)
export { router };