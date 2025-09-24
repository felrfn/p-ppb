import { MedicationModel } from "../models/medicationModel.js";

export const MedicationController = {
  async getAll(req, res) {
    try {
      const { name, page = 1, limit = 10 } = req.query;

      const currentPage = parseInt(page);
      const perPage = parseInt(limit);
      const from = (currentPage - 1) * perPage;
      const to = from + perPage - 1;

      let meds, count;

      if (name) {
        const result = await MedicationModel.searchByName(name, from, to);
        meds = result.data;
        count = result.count;
      } else {
        const result = await MedicationModel.getAll(from, to);
        meds = result.data;
        count = result.count;
      }

      res.json({
        data: meds,
        pagination: {
          page: currentPage,
          limit: perPage,
          total: count,
          totalPages: Math.ceil(count / perPage),
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const med = await MedicationModel.getById(req.params.id);
      res.json(med);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const { name, price, quantity } = req.body;

      if (price < 0) {
        return res
          .status(400)
          .json({ error: "Harga tidak boleh kurang dari 0" });
      }

      if (quantity < 0) {
        return res
          .status(400)
          .json({ error: "Stok (quantity) tidak boleh kurang dari 0" });
      }

      const med = await MedicationModel.create(req.body);
      res.status(201).json(med);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { price, quantity } = req.body;

      if (price !== undefined && price < 0) {
        return res
          .status(400)
          .json({ error: "Harga tidak boleh kurang dari 0" });
      }

      if (quantity !== undefined && quantity < 0) {
        return res
          .status(400)
          .json({ error: "Stok (quantity) tidak boleh kurang dari 0" });
      }

      const med = await MedicationModel.update(req.params.id, req.body);
      res.json(med);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      await MedicationModel.remove(req.params.id);
      res.json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getTotal(req, res) {
    try {
      const total = await MedicationModel.getTotal();

      res.json({ total });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
