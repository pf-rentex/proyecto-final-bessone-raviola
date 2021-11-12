import {Request, Response} from 'express';
import Publication from '../models/publication';

const createPublication = async (req: Request, res: Response) => {
  const { title, propertyId, startDate, endDate } = req.body;

  //Simple validation
  if (!fieldsAreValid(req.body)) {
    return res.status(400).json({msg: "Please enter all fields"});

  }

  //Check for existing publication for property
  const existingPublication = await Publication.findOne({propertyId: propertyId});
  if (existingPublication) return res.status(400).json({msg: "Publication Already exists"});

  const newPublication = new Publication({
    title,
    propertyId,
    status: true,
    startDate,
    endDate,
  });

  //Create Publication
  try {
    const publication = await newPublication.save();

    res.json({publication});

  } catch (error) {
    return res.status(400).json({msg: `Error registering publication: ${error}`});
  }
};

const getPublications = async (req: Request, res: Response) => {
  const publications = await Publication.find();
  res.json(publications);
};

const getPublication = async (req: Request, res: Response) => {
  const {id} = req.params;

  //Check for existing publication
  const publication = await Publication.findOne({_id: id});
  if (!publication) {
    return res.status(400).json({msg: "The Publication does not exist"});

  } else {

    res.json(publication);
  }
};

const updatePublication = async (req: Request, res: Response) => {
  const { title, propertyId, startDate, endDate } = req.body;

  //Simple validation
  if (!fieldsAreValid(req.body)) {
    return res.status(400).json({msg: "Please enter all fields"});
  }

  //Check for existing publication
  const existingPublication = await Publication.findOne({propertyId: propertyId});
  console.log(existingPublication.id);
  if (!existingPublication) {
    return res.status(400).json({msg: "The Publication does not exist"});
  } 
  else {
    try {
      await Publication.updateOne({_id: existingPublication.id}, {
        title: title,
        propertyId: propertyId,
        status: true,
        startDate: startDate,
        endDate: endDate,
      });

      return res.status(200).json({msg: "Publication updated"});

    } catch (error) {
      return res.status(400).json({msg: `Error registering publication: ${error}`});
    }
  }
};

const deletePublication = async (req: Request, res: Response) => {
  const {id} = req.params;

  const existingPublication = await Publication.findOne({_id: id});
  if (existingPublication) {
    await existingPublication.remove();
    return res.status(200).json({msg: "Publication removed"});
  } else {
    return res.status(400).json({msg: "The Publication does not exist"});
  }
};

const fieldsAreValid = (body): boolean => {
  const {title, propertyId, startDate, endDate} = body;
  return !!title && !!propertyId && !!startDate && !!endDate;
};

export {createPublication, getPublications, getPublication, updatePublication, deletePublication}