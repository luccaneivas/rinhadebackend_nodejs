import { Router } from "express";
import { router as homepage } from "./app/routes/homepage";

const router: Router = Router();

router.get("/", homepage);

export { router };
