import { Request, Response } from "express";

class UploadFileCsvController{

  async handle(request: Request, response: Response): Promise<Response>{

    console.log("**\nHEADER\n")
    console.log(request.headers)

    console.log("**\nBODY\n")
    console.log(request.body)

    console.log("**\nARQUIVO\n")
    console.log(request.file)

    return response.status(201).json({ status: 201, message: "Ok" })
  }
}

export { UploadFileCsvController }