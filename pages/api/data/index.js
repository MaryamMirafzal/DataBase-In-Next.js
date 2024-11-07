
import ConnectDB from "../../../utils/connectDB";

export default async function handler( req, res){
    await ConnectDB()
    if(req.method ==="POST"){
        const name = req.body.name;
        
        if( !name || name.length <= 3){
          res.status(422).json({status: "failed", message:"Invalid Data"})
          return;
        } 
        
        res.status(200).json({status: "success", message: "Data Created", data : {name: name}})
    }
}