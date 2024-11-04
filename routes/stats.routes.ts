import { Router } from "express";
import { statistics } from "../controllers/stats.controller";

const router = Router();

router.route("/:shrinkurl").get(statistics);

export default router;
