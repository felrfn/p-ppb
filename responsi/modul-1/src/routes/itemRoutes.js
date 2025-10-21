import { Router } from "express";
import {
  handleCreateItem,
  handleGetAllItems,
  handleGetItemById,
  handleUpdateItem,
  handleDeleteItem,
} from "../controllers/itemController.js";

const router = Router();

router.post("/", handleCreateItem);
router.get("/", handleGetAllItems);
router.get("/:id", handleGetItemById);
router.put("/:id", handleUpdateItem);
router.delete("/:id", handleDeleteItem);

export default router;
