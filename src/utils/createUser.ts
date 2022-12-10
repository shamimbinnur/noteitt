import supabase from "../config/supabaseClient"
import { UserInfo } from "../types/types"

export const createUser = async (userInfo: UserInfo) => {
    console.log(userInfo)
    const { data, error } = await supabase
    .from("profile")
    .upsert(userInfo)
  
    if(data){
      return data
    }
    if(error){
      return error
    }
}