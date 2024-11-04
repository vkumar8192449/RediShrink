import { Router } from "express";
import { shrinkURL } from "../controllers/shrink.controller";

const router = Router();

router.route("/").post(shrinkURL);

export default router;
