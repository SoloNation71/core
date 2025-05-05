import { supabase } from '../auth/supabaseClient';

export const videoService = {
  // Get all videos
  getAllVideos: async () => {
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .order('order', { ascending: true });
    
    if (error) throw error;
    return data;
  },
  
  // Get a specific video
  getVideo: async (id) => {
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },
  
  // Track video progress
  saveProgress: async (userId, videoId, watchedSec, completed) => {
    const { data, error } = await supabase
      .from('video_progress')
      .upsert({
        user_id: userId,
        video_id: videoId,
        watched_sec: watchedSec,
        completed: completed
      });
    
    if (error) throw error;
    return data;
  },
  
  // Get progress for a user
  getUserProgress: async (userId) => {
    const { data, error } = await supabase
      .from('video_progress')
      .select('*')
      .eq('user_id', userId);
    
    if (error) throw error;
    return data;
  }
};