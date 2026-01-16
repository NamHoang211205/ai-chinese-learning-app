"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type Resolver } from "react-hook-form"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { subjects } from "@/constants"
import { Textarea } from "./ui/textarea"

const voices = [
  { value: 1, label: "Male" },
  { value: 2, label: "Female" },
];

const formSchema = z.object({
  name: z.string().min(1, {message: "Companion is required."}),
  subject: z.string().min(1, {message: "Subject is required."}),
  topic: z.string().min(1, {message: "Topic is required."}),
  voice: z.number().min(1, {message: "Voice is required."}),
  style: z.string().min(1, {message: "Style is required."}),
  duration: z.coerce.number().min(1, {message: "Duration is required."})

})

type FormValues = z.infer<typeof formSchema>;

const formResolver = zodResolver(formSchema) as Resolver<FormValues>;

const CompanionForm = () => {
  // 1. Define your form.
  const form = useForm<FormValues>({
    resolver: formResolver,
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: 1,
      style: "",
      duration: 15,
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
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
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the companion name"
                 {...field}
                 className="input" 
                 />
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
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject} className="capitalize">
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should the companion help with?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe what you want this companion to help with"
                  {...field}
                  className="input min-h-[120px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voices</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(val) => field.onChange(Number(val))}
                  value={String(field.value)}
                  defaultValue={String(field.value)}
                >
                  <SelectTrigger className="input">
                    <SelectValue placeholder="Select voice" />
                  </SelectTrigger>
                  <SelectContent>
                    {voices.map((v) => (
                      <SelectItem key={v.value} value={String(v.value)}>
                        {v.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., friendly, concise, exam-focused"
                  {...field}
                  className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Session Duration (minutes)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  step={1}
                  placeholder="15"
                  value={field.value ?? 15}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="input"
                />
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