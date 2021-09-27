import {Request, Response} from 'express';
import Owner from "../models/owner";


const createOwner = async (req: Request, res: Response) => {
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
};

const getOwners = async (req: Request, res: Response) => {
  const owners = await Owner.find();
  res.json(owners);
};

const getOwner = async (req: Request, res: Response) => {
  const { cuit } = req.params;

  //Check for existing owner
  const owner = await Owner.findOne({ cuit });

  if (!owner){
    return res.status(400).json({ msg: "The Owner does not exist"});
  }
  else {
    res.json(owner);
  }
};

const updateOwner =  async (req: Request, res: Response) => {
  const {name, lastname, address, phone, dni, cuit, email} = req.body;

  //Simple validation
  if (!fieldsAreValid(req.body)) {
    return res.status(400).json({msg: "Please enter all fields"});
  }

  //Check for existing owner
  const existingOwner = await Owner.findOne({id: req.user.id});
  if (!existingOwner) {
    return res.status(400).json({msg: "The Owner does not exist"});
  } else {
    try {
      await Owner.updateOne({id: req.user.id}, {
        name: name,
        lastname: lastname,
        address: address,
        phone: phone,
        dni: dni,
        cuit: cuit,
        email: email,
      });

      return res.status(200).json({msg: "Owner updated"});

    } catch (error) {
      return res.status(400).json({msg: `Error registering owner: ${error}`});
    }
  }
};

const deleteOwner = async (req: Request, res: Response) => {
  const { id } = req.params;

  const existingOwner = await Owner.findOne({ id: id });
  if(existingOwner)
  {

    await existingOwner.remove();
    return res.status(200).json({ msg: "Owner removed"});
  }
  else {
    return res.status(400).json({ msg: "The owner does not exist"});
  }
};

const fieldsAreValid = (body): boolean => {
  const { name, lastname, address, phone, dni, cuit, email } = body;
  return !!name && !!lastname && !!address && !!phone && !!dni && !!cuit && !!email;
};

export {createOwner, getOwners, getOwner, updateOwner, deleteOwner};
