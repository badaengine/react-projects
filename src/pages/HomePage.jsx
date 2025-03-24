"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate  } from "react-router-dom";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function HomePage() {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values) {
    if(values.username === "1234"){
      navigate('/dash');
    }
    else{
      form.setError("username", { type: "manual", message: "Invalid PIN" });
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome!!!</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter PIN</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter PIN" {...field} />
                  </FormControl>
                   
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="ghost" className="bg-black text-white">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
