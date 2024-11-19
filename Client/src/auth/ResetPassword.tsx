import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, LockKeyhole } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const ResetPassword = () => {

  const [newPassword , setNewPassword] = useState<string>("")
  const loading = false

  return (
    <div className="flex items-center justify-center min-h-full w-full">
      <form action="" className="flex flex-col gap-5 md:border md:p-8 w-full max-w-md rounded-lg" >
        <div className="text-centered">
        <h1 className="text-2xl font-extrabold mb-2">Reset Password</h1>
        <p className="gap-5">Enter your new password</p>
        </div>
        <div className="relative w-full">
            <Input
            type="password"
            value={newPassword}
            placeholder="Enter your new password"
            onChange={(e)=>setNewPassword(e.target.value)}
            className="pl-10"

/>
<LockKeyhole className="absolute inset-y-2 left-2 text-grey"/>

        </div>
        {
            loading ?(
            <Button><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>
        ): <Button className="bg-hoverOrange">Send Reset link</Button>
        }
        <span className=" text-center">
            Back to {""}
            <Link to="/Login" className="text-blue-500">Login</Link>

        </span>

      </form>

    </div>
  )
}

export default ResetPassword