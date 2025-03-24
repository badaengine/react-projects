import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function TodoItem({ title, desc, tag, deleteTask, handleEdit, list, id }) {
  return (
    <li className=" list-group mb-2">
      <Card>
        <CardContent>
          <CardHeader>
            <Badge variant={`${tag === "New" ? "default" : "secondary"}`}>
              {" "}
              {tag}
            </Badge>
          </CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
          <CardFooter className="flex justify-between">
            <Button
              className="btn btn-sm btn-success mb-2"
              style={{ width: "100px" }}
              onClick={() => handleEdit(list)}
            >
              Edit
            </Button>
            <Button
              className="btn btn-sm btn-danger"
              variant="outline"
              style={{ width: "100px" }}
              onClick={() => deleteTask(id)}
            >
              Remove
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
    </li>
  );
}
export default TodoItem;
