import { Router } from "express";
import { redirect } from "../controllers/redirect.controller";

const router = Router();

router.route("/:redirect").get(redirect);

export default router;
