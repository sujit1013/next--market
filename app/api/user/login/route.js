import { NextResponse } from "next/server"
import{SignJWT} from "jose"
import connectDB from "../../../utils/database"
import { UserModel } from "../../../utils/schemaModels"


 export async function POST(request){
  const reqBody  = await request.json()
  try{
    await connectDB()
    const savedUserData = await UserModel.findOne({email:reqBody.email})
    console.log(savedUserData)
    if (savedUserData){
      if (reqBody.password === savedUserData.password){
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const payload = {
          email:reqBody.email
        }
        const token = await new SignJWT(payload)
  .setProtectedHeader({ alg: "HS256" })
  .setExpirationTime("1d")
  .sign(secretKey)
        
        console.log(token)                     
    return NextResponse.json({message:"login sucessfull",token:token})
  }else{
    return NextResponse.json({message:"lofin failed:password wrong"})
  }
  }else{
    return NextResponse.json({message:"loginfailed :user id  not register"})
  }
  } catch{
    return NextResponse.json({message:"login failed"})
  }
 }