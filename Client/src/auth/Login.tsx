import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Link2, Loader2, LockKeyhole, Mail } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import { LoginInputState, signupInputState, userLoginSchema, } from "@/schema/userSchema"

const Login = () => {

    const [input, setInput] = useState<LoginInputState>({
        email: "",
        password: "",
    });
    

    const [errors, setErrors] = useState<Partial<signupInputState>>({
    })

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }


    const loginSubmitHandler = (e: FormEvent) => {
        e.preventDefault()

        const result = userLoginSchema.safeParse(input)
        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors
            setErrors(fieldErrors as Partial<LoginInputState>)
            return
        }

        setErrors({})

        console.log(input)
    }

    const loading = false



    return (
        <div className="flex items-center justify-center min-h-screen">

            <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md md:border border-gray-500 rounded-lg">

                <div className="mb-4 font-bold">
                    Ankit Eats
                </div>

                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="email"
                            placeholder=" Email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            className="pl-10" />
                        <Mail className="absolute inset-y-2 left-2 text-gray-400 pointer-events-none" />
                        {errors && <span className="text-sm text-red-700" > {errors.email}</span>}
                    </div>
                </div>

                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="password"
                            placeholder=" password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            className="pl-10" />
                        <LockKeyhole className="absolute inset-y-2 left-2 text-gray-400 pointer-events-none" />
                        {errors && <span className="text-sm text-red-700" > {errors.password}</span>}
                    </div>
                </div>

                <div className="mb-10">
                    {loading ? (<Button type="submit" className=" w-full bg-orange : hover:bg-hoverOrange">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> please wait
                    </Button>) : (
                        <Button className=" w-full bg-orange : hover:bg-hoverOrange">Login</Button>
                    )}

                    <div className="mt-4">
                        <Link to="/forgot-password" className="text-blue-500">Forgot Password</Link>

                    </div>


                </div>


                <Separator className="w-full" />

                <p className="mt-2"> Dont't have account ? {" "}<Link to="/Signup" className="text-blue-800">Signup</Link>
                </p>
            </form>
        </div>
    )
}

export default Login