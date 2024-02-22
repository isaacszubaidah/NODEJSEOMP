import {addUser, addProd, editProd} from '../models/database.js'
import bcrypt from 'bcrypt'

const addOne = async(req,res)=>{
    const{firstName, lastName, userAge, userGender, emailAdd, userPass, userProfile} = req.body
    bcrypt.hash(userPass,10, async (err,hash)=>{
        if(err) throw err
        await addUser(firstName, lastName, userAge, userGender, emailAdd, hash, userProfile)
        res.send({
            msg: "You have created an account"
        })
    }) 
}

const prodAdd = async(req,res)=>{
    const{productName, quantity, productPrice, category, productUrl} = req.body
    console.log(req.body);
    await addProd(productName, quantity, productPrice, category, productUrl)
    res.send({
        msg:"You have added a product"
    })
}

const editOne = async (req, res) => {
    let { productName, quantity, productPrice, category, productUrl } = req.body;
    const id = req.params.id;
    await editProd(productName, quantity, productPrice, category, productUrl, id);

    res.json({ success: true });
};


export{addOne, prodAdd, editOne}