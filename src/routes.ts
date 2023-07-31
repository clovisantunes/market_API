import {Router, Request, Response} from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { CreateUserAdminController } from './controllers/userAdmin/CreateUserAdminController';

const router = Router();
// Routes users/client
router.post('/user/client', new CreateUserController().handle)

// Routes users/admin

router.post('/user/admin', new CreateUserAdminController().handle)

export { router };