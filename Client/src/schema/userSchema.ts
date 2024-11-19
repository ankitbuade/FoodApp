import {z} from "zod"

export const userSignupSchema = z.object({
    fullName : z.string().min(1,"Please Enter valid Details").max(50,"Name is exceeding word limit enter valid name"),

    email : z.string().email("invalid email address"),

    password : z.string().min(6,"Password is too short"),

    contact : z.string().regex(/^\d{10}$/, "Enter a valid 10-digit contact number")
})

export type signupInputState= z.infer<typeof userSignupSchema>


export const userLoginSchema = z.object({
    email : z.string().email("invalid email address"),

    password : z.string().min(6,"Password is too short"),
})

export type LoginInputState= z.infer<typeof userLoginSchema>