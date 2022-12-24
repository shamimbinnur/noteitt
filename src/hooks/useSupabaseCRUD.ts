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

const deleteNote = async (uuid: string) => {
    const data = await supabase
    .from('notes')
    .delete()
    .eq('uuid', uuid)
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
// Funtion to to toggle note shareable mode
//Param(2): uuid: string, mode: boolean

const setPublicMode = async (uuid: string, mode: boolean) => {
    const data = await supabase
    .from('notes')
    .update({ isPublic : mode })
    .eq('uuid', uuid)
    .select()
  
    return data;
}
// Funtion to to set note color
//Param(2): uuid: string, color: string

const setNoteColor = async (uuid: string, color: string) => {
    const data = await supabase
    .from('notes')
    .update({ color: color })
    .eq('uuid', uuid)
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

export const useSupabaseCRUD = () =>  ({ createNote, deleteNote, updateSpecificNote, setPublicMode, setNoteColor, fetchGuestNote })