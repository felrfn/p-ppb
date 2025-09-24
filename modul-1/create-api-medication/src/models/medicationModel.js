import { supabase } from "../config/supabaseClient.js";

export const MedicationModel = {
  async getAll(from, to) {
    const { data, error, count } = await supabase
      .from("medications")
      .select(
        `
      id, sku, name, description, price, quantity,
      category_id, supplier_id
    `,
        { count: "exact" },
      )
      .range(from, to);

    if (error) throw error;
    return { data, count };
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("medications")
      .select(
        `
        id, sku, name, description, price, quantity,
        categories ( id, name ),
        suppliers ( id, name, email, phone )
      `,
      )
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  async create(payload) {
    const { data, error } = await supabase
      .from("medications")
      .insert([payload])
      .select();

    if (error) throw error;
    return data[0];
  },

  async update(id, payload) {
    const { data, error } = await supabase
      .from("medications")
      .update(payload)
      .eq("id", id)
      .select();

    if (error) throw error;
    return data[0];
  },

  async searchByName(name, from, to) {
    const { data, error, count } = await supabase
      .from("medications")
      .select(
        `
      id, sku, name, description, price, quantity,
      category_id, supplier_id
    `,
        { count: "exact" },
      )
      .ilike("name", `%${name}%`)
      .range(from, to);

    if (error) throw error;
    return { data, count };
  },

  async getTotal() {
    const { data, error } = await supabase
      .from("medications")
      .select("id", { count: "exact" });

    if (error) throw error;
    return data.length;
  },
};
