import express, { Request, Response } from "express";
import RealEstate from "../../models/realEstate";

const router = express.Router();

//@route    Post api/realEstates
//@desc     Register new realEstate
//@access   Public
router.post("/", async (req: Request, res: Response) => {
  const { ownerName, ownerLastname, ownerDni, address, phone, cuit, email, businessName } = req.body;

  //Simple validation
  if (!fieldsAreValid(req.body)) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  //Check for existing realEstate
  const existingRealEstate = await RealEstate.findOne({ cuit: cuit });
  if (existingRealEstate) return res.status(400).json({ msg: "RealEstate Already exists" });
  
  const newRealEstate = new RealEstate({
    ownerName,
    ownerLastname,
    ownerDni,
    address,
    phone,
    cuit,
    email,
    businessName,
  });

  //Create RealEstate
  try {  
    const realEstate = await newRealEstate.save();
    res.json({realEstate});

  } 
  catch (error) {
    return res.status(400).json({ msg: `Error registering realEstate: ${error}` });
  }
});

//@route    Get api/realEstates/getRealEstates
//@desc     Search realEstates
//@access   Public
router.get("/getRealEstates", async (req: Request, res: Response) => {
  const realEstates = await RealEstate.find();
  res.json(realEstates);
});

//@route    Get api/realEstates/getRealEstate
//@desc     Search realEstate
//@access   Public
router.get("/getRealEstate", async (req: Request, res: Response) => {
  const { cuit } = req.headers;

  //Check for existing realEstate
  const realEstate = await RealEstate.findOne({ cuit: cuit });
  if (!realEstate) {
    return res.status(400).json({ msg: "The RealEstate not exists"});

  } 
  else {
    res.json(realEstate);
  }
})

//@route    Put api/realEstates/updateRealEstate
//@desc     Modify realEstate
//@access   Public
router.put("/updateRealEstate", async (req: Request, res: Response) => {
  const { ownerName, ownerLastname, ownerDni, address, phone, cuit, email, businessName } = req.body;

  //Simple validation
  if (!fieldsAreValid(req.body)) {
    return res.status(400).json({ msg: "Please enter all fields" });  

  }

  //Check for existing realEstate
  const existingRealEstate = await RealEstate.findOne({ cuit: cuit });
  if (!existingRealEstate) {
    return res.status(400).json({ msg: "The RealEstate does not exist"});

  } 
  else {
    try{
      await existingRealEstate.updateOne({
        ownerName: ownerName,
        ownerLastname: ownerLastname,
        ownerDni: ownerDni,
        address: address,
        phone: phone,
        cuit: cuit,
        email: email,
        businessName: businessName,
      });

      return res.status(200).json({ msg: "RealEstate updated"});
    } 
    catch (error) {
      return res.status(400).json({ msg: `Error registering realEstate: ${error}` });
    }
  } 
});  

//@route    Delete api/realEstates/deleteRealEstate
//@desc     Delete realEstate
//@access   Public
router.delete("/deleteRealEstate", async (req: Request, res: Response) => {
  const { cuit } = req.headers;

  const existingRealEstate = await RealEstate.findOne({ cuit: cuit });
  if(existingRealEstate)
  {  
    await existingRealEstate.remove();
    return res.status(200).json({ msg: "RealEstate removed"});
  } 
  else {
    return res.status(400).json({ msg: "The realEstate does not exist"});
  }

});


const fieldsAreValid = (body): boolean => {
  const { ownerName, ownerLastname, ownerDni, address, phone, cuit, email, businessName } = body;
  return !!ownerName && !!ownerLastname && !!ownerDni && !!address && !!phone &&!!cuit && !!email && !!businessName;

};
  
export default router;