import {Router, Request, Response} from 'express';

import { CreateUserController } from './controllers/user/userClient/CreateUserController';
import { CreateUserAdminController } from './controllers/user/userAdmin/CreateUserAdminController';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();
// Routes users/client
router.post('/user/client', new CreateUserController().handle)
// Routes users/admin
router.post('/user/admin', new CreateUserAdminController().handle)
// Routes Login
router.post('/session', new AuthUserController().handle)
export { router };