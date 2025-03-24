import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Counter from "./Counter";
import Country from "./Country";
import Graph from "./Graph";
import CalendarPage from "./CalendarPage";
import Todo from "./Todo";
export function Dashboard() {
  return (
    <>
      <h1>Welcome to Mani's Portfolio</h1>

      <Tabs defaultValue="account" className="w-[800px] mt-3 custom-tab">
        <TabsList className="custom-tab">
          <TabsTrigger value="account">Widgets</TabsTrigger>
          <TabsTrigger value="password">To-Do's</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div class="grid grid-cols-2 gap-4 mt-3">
            <div class="">
              <Graph />
            </div>
            <div class="text-center">
              <CalendarPage />
            </div>
            <div className="">
              <Country />
            </div>
            <div class="">
              <Counter />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <Todo/>
        </TabsContent>
      </Tabs>
    </>
  );
}
