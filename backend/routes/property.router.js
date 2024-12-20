import { Router } from "express";
import { filterProperties, getAllProperties, getPropertById } from "../controllers/property.controller.js";
import { sendEmail } from "../controllers/inquiry.controller.js";
const router=Router()
router.get("/getProps",getAllProperties)
router.post("/filter",filterProperties)
router.get("/property/:id",getPropertById)
router.post("/inquiry",sendEmail)
export {router}
//fetch(api_url)
//formData