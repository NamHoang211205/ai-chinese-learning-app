'use server';

import {auth} from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/lib/supabase";

export const createCompanion = async (formData: CreateCompanion ) => {
    const {userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
    .from('Learning')
    .insert({...formData, author})
    .select();

    if (error || !data) throw new Error(error?.message || 'Failed to create companion');

    return data[0];
}

export const getAllCompanions = async ({ limit = 10, page = 1, subject, topic}: GetAllCompanions) => {
    const supabase = createSupabaseClient();

    let query = supabase
    .from('Learning')
    .select();
    if (subject && topic) {
        query = query.ilike('subject', `%${subject}%`)
            .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);   
    } else if (subject) {
        query = query.ilike('subject', `%${subject}%`);
    } else if (topic) {
        query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
    }

    query = query.range((page - 1) * limit, page * limit - 1);

    const { data: Learning, error } = await query;

    if (error) throw new Error(error?.message);

    return Learning;
}

export const getCompanion = async (id: string) => {
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('Learning')  
        .select() 
        .eq('id', id);

    if (error) throw new Error(error?.message);

    return data ? data[0] : null;
}

export const addToSessionHistory = async (companionId: string) => {
    const {userId} = await auth();
    const supabase = createSupabaseClient();
    const { data, error } = await supabase.from('session_history').insert({
        companion_id: companionId,
        user_id: userId || 'guest',
    })
    if (error) throw new Error(error?.message);

    return data;
}

export const getRecentSessionHistory = async (limit: number = 10) => {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('session_history')
        .select(`Learning: companion_id (*)`)
        .order('created_at', { ascending: false })
        .limit(limit)
    
    if (error) throw new Error(error?.message);

    return data.map(({Learning}) => Learning);
}

export const getUserSessions = async (userId: string, limit: number = 10) => {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('session_history')
        .select(`Learning: companion_id (*)`)
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit)
    
    if (error) throw new Error(error?.message);

    return data.map(({Learning}) => Learning);
}

export const getUser = async (userId: string) => {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('Learning')
        .select()
        .eq('author', userId)
        
    
    if (error) throw new Error(error?.message);

    return data;
}
