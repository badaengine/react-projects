"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
 
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
 
import { useNavigate } from "react-router-dom";
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
    if (values.username === "1234") {
      navigate("/dash");
    } else {
      form.setError("username", { type: "manual", message: "Invalid PIN" });
    }
  }
  return (
    <>
      <div class="flex items-center min-h-screen p-2  lg:justify-center">
        <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div class="p-4 py-6 text-white bg-blue-500 md:w-90 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div class="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="#" className="text-primary-foreground">
                Welcome!!!
              </a>
            </div>
            <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.!
            </p>
            <p class="flex flex-col items-center justify-center mt-10 text-center">
              <a href="#" class="underline">
                Get Started!
              </a>
            </p>
            <p class="mt-6 text-sm text-center text-gray-300">
              Read our
              <a href="#" class="underline ml-1 mr-1">
                terms
              </a>
              and
              <a href="#" class="underline ml-1">
                conditions
              </a>
            </p>
          </div>
          <div class="p-5 bg-white md:flex-1">
            <h3 class="my-4 text-2xl font-semibold text-gray-700">
              Account PIN
            </h3>
             
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
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
                  <p style={{ fontSize: "12px" }}>Sample PIN : 1234</p>
                  <Button
                    type="submit"
                    variant="ghost"
                    className="bg-black text-white"
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            
          </div>
        </div>
      </div>
    </>
  );
}
