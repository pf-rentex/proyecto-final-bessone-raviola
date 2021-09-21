import express, { Request, Response } from "express";
import Owner from "../../models/owner";

const router = express.Router();

//@route    Post api/owners
//@desc     Register new owner
//@access   Public
router.post("/", async (req: Request, res: Response) => {
  const { name, lastname, address, phone, dni, cuit, email } = req.body;

  //Simple validation
  if (!fieldsAreValid(req.body)) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  //Check for existing owner
  const existingOwner = await Owner.findOne({ cuit: cuit });
  if (existingOwner) return res.status(400).json({ msg: "Owner Already exists" });
  
  const newOwner = new Owner({
    name,
    lastname,
    address,
    phone,
    dni,
    cuit,
    email,
  });

  //Create Owner
  try {  
    const owner = await newOwner.save();
    res.json({owner});

  } 
  catch (error) {
    return res.status(400).json({ msg: `Error registering owner: ${error}` });
  }
});

//@route    Get api/owners/getOwners
//@desc     Search owners
//@access   Public
router.get("/getOwners", async (req: Request, res: Response) => {
  const owners = await Owner.find();
  res.json(owners);
});

//@route    Get api/owners/getOwner
//@desc     Search owner
//@access   Public
router.get("/getOwner", async (req: Request, res: Response) => {
  const { cuit } = req.headers;
  
  //Check for existing owner
  const owner = await Owner.findOne({ cuit: cuit });
  
  if (!owner){
    return res.status(400).json({ msg: "The Owner not exists"});
  } 
  else {
    res.json(owner);
  }
});

//@route    Put api/owners/updateOwner
//@desc     Modify owner
//@access   Public
router.put("/updateOwner", async (req: Request, res: Response) => {
  const { name, lastname, address, phone, dni, cuit, email } = req.body;

  //Simple validation
  if (!fieldsAreValid(req.body)) {
    return res.status(400).json({ msg: "Please enter all fields" });  
  }

  //Check for existing owner
  const existingOwner = await Owner.findOne({ cuit: cuit });
  if (!existingOwner) {
    return res.status(400).json({ msg: "The Owner does not exist"});
  }
  else {
    try{
      await existingOwner.updateOne({
        name: name,
      lastname: lastname,
      address: address,
      phone: phone,
      dni: dni,
      cuit: cuit,
      email: email,
      });

      return res.status(200).json({ msg: "Owner updated"});

    } 
    catch (error) {
      return res.status(400).json({ msg: `Error registering owner: ${error}` });
    }
  }
}); 

//@route    Delete api/owners/deleteOwner
//@desc     Delete owner
//@access   Public
router.delete("/deleteOwner", async (req: Request, res: Response) => {
  const { cuit } = req.headers;

  const existingOwner = await Owner.findOne({ cuit: cuit });
  if(existingOwner)
  { 

    await existingOwner.remove();
    return res.status(200).json({ msg: "Owner removed"});
  }
  else {
    return res.status(400).json({ msg: "The owner does not exist"});
  }
});


const fieldsAreValid = (body): boolean => {
    const { name, lastname, address, phone, dni, cuit, email } = body;
    return !!name && !!lastname && !!address && !!phone && !!dni &&!!cuit && !!email;
};
  
export default router;