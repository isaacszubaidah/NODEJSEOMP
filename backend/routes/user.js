import express from 'express';

import controller from '../controller/controller';

const router = express.Router()

router.route('/users').post(controller.addOne);

router.route('/products').post(controller.prodAdd)

router.route('/products/:id').patch(controller.editOne)