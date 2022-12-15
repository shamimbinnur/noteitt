import supabase from "../config/supabaseClient"
import { NoteInfo } from "../types/types"

//Function to create a note in the Database
//Param(2) : Note's information and userID

const createNote = async (noteData: NoteInfo, authorId: string) => {
    const data = await supabase
    .from('notes')
    .insert({...noteData, authorId})
    
    return data;

}

//Function to delete a note from the Database
//Param(id): Specific note's ID

const deleteNote = async (id: number) => {
    const data = await supabase
    .from('notes')
    .delete()
    .eq('id', id)
    .select('title')
    
    return data;
}


// Funtion to update a note
//Param(2): noteInfo: NoteInfo, noteId: number

const updateSpecificNote = async (noteInfo: NoteInfo, noteId: number) => {
    const data = await supabase
    .from('notes')
    .update({title: noteInfo.title, details: noteInfo.details})
    .eq('id', noteId)
    .select()
  
    return data;
}

// Funtion to fetch a guest note
//Param(1): noteUUID: string

const fetchGuestNote = async ( noteUUID: string | undefined) => {
    const data = await supabase
    .from('notes')
    .select('*, profile(*)')
    .eq('uuid', noteUUID)
    .eq('isPublic', true)
    .single()
  
    return data
}

export const useSupabaseCRUD = () =>  ({ createNote, deleteNote, updateSpecificNote, fetchGuestNote })