import supabase from "../config/supabaseClient"

const deleteNote = async (id: number) => {
    const { data, error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id)
    .select("title")
  
    if(data){
      return data
    }
    if(error){
      return error
    }
  }

export { deleteNote }