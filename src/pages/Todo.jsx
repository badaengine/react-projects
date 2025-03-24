import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import EditModal from "./EditModal";
import { Button } from "@/components/ui/button";

function Todo() {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "Title 1",
      desc: "lorem lipsum is dummy text lorem lipsum is dummy text ",
      tag: "New",
    },
    {
      id: 2,
      title: "Title 2",
      desc: "lorem lipsum is dummy",
      tag: "New",
    },
    {
      id: 3,
      title: "Title 3",
      desc: "lorem lipsum  lipsum is dummy text ",
      tag: "Old",
    },
  ]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tag, setTag] = useState("");
  const [selectedList, setSelectedList] = useState(lists[0]);
  const [showModal, setShowModal] = useState(false);

  function addTask(text) {
    const newList = {
      id: Date.now(),
      title,
      desc,
      tag,
    };
    setLists([...lists, newList]);
    setTitle("");
    setDesc("");
    setTag("");
  }

  const handleEdit = (list) => {
    setSelectedList(list);
    console.log(selectedList);
    setShowModal(true);
  };
  function deleteTask(id) {
    setLists(lists.filter((list) => list.id !== id));
  }
  const handleSave = (updatedData) => {
    setLists((prevData) =>
      prevData.map((item) =>
        item.id === updatedData.id ? { ...lists, ...updatedData } : item
      )
    );
  };
  return (
    <>
      <ul className="list-unstyled grid grid-cols-2 gap-4">
        {lists.map((list) => (
          <TodoItem
            key={list.id}
            id={list.id}
            title={list.title}
            desc={list.desc}
            tag={list.tag}
            list={list}
            handleEdit={handleEdit}
            deleteTask={deleteTask}
          />
        ))}
      </ul>

      <div className="d-flex">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="form-control"
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="form-control"
        />
        <input
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Tag"
          className="form-control"
        />
        <Button
          onClick={() => addTask(title)}
          className="btn btn-sm btn-secondary px-3 ms-3"
        >
          Add
        </Button>
      </div>

      {selectedList && (
        <EditModal
          open={showModal}
          handleClose={() => setShowModal(false)}
          data={selectedList}
          onSave={handleSave}
        />
      )}
    </>
  );
}

export default Todo;
