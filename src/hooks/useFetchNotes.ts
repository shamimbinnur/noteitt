import { PostgrestError } from "@supabase/supabase-js"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import supabase from "../config/supabaseClient"
import { updateAllNotes, updateError } from "../store/features/note/noteSlice"
import { RootState } from "../store/store"

export const useFetchNotes = () => {
    const dispatch = useDispatch()
    const noteSate = useSelector((state: RootState) => state.note)
    
    useEffect(() => {
      updateState()
    },[])
    

    useEffect(() => {
        supabase
        .channel('public:notes')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'notes' }, payload => {
          updateState()
          console.log("Received!")
        })
        .subscribe()
    
        return () => {
          supabase.removeAllChannels()
        }
    },[])

    const updateState = async () => {
        const { data, error } = await supabase
        .from("notes")
        .select()
        .order('created_at', { ascending: false })
    
        if (data) {
          dispatch(updateAllNotes(data))
          console.log(noteSate)
          dispatch(updateError(null as unknown as PostgrestError))
        }
        else if ( error){
          dispatch(updateAllNotes([]))
          dispatch(updateError(error))
        }
      }
}