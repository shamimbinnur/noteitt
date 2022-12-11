import { AuthUser } from "@supabase/supabase-js";
import { useEffect } from "react"
import { useDispatch  } from "react-redux";
import supabase from "../config/supabaseClient";
import { updateUser, logout } from "../store/features/user/userSlice";

const useAuthenticate = () => {
    const dispatch = useDispatch()

    useEffect( () => {
        verifyUser();
    },[])

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_OUT"){
                dispatch(logout())
            } 
        })
    }, [])
    
    
    const verifyUser = async ()=> {
        const { data: { user } } = await supabase.auth.getUser()
        dispatch(updateUser(user as AuthUser))
    }
}

export default useAuthenticate;