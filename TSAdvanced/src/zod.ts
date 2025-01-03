import express from "express" ;
import {z} from "zod" ;

const app = express()

const userSchema = z.object({
    fName : z.string().min(1,"First name cant be empty "),
    lName : z.string().min(1,"First name cant be empty "),
    age : z.number().positive("Age cant be -ve ").optional()
})

type userType = z.infer<typeof userSchema>;

app.put("/" , (req,res)=>{
    const {success} = userSchema.safeParse(req.body)
    const updateBody:userType = req.body
})


