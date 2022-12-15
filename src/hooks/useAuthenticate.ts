/* eslint-disable react-hooks/exhaustive-deps */
import { AuthUser } from "@supabase/supabase-js";
import { useEffect } from "react"
import { useDispatch  } from "react-redux";
import supabase from "../config/supabaseClient";
import { updateUser, logout } from "../store/features/user/userSlice";
import { UserInfo } from "../types/types";
import { createUser } from "../utils/createUser";

const useAuthenticate = () => {
    const dispatch = useDispatch()

    useEffect( () => {
        verifyUser();
    },[])

    useEffect(() => {
        supabase.auth.onAuthStateChange((event) => {
            if (event === "SIGNED_OUT"){
                dispatch(logout())
            } 
        })
    }, [])
    
    
    const verifyUser = async ()=> {
        const { data: { user } } = await supabase.auth.getUser()
        
        if(user) {
            const userInfo: UserInfo = {
              id: user?.id,
              full_name: user?.user_metadata.full_name,
              email: user?.email,
              avatar: user?.user_metadata.avatar_url,
            }
    
            await createUser(userInfo)
          }
        dispatch(updateUser(user as AuthUser))
    }
}

export default useAuthenticate;