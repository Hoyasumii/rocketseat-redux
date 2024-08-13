"use client";

import { Store, useAppSelector } from "@/storage";

export function List() {
  const todos = useAppSelector((store) => store.todo);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
