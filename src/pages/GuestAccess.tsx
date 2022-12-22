import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSupabaseCRUD } from '../hooks/useSupabaseCRUD'
import { GuestNoteProps } from '../types/types'

const GuestAccess = () => {
    const { id } = useParams()
    const { fetchGuestNote } = useSupabaseCRUD()

    
    interface NoteState {
        note: GuestNoteProps | null
        error: object | null
    }

    const initialState = {
        note: null,
        error: null
    }

    const [noteState, setNoteState] = useState<NoteState>(initialState)

    useEffect(()=>{
        const fetchNote = async () => {
            const { data, error } = await fetchGuestNote(id)
            if(data) {
                setNoteState({
                    note: data as unknown as GuestNoteProps,
                    error: null
                })
            }
            else if(error) {
                setNoteState({
                    note: null,
                    error: error
                })
            }
            console.log(noteState)
        }
        fetchNote()
    },[])

    return (
        <div>
            {noteState.note?.title}
        </div>
    )
}

export default GuestAccess