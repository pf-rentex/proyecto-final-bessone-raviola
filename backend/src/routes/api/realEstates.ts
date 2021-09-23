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

//@route    Get api/realEstates/
//@desc     Search realEstates
//@access   Public
router.get("/", async (req: Request, res: Response) => {
  const realEstates = await RealEstate.find();
  res.json(realEstates);
});

//@route    Get api/realEstates/:cuit
//@desc     Search realEstate
//@access   Public
router.get("/:cuit", async (req: Request, res: Response) => {
  const { cuit } = req.params;

  //Check for existing realEstate
  const realEstate = await RealEstate.findOne({ cuit });
  if (!realEstate) {
    return res.status(400).json({ msg: "The RealEstate does not exist"});

  } 
  else {
    res.json(realEstate);
  }
})

//@route    Put api/realEstates/:id
//@desc     Modify realEstate
//@access   Public
router.put("/:id", async (req: Request, res: Response) => {
  const { ownerName, ownerLastname, ownerDni, address, phone, cuit, email, businessName } = req.body;
  const { id } = req.params;

  //Simple validation
  if (!fieldsAreValid(req.body)) {
    return res.status(400).json({ msg: "Please enter all fields" });  

  }

  //Check for existing realEstate
  const existingRealEstate = await RealEstate.findOne({ id: id });
  if (!existingRealEstate) {
    return res.status(400).json({ msg: "The RealEstate does not exist"});

  } 
  else {
    try{
      await RealEstate.updateOne({id: id}, {
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

//@route    Delete api/realEstates/:id
//@desc     Delete realEstate
//@access   Public
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const existingRealEstate = await RealEstate.findOne({ id: id });
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
  return !!ownerName && !!ownerLastname && !!ownerDni && !!address && !!phone && !!cuit && !!email && !!businessName;

};
  
export default router;