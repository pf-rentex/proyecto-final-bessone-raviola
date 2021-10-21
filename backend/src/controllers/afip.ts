import { Request, Response } from 'express';
import AfipService from '../services/afip';

const checkContributor = async (req: Request, res: Response) => {
    const afip = new AfipService();
    const result = await afip.checkContributor(req.body.cuit);

    res.status(200).json({ result });
};

export default checkContributor;
