"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { maxLength, minLength, z } from "zod"

const formSchema = z.object({
    name: z.string().min(2, { message: "Companion is required "}),
    subject: z.string().min(2, { message: "Subject is required "}),
    topic: z.string().min(2, { message: "Topic is required "}),
    voice: z.string().min(2, { message: "Voice is required "}),
    style: z.string().min(2, { message: "Style is required "}),
    duration: z.coerce.number().min(2, { message: "Duration is required "}),
})
const CompanionForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 15,
        }
    })

  return (
    <div>CompanionForm</div>
  )
}

export default CompanionForm