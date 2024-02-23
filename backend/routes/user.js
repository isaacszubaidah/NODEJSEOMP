import express from 'express';

import {addOne,getAll,eUser,prodAdd,editOne, getOne, getProdss, getPr1} from '../controller/controller.js';

const router = express.Router()

router.route('/users').post(addOne)
        
router.route('/users').get(getAll);

router.route('/users/:userID').get(getOne)

router.route('/users/:userID').patch(eUser)

router.route('/products').post(prodAdd)

router.route('/products').get(getProdss)

router.route('/products/:prodID').patch(editOne)
router.route('/products/:prodID').get(getPr1)

export default router