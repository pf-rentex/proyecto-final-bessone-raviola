import express from "express";
import auth from "../../middlewares/auth";
import {createTenant, deleteTenant, getTenant, getTenants, updateTenant} from "../../controllers/tenants";

const router = express.Router();

//@route    Post api/tenants
//@desc     Create tenant
//@access   Public
router.post("/", createTenant);

//@route    Get api/tenants/
//@desc     Get tenants
//@access   Public
router.get("/", getTenants);

//@route    Get api/tenants/:dni
//@desc     Get tenant
//@access   Public
router.get("/:dni", getTenant);

//@route    Put api/tenants
//@desc     Modify tenant
//@access   Private
router.put("/", auth, updateTenant);

//@route    Delete api/tenants/:id
//@desc     Delete tenant
//@access   Private
router.delete("/:id", auth, deleteTenant);

export default router;
