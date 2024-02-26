import { checkUser } from "../models/database.js";

const valFun = async(req,res,next)=>{
    const {userProfile, userPass} = req.body
    const hashedPassword = await checkUser(username)
    bcrypt.compare(userPass,hashedPassword,(err,result)=>{
        if(err) throw err
        if(result === true){
            const {userProfile} = req.body
            const token = jwt.sign({userProfile:userProfile},process.env.SECRET_KEY,{expiresIn:'1h'})
            res.send({
                token:token,
                msg: "YAY! You have logged in."
            })
            next()
        } else
        res.send({
            msg:"The password or username is inocorrect"})
    })
}

export{valFun}