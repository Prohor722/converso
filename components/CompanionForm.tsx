"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    name: z.string().min(2, { message: "Companion is required "}),
    subject: z.string().min(2, { message: "Subject is required "}),
    topic: z.string().min(2, { message: "Topic is required "}),
    voice: z.string().min(2, { message: "Voice is required "}),
    style: z.string().min(2, { message: "Style is required "}),
    duration: z.number().min(2, { message: "Duration is required "}),
})

type FormData = z.infer<typeof formSchema>

const CompanionForm = () => {
    const form = useForm<FormData>({
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

const onSubmit = (values: FormData) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion name</FormLabel>
              <FormControl>
                    <Input placeholder="Enter companion name"
                    className="input"
                    {...field}
                    value={field.value || ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                    <Input placeholder="Enter companion name"
                    className="input"
                    {...field}
                    value={field.value || ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion name</FormLabel>
              <FormControl>
                    <Input placeholder="Enter companion name"
                    className="input"
                    {...field}
                    value={field.value || ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion name</FormLabel>
              <FormControl>
                    <Input placeholder="Enter companion name"
                    className="input"
                    {...field}
                    value={field.value || ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion name</FormLabel>
              <FormControl>
                    <Input placeholder="Enter companion name"
                    className="input"
                    {...field}
                    value={field.value || ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default CompanionForm