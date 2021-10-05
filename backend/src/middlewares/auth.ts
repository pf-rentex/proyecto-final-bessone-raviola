import jsonwebtoken from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface getUserRequest extends Request {
  user: {
    id: string;
  };
  headers: Request.headers;
}

function auth(req: getUserRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  //Check for token
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    //Verify token
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);

    //Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

export default auth;
