// Counter.js
import { increment, decrement } from "@/store/counterSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Card>
      <CardHeader><CardTitle>Counter</CardTitle></CardHeader>
      <CardContent>
        <h5 className="mb-0 counter-text">{value}</h5>
        <Button
          onClick={() => dispatch(decrement())}
          variant="destructive"
          className="mr-2 bg-black"
        >
          -
        </Button>
        <Button
          onClick={() => dispatch(increment())}
          variant="destructive"
          className="bg-black"
        >
          +
        </Button>
      </CardContent>
    </Card>
  );
};

export default Counter;
