import {addUser, getUsers, getUser, addProd, editProd, editUser, getProds, getProd} from '../models/database.js'
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

const getAll = async(req,res)=>{
    res.send(await getUsers())
}

const getOne = async(req,res)=>{
    res.send(await getUser(+req.params.userID))
}

const eUser = async(req,res)=>{
    let {firstName, lastName, userAge, userGender, emailAdd, userProfile} = req.body
    const [user] = await getUser(+req.params.userID)
    firstName ? firstName=firstName: {firstName}=user,
    lastName ? lastName=lastName: {lastName}=user,
    userAge ? userAge=userAge: {userAge}=user,
    userGender ? userGender=userGender: {userGender}=user,
    emailAdd ? emailAdd=emailAdd: {emailAdd}=user,
    userProfile ? userProfile=userProfile: {userProfile}=user
    console.log(user);
    await editUser(firstName, lastName, userAge, userGender, emailAdd, userProfile, +req.params.userID)
    res.json(await getUsers()) 
}

const prodAdd = async(req,res)=>{
    const{productName, quantity, productPrice, category, productUrl} = req.body
    console.log(req.body);
    await addProd(productName, quantity, productPrice, category, productUrl)
    res.send({
        msg:"You have added a product"
    })
}

const getProdss = async (req, res) => {
    const products = await getProds();
    res.send(products);
}

const getPr1 = async(req,res)=>{
    res.send(await getProd(+req.params.prodID))
}


const editOne = async (req, res) => {
    const { productName, quantity, productPrice, category, productUrl } = req.body;
    productName ? productName=productName: {productName}=product.productName
    quantity ? quantity=quantity: {quantity}=product.quantity
    productPrice ? productPrice=productPrice: {productPrice}=product.productPrice
    category ? category=category: {category}=product.category
    productUrl ? productUrl=productUrl: {productUrl}=product.productUrl
    const id = req.params.id;
    await editProd(productName, quantity, productPrice, category, productUrl, id);
    res.json({ success: true });
};


export{addOne, getAll, getOne, eUser, prodAdd, editOne, getProdss,getPr1}