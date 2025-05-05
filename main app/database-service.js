// database-service.js
import { supabase } from './shared-auth'

export const db = {
  // Videos
  videos: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('order', { ascending: true })
      
      if (error) throw error
      return data
    },
    
    getById: async (id) => {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      return data
    }
  },
  
  // Video Progress
  videoProgress: {
    save: async (userId, videoId, watchedSec, completed) => {
      const { data, error } = await supabase
        .from('video_progress')
        .upsert({
          user_id: userId,
          video_id: videoId,
          watched_sec: watchedSec,
          completed: completed
        })
      
      if (error) throw error
      return data
    },
    
    getByUser: async (userId) => {
      const { data, error } = await supabase
        .from('video_progress')
        .select('*')
        .eq('user_id', userId)
      
      if (error) throw error
      return data
    }
  },
  
  // Citizen Portal
  citizen: {
    create: async (userId) => {
      const { data, error } = await supabase
        .from('Citizen portal')
        .insert([{ user_id: userId }])
        .select()
      
      if (error) throw error
      return data[0]
    },
    
    getById: async (id) => {
      const { data, error } = await supabase
        .from('Citizen portal')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      return data
    }
  },
  
  // Admin Portal
  admin: {
    isAdmin: async (userId) => {
      const { data, error } = await supabase
        .from('Admin portal')
        .select('is_admin')
        .eq('admin_access', userId)
        .single()
      
      if (error) return false
      return data?.is_admin || false
    }
  }
}