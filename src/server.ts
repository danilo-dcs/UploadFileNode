import { routes } from "infra/routes";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use(routes);

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000, () => {
  console.log("Runnig on port 3000 ...")
});