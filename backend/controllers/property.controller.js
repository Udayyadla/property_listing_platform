import { Property } from "../models/property.model.js";

export const getAllProperties = async (req, res) => {
  let { page = 1, limit = 10 } = req.query;
  let skip = (page - 1) * limit;

  try {
    const data = await Property.find().skip(skip).limit(limit);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
export const filterProperties = async (req, res) => {
  let { page = 1, limit=10 } = req.query;
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
    console.log(error.message)
    res.status(500).json({ error: "internal server error" });
  }
};
