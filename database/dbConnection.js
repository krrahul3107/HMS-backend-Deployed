import mongoose from "mongoose";
export const dbConnection = () => {
    mongoose
           .connect(process.env.MONGO_URI,{
            dbName: "MS_HOSPITAL_MANAGEMENT-DEPLOYED",
           })
           .then(() =>{
            console.log("connected to database!");
           })
           .catch((err) =>{
            console.log(`some error occured while connecting to database: ${err}`);
           });
};