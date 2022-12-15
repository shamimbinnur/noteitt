import supabase from "../config/supabaseClient"
import { UserInfo } from "../types/types"

export const createUser = async (userInfo: UserInfo) => {
    const res = await supabase
    .from('profile')
    .upsert(userInfo)
  
    return res;
}