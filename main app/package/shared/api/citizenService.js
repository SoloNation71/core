import { supabase } from '../auth/supabaseClient';

export const citizenService = {
  // Create a new citizen
  createCitizen: async (userId) => {
    const { data, error } = await supabase
      .from('Citizen portal')
      .insert([{ user_id: userId }])
      .select();
    
    if (error) throw error;
    return data[0];
  },
  
  // Get citizen by ID
  getCitizen: async (id) => {
    const { data, error } = await supabase
      .from('Citizen portal')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },
  
  // Get citizen by user ID
  getCitizenByUserId: async (userId) => {
    const { data, error } = await supabase
      .from('Citizen portal')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (error) throw error;
    return data;
  }
};