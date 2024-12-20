import { Router } from "express";
import { filterProperties, getAllProperties } from "../controllers/property.controller.js";
const router=Router()
router.get("/getProps",getAllProperties)
router.get("/filter",filterProperties)
export {router}