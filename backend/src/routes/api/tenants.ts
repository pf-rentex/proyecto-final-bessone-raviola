import express, { Request, Response } from "express";
import Tenant from "../../models/tenant";

const router = express.Router();

//@route    Post api/tenants
//@desc     Register new tenant
//@access   Public
router.post("/", async (req: Request, res: Response) => {
  const { name, lastname, email, dni, birthDate, address, phone} = req.body;

  //Simple validation
  if (!fieldsAreValid(req.body)) {
    return res.status(400).json({ msg: "Please enter all fields" });

  }

  //Check for existing tenant
  const existingTenant = await Tenant.findOne({ dni: dni });
  if (existingTenant) return res.status(400).json({ msg: "Tenant Already exists" });
  
  const newTenant = new Tenant({
    name,
    lastname,
    email,
    dni,
    birthDate,
    address,
    phone,
  });

  //Create Tenant
  try {  
    const tenant = await newTenant.save();
    res.json({tenant});
    
  } 
  catch (error) {
    return res.status(400).json({ msg: `Error registering tenant: ${error}` });
  }
});

//@route    Get api/tenants/getTenants
//@desc     Search tenants
//@access   Public
router.get("/getTenants", async (req: Request, res: Response) => {
  const tenants = await Tenant.find();
  res.json(tenants);
});

//@route    Get api/tenants/getTenant
//@desc     Search tenant
//@access   Public
router.get("/getTenant", async (req: Request, res: Response) => {
  const { dni } = req.headers;
  
  //Check for existing owner
  const tenant = await Tenant.findOne({ dni: dni });
  if (!tenant) {
    return res.status(400).json({ msg: "The Tenant not exists"});
  } 
  else {
    res.json(tenant);
  }
});

//@route    Put api/tenants/updateTenant
//@desc     Modify tenant
//@access   Public
router.put("/updateTenant", async (req: Request, res: Response) => {
  const { name, lastname, email, dni, birthDate, address, phone} = req.body;

  //Simple validation
  if (!fieldsAreValid(req.body)) {
    return res.status(400).json({ msg: "Please enter all fields" });  
  }

  //Check for existing tenant
  const existingTenant = await Tenant.findOne({ dni: dni });
  if (!existingTenant) {
    return res.status(400).json({ msg: "The Tenant does not exist"});
  }
  else {
    try {
     await existingTenant.updateOne({
        name: name,
        lastname: lastname,
        email: email,
        dni: dni,
        birthDate: birthDate,
        address: address,
        phone: phone,
      });

      return res.status(200).json({ msg: "Tenant updated"});
    }
    catch (error) {
      return res.status(400).json({ msg: `Error registering tenant: ${error}` });
    }
  }
}); 

//@route    Delete api/tenants/deleteTenant
//@desc     Delete tenant
//@access   Public
router.delete("/deleteTenant", async (req: Request, res: Response) => {
  const { dni } = req.headers;

  const existingTenant = await Tenant.findOne({ dni: dni });
  if(existingTenant)
  { 
    await existingTenant.remove();
    return res.status(200).json({ msg: "Tenant removed"});
  }
  else {
    return res.status(400).json({ msg: "The tenant does not exist"});
  }
});


const fieldsAreValid = (body): boolean => {
    const { name, lastname, email, dni, birthDate, address, phone } = body;
    return !!name && !!lastname && !!email && !!dni && !!birthDate &&!!address && !!phone;
};
  
export default router;