import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function NotFound() {

    const navigate = useNavigate()
// Redirect to /
    useEffect(()=> {
        setTimeout(() => {
            navigate("/")
        }, 2000)
    }, [])
    return (
        <h2>Not found.... Taking you back to the home page</h2>
    )
  }
  
  export default NotFound;
  