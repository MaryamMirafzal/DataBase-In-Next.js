
import { useDebugValue } from "react";
import User from "../../../models/User";
import ConnectDB from "../../../utils/connectDB";

export default async function handler( req, res){

   try {
    await ConnectDB()
    
   } catch (error) {
    console.log(error);
    res.status(500).json({status: "failed", message: "Error in Connetcing to DB"})
    return;
   }
    if(req.method ==="POST"){
        const name = req.body.name;
        
        if( !name || name.length <= 3){
          res.status(422).json({status: "failed", message:"Invalid Data"})
          return;
        } 

        // const user = new User({ name })
        // await user.save()
      try {
        const user = await User.create({
          name: "mojtaba",
          age: 28,
          email: "mojtaba@gmail.com",
          address:{
            city: "Shahrekord",
            street:"samon",
          },
          courses:["react"],
          })
        console.log(user);
        res.status(200).json({status: "success", message: "Data Created", data : user})
      } catch (error) {
        console.log(error);
        res.status(500).json({status:"failed", message: "Error in Sorting Data in DB"})
      }
        
    }else if ( req.method === "GET"){
      try {
        const users = await User.find();
        res.status(200).json({ status: "success", data: users})
      } catch (error) {
        console.log(error);
        res.status(500).json({
          status: "failed",
          message: "Error in retriving data in database"
        })
      }

    }
}