import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 }
// ];

export default function Summary(props) {
  const { graphValue } = props;
  console.log("graphval", graphValue);
  // const initialData1 = [
  //   { name: "Jan", value: 400, value1: 500 },
  //   { name: "Feb", value: 300, value3: 500 },
  //   { name: "Mar", value: 500, value1: 500 },
  //   { name: "Apr", value: 200, value1: 500 },
  // ];
  // const initialData1 = [
  //   {
  //     title: "Understanding Machine Learning",
  //     "What is machine learning?": 0,
  //     "What are the different types of machine learning?": 2,
  //     "What are common applications of machine learning?": 5,
  //     "How does machine learning work?": 2,
  //   },
  //   {
  //     title: "Understanding program Learning",
  //     "What are common applications of machine learning?": 2,
  //     "What is the difference between supervised and unsupervised learning?": 2,
  //     "What are some popular machine learning algorithms?": 2,
  //   },
  //   {
  //     title: "Understanding validate Learning",
  //     "What are the challenges of implementing machine learning?": 2,
  //     "How do you evaluate the performance of a machine learning model?": 2,
  //     "How is deep learning related to machine learning?": 2,
  //   },
  // ];
  //const initialData1 = graphValue;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-black text-white">
          Summary
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Summary</DialogTitle>
        </DialogHeader>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={graphValue}>
            <XAxis dataKey="title" tickFormatter={(value) => value.slice(0, 3)} />
            <YAxis />
            <Tooltip />
            {/* {graphValue.map(({ key, value }) => ({ [key]: value }))} */}
           
 
            {/* { Object.keys(graphValue).map((key,index) => {
              // <Bar
              //   key={index}
              //   dataKey={key}
              //   fill="#8884d8"
              //   radius={[4, 4, 0, 0]}
              // />
              console.log("key",key)
              console.log("v"index)
            })} */}
             <Bar dataKey="What is machine learning?" fill="#8884d8" radius={[4, 4, 0, 0]} /> 
             <Bar dataKey="What are the different types of machine learning?" fill="#8884d8" radius={[4, 4, 0, 0]} /> 
             <Bar dataKey="What are common applications of machine learning?" fill="#8884d8" radius={[4, 4, 0, 0]} />   
             <Bar dataKey="How does machine learning work?" fill="#8884d8" radius={[4, 4, 0, 0]} /> 
             <Bar dataKey="What is the difference between supervised and unsupervised learning?" fill="#8884d8" radius={[4, 4, 0, 0]} />
             <Bar dataKey="What are some popular machine learning algorithms?" fill="#8884d8" radius={[4, 4, 0, 0]} />   
             <Bar dataKey="What are the challenges of implementing machine learning?" fill="#8884d8" radius={[4, 4, 0, 0]} /> 
             <Bar dataKey="How do you evaluate the performance of a machine learning model?" fill="#8884d8" radius={[4, 4, 0, 0]} />
             <Bar dataKey="How is deep learning related to machine learning?" fill="#8884d8" radius={[4, 4, 0, 0]} />   
          </BarChart>
        </ResponsiveContainer>
      </DialogContent>
    </Dialog>
  );
}
