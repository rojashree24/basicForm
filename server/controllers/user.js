const User=require('../models/User.js')


const createUser=async(req,res)=>{
    const {fname,lname,gender,phno}=req.body;

    try {
        const newUser=await User.create({fname,lname,gender,phno})
        res.status(200).json(newUser)
        // console.log(newUser);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports={createUser}