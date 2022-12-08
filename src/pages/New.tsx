import React, { useState } from 'react'
import supabase from '../config/supabaseClient'

const New = () => {
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
    .insert([{title: title, details: details}])
    .select()

    if(error){
      setActionResponse("Something went wrong!")
    }
    if(data){
      setActionResponse("You has created a note succesfully!")
    }
  }

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
        />
        <input
          className="bg-gray-200 border border-gray-300 rounded-sm px-1"
          type="text"
          placeholder="Details"
          onChange={(e)=> setDetails(e.target.value)}
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

export default New