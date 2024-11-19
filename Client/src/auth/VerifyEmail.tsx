import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { useRef, useState } from "react"


const VerifyEmail = () => {
   const Loading = false
   const [otp ,setOtp] = useState<string []>(["","","","","",""])
   const inputRef = useRef<any> ([])
   const handleChange = (index : number , value : string)=>{
    if(/^[a-zA-Z0_9]$/.test(value)||value == ""){
        const newOtp = [...otp]
    newOtp[index] =value
    setOtp(newOtp)
}

        if(value !=""  && index<5){
            inputRef.current[index+1].focus()
        }

   }

   const handleKeyDown  = (index:number ,e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key== 'Backspace' && !otp[index]&& index > 0){
        inputRef.current[index-1].focus()
    }
   }

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
        <div className="p-8 rounded-md w-full flex flex-col gap-10 border border-gray-200">
            <div className="text-center">
            <h1 className="font-extrabold text-2xl ">Verify your Email</h1>
            <p className="text-sm text-gray-600">Enter the 6 digit code sent to your email address</p>
            </div>
            <form action="">
                <div className="flex gap-5 mb-4" >
                    {
                        otp.map((letter:string ,idx:number)=>(
                            <Input
                            key={idx}
                            type= "text"
                            ref={(element) =>(inputRef.current[idx]=element)}
                            maxLength={1}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleChange(idx,e.target.value  )}
                            value={letter}
                            onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=> handleKeyDown(idx,e)}
                            className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline-none focus:ring-indigo-500"
                            />
                        ))
                    }

                </div>
                {
                    Loading ?<Button disabled className="bg-orange relative justify-center gap-5 hover:bg-hoverOrange w-full">Verify
                     <Loader2 className="mr-2 w-4 h-4 animate-spin"/>
                     Please wait

                    </Button>:(
                        <Button className="bg-orange relative justify-center gap-5 hover:bg-hoverOrange w-full">Verify
                          </Button>

                    )
                }
                
            </form>
        </div>

    </div>
  )
}

export default VerifyEmail