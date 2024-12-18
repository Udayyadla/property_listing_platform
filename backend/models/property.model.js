import { model, Schema } from "mongoose";

const propertySchema=new Schema({
    Property_ID:String,
    Title:String,
    Location:{
        type:String,
        index:true
    },
    Type:{
        type:String,
        enum:["House","Apartment","Office"],
        index:true
    },
    Bedrooms:Number,
    Bathrooms:Number,
    Size:Number,
    Status:{
        type:String,
        enum:["Sold","Pending","Available"],
        index:true
    },
    Amenities:{
        type:[String],
        index:true
    },
    Image_URL:String,
    Price:Number
})
const Property=model("property",propertySchema)
export {Property}