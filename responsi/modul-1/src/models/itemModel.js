import supabase from "../config/supabaseClient.js";

const TABLE_NAME = "shoe_laundry";

export const createItem = async (itemData) => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert(itemData)
    .select()
    .single();
  return { data, error };
};

export const getAllItems = async (status) => {
  let query = supabase.from(TABLE_NAME).select("*");

  if (status) {
    query = query.ilike("status", status);
  }

  const { data, error } = await query.order("created_at", { ascending: false });
  return { data, error };
};

export const getItemById = async (id) => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .eq("id", id)
    .single();
  return { data, error };
};

export const updateItem = async (id, updates) => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(updates)
    .eq("id", id)
    .select()
    .single();
  return { data, error };
};

export const deleteItem = async (id) => {
  const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);
  return { error };
};
