import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Mail } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const ForgotPassword = () => {
         const [email ,setEmail] = useState<
 string> ("")  
         const loading = false
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
        <form className="flex flex-col gap-5 md:border md:p-8 w-full max-w-md rounded-lg" action="input">
        <div className="text-center">
            <h1 className="text-2xl font-extrabold">Forgot Password</h1>
            <p className=" text-sm text-gray-500">Enter your Email to reset your password</p>
        </div>

        <div className="relative w-full">
            <Input 
            type="text" 
            placeholder="Enter your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="pl-10"
            />
            <Mail className="absolute inset-y-1 left-2 text-gray-600 pointer-events-none"/>
        </div>
        {
            loading ?(
            <Button><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>
        ): <Button className="bg-hoverOrange">Send Reset link</Button>
        }
        <span className="text-center">
            Back to {""}
            <Link to="/Login" className="text-blue-500">Login</Link>

        </span>


        </form>
    </div>

  )
}


export default ForgotPassword