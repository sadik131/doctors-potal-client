import { useEffect } from "react";
import { useState } from "react";

const useToken = user =>{
    const [token , setToken] = useState("")
    
    const email = user?.user?.email
    
    useEffect( () =>{
        const current = {email : email}
        if(email){
            fetch(`http://localhost:5000/users/${email}` ,{
                method:"POST",
                headers:{
                   "Content-type": "application/json"
                },
                body:JSON.stringify(current)
            })
            .then(res =>res.json())
            .then(data =>{
                const token = data.accessToken
                localStorage.setItem("accessToken" , token)
                setToken(token)
            })
        }
    },[email])

    return [token , setToken]
}
export default useToken