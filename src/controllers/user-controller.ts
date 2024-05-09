import { Request, Response } from "express";

export class UserController  {


  getAll(request: Request, response: Response) {
    

    return response.json({ test: "Teste" });
  }


}