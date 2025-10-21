import * as itemModel from "../models/itemModel.js";

export const handleCreateItem = async (req, res) => {
  const { customer_name, shoe_type } = req.body;

  if (!customer_name || !shoe_type) {
    return res
      .status(400)
      .json({ error: "customer_name and shoe_type are required" });
  }

  const { data, error } = await itemModel.createItem({
    customer_name,
    shoe_type,
  });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json(data);
};

export const handleGetAllItems = async (req, res) => {
  const { status } = req.query;
  const { data, error } = await itemModel.getAllItems(status);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
};

export const handleGetItemById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await itemModel.getItemById(id);

  if (error) {
    if (error.code === "PGRST116") {
      return res.status(404).json({ error: "Item not found" });
    }
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
};

export const handleUpdateItem = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await itemModel.updateItem(id, req.body);

  if (error) {
    if (error.code === "PGRST116") {
      return res.status(404).json({ error: "Item not found" });
    }
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
};

export const handleDeleteItem = async (req, res) => {
  const { id } = req.params;
  const { error } = await itemModel.deleteItem(id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(204).send();
};
