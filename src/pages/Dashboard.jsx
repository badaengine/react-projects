import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Counter from "./Counter";
import Country from "./Country";
import Graph from "./Graph";
import CalendarPage from "./CalendarPage";
import Todo from "./Todo";
import { Button } from "@/components/ui/button";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function Dashboard() {
  const navigate = useNavigate();
  const ratingPage = () => {
 
    navigate("/rating");
  };
  return (
    <>
      <div className="flex justify-between">
        <h1>Welcome to Mani's Portfolio</h1>
        <Button
          onClick={() => ratingPage()}
          variant="destructive"
          className="bg-black"
        >
          Rating
        </Button>
      </div>

      <Tabs defaultValue="account" className="w-[800px] mt-3 custom-tab">
        <TabsList className="custom-tab">
          <TabsTrigger value="account">Widgets</TabsTrigger>
          <TabsTrigger value="password">To-Do's</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="">
              <Graph />
            </div>
            <div className="text-center">
              <CalendarPage />
            </div>
            <div className="">
              <Country />
            </div>
            <div>
              <Counter />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <Todo />
        </TabsContent>
      </Tabs>
    </>
  );
}
