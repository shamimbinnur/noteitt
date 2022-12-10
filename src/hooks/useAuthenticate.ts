import { AuthUser } from "@supabase/supabase-js";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import supabase from "../config/supabaseClient";
import { updateUser, logout } from "../store/features/user/userSlice";

const useAuthenticate = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const dispatch = useDispatch()

    useEffect( () => {
        verifyUser();
    }, [])

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_OUT"){
                setUser(null)
                dispatch(logout())
            } 
        })
    }, [user])
    
    
    const verifyUser = async ()=> {
        const { data: { user } } = await supabase.auth.getUser()
        dispatch(updateUser(user as AuthUser))
        setUser(user)
    }

    return user;
}

export default useAuthenticate;