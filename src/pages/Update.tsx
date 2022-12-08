import React, { useEffect, useState } from 'react'
import supabase from '../config/supabaseClient'
import { useParams } from 'react-router-dom'

const Update = () => {
  const [fetchError, setFetchError] = useState<string>("")
  const [notes, setNotes] = useState<any>()
  const {id } = useParams();

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [actionResponse, setActionResponse] = useState("")

  const onSubmitHandler = async (e: { preventDefault: () => void })=> {
    e.preventDefault();
    console.log(title, details)

    if( !title || !details){
      setActionResponse("Can you please fill up all of the fields?")
      return
    }

    const { data, error} = await supabase
    .from("notes")
    .update({title: title, details: details})
    .eq("id", id)
    .select()

    if(error){
      setActionResponse("Something went wrong!")
    }
    if(data){
      setActionResponse("You has updated the note succesfully!")
    }
  }

  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase
      .from("notes")
      .select()
      .eq("id", id)
      .single()

      if ( error){
          setFetchError("Failed to fetch notes!")
          setNotes([])
          console.log(error)
      }
      if (data) {
          setNotes(data)
          setFetchError("")
          console.log(data)
          setTitle(data.title)
          setDetails(data.details)
      }
  }

  fetchNotes();

  }, [])
  
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <form
      onSubmit={onSubmitHandler}
      className="flex flex-col gap-y-3 max-w-sm">
        <input
          className="bg-gray-200 border border-gray-300 rounded-sm px-1"
          type="text"
          placeholder="Title"
          onChange={(e)=> setTitle(e.target.value)}
          value={title}
        />
        <input
          className="bg-gray-200 border border-gray-300 rounded-sm px-1"
          type="text"
          placeholder="Details"
          onChange={(e)=> setDetails(e.target.value)}
          value={details}
        />

        <button
          className="bg-gray-200 border border-gray-300 rounded-sm px-1"
          type="submit"  
        >
          Create
        </button>
      </form>

      {
        actionResponse &&
        <p className="py-4">{actionResponse}</p>
      }
    </div>
  )
}

export default Update