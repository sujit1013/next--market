import mongoose from "mongoose"

const connectDB = () => {
    try{
         mongoose.connect("mongodb+srv://251005_db_user:Sujit1013@cluster0.z1kgcul.mongodb.net/nextAppDataBase?appName=Cluster0")
        console.log("Success:Connected to MongoDB")

    }catch{
         console.log("Failure:UnConnected to MongoDB")
         throw new Error()


       
    }

}

export default connectDB