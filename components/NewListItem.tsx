"use client";

import { FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { TodoActions } from "@/storage";
import { Form } from "./Form";

export function NewListItem() {
  const dispatch = useDispatch();

  type Fields = "name";
  return (
    <Form<Fields> className="flex gap-2 p-10" onSuccess={(data) => {
      dispatch(TodoActions.add(data.name.value.toString()))
    }}>
      <input
        type="text"
        placeholder="Nome"
        name="name"
        className="border rounded-lg px-4 py-2 flex-1"
      />
      <button
        type="submit"
        className="border bg-slate-50 hover:bg-slate-100 active:bg-slate-200 transition-all duration-300 min-h-full w-10 aspect-square rounded-xl"
      >
        +
      </button>
    </Form>
  );
}
