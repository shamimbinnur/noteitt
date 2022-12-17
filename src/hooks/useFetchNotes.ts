/* eslint-disable react-hooks/exhaustive-deps */
import { PostgrestError } from "@supabase/supabase-js"
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import supabase from "../config/supabaseClient"
import { setLoading, updateAllNotes, updateError } from "../store/features/note/noteSlice"
import { RootState } from "../store/store"

export const useFetchNotes = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state: RootState) => state.user)

    useEffect(() => {
      updateState()
    },[])

    useEffect(() => {
        console.log("I started listening")
        supabase
        .channel('public:notes')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'notes' }, payload => {
          updateState()
          console.log('Received!')
        })
        .subscribe()
    
        return () => {
          supabase.removeAllChannels()
        }
    },[])

    const updateState = async () => {

      dispatch(setLoading(true))

      try {
        const { data, error } = await supabase
        .from('notes')
        .select()
        .eq('authorId', user?.id)
        .order('created_at', { ascending: false })
        if (data) {
          dispatch(updateAllNotes(data))
          dispatch(updateError(null as unknown as PostgrestError))
          dispatch(setLoading(false))
        }
        else if ( error){
          dispatch(updateAllNotes([]))
          dispatch(updateError(error))
          dispatch(setLoading(false))
        }
        
      } catch (error) {
        console.log("Got while listening: ", error)
      }
    }
}