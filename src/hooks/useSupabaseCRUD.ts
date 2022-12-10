import { PostgrestError } from "@supabase/supabase-js"
import supabase from "../config/supabaseClient"
import { NoteInfo } from "../types/types"

//Function to create a note in the Database
//Param(2) : Note's information and userID

const createNote = async (noteData: NoteInfo, authorId: string) => {
    const { data, error } = await supabase
    .from('notes')
    .insert({...noteData, authorId})
    
    if(data) return data
    if (error) return error as PostgrestError

}

//Function to delete a note from the Database
//Param(id): Specific note's ID

const deleteNote = async (id: number) => {
    const { data, error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id)
    .select("title")
    
    if(data) return data
    if(error) return error
}


// Funtion to update a note
//Param(2): noteInfo: NoteInfo, noteId: number

const updateSpecificNote = async (noteInfo: NoteInfo, noteId: number) => {
    const { data, error } = await supabase
    .from("notes")
    .update({title: noteInfo.title, details: noteInfo.details})
    .eq("id", noteId)
    .select()
  
    if (data) return data
    if(error) return data
}

export const useSupabaseCRUD = () =>  ({ createNote, deleteNote, updateSpecificNote })