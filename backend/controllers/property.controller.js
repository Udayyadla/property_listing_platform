import { Property } from "../models/property.model.js";
// export const Home = async (req, res) => {
//   try {
//     res.send("Hello world!!!");
//   } catch (error) {
//     res.status(500).json({ error: "internal server error" });
//   }
// };

export const getAllProperties = async (req, res) => {
  let { page = 1, limit = 10,sortBy,sortOrder } = req.query;
  let offset = (page - 1) * limit;
  try {
    let sortOptions={}
    if(sortBy==="Price" && (sortOrder==="asc" || sortOrder==="desc")){
      sortOptions[sortBy]=sortOrder==="asc"?1:-1
    }
    else if(sortBy || sortOrder){
      return res.status(400).json({message:"use sortBy=Price and sortOrder=asc/desc"})
    }

    const data = await Property.find().skip(offset).limit(limit).sort(sortOptions);
   
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
export const filterProperties = async (req, res) => {
  let { page = 1, limit = 10 } = req.query;
  let skip = (page - 1) * limit;
 
  try {
    const {
      Location,
      Type,
      Bedrooms,
      Bathrooms,
      Size,
      status,
      Amenities,
      Price,
    } = req.body;
    const filters = {};
    if (Location) filters.Location = Location;
    if (Type) filters.Type = Type;
    if (Bedrooms) filters.Bedrooms = Bedrooms;
    if (Bathrooms) filters.Bathrooms = Bathrooms;
    if (Amenities) filters.Amenities = { $all: Amenities };
    if (Size) filters.Size = { $gte: Size };
    if (status) filters.status = status;
    if (Price) filters.Price = { $gte: Price };
    const data = await Property.aggregate([
      {
        $match: filters,
      },
      {
        $skip: skip,
      },
      {
        $limit: parseInt(limit),
      },
    ]);
    if (data.length === 0) {
      return res.status(200).json({ msg: "No Properties Found!!" });
    }
    res.status(200).json({ data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
export const getPropertById=async(req,res)=>{
  try{
    const {id}=req.params
    const getPropery=await Property.findById(id)
    if(!getPropery){
      return res.status(400).json({msg:"No Property Available"})
    }
    return res.status(200).json(getPropery)


  }catch(error){
    console.log(error.message)
    res.status(500).json({ error: "internal server error" });
  }
}