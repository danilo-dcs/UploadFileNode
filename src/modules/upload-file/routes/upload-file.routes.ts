import { Router } from "express";
import { UploadFileCsvController } from "../controllers/UploadFileCsvController";
import multer from 'multer'

const uploadFileRoutes = Router();

const upload = multer({ dest: "/var/tmp" })

const uploadFileCsvCOntroller = new UploadFileCsvController();

uploadFileRoutes.post("/csv", upload.single("file") , uploadFileCsvCOntroller.handle)

export { uploadFileRoutes }