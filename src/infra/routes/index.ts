import { uploadFileRoutes } from "@modules/upload-file/routes/upload-file.routes";
import { Router } from "express";

const routes = Router();

routes.use("/upload-file", uploadFileRoutes);

export { routes }