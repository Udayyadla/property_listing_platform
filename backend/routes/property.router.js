import { Router } from "express";
import { filterProperties, getAllProperties, getPropertById } from "../controllers/property.controller.js";
const router=Router()
router.get("/getProps",getAllProperties)
router.get("/filter",filterProperties)
router.get("/property/:id",getPropertById)
export {router}