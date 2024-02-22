import {pool} from '../config/config.js'

import { config } from 'dotenv';
config()

const addUser = async(firstName, lastName, userAge, userGender, emailAdd, userPass, userProfile)=>{
    await pool.query(`
    INSERT INTO users (firstName, lastName, userAge, userGender, emailAdd, userPass, userProfile)
    VALUE (?,?,?,?,?,?,?);
    `,[firstName, lastName, userAge, userGender, emailAdd, userPass, userProfile])
}

const addProd = async(productName, quantity, productPrice, category, productUrl)=>{
    await pool.query(`
    INSERT INTO products (productName, quantity, productPrice, category, productUrl)
     VALUES (?, ?, ?, ?,?);
    `,[productName, quantity, productPrice, category, productUrl])
}

const editProd = async (productName, quantity, productPrice, category, productUrl, id) => {
    const [edit] = await pool.query(`
    UPDATE products SET 
    productName = ?, 
    quantity = ?, 
    productPrice = ?, 
    category = ?, 
    productUrl = ?
    WHERE (productID = ?);
    `, [productName, quantity, productPrice, category, productUrl, id]);
    return edit;
};

export{addUser, addProd, editProd}