"use client";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { TodoActions } from "@/storage";

export function NewListItem() {
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();

  return (
    <form
      action={(form) => {
        dispatch(TodoActions.add(form.get("test")?.toString() || ""));
        formRef.current?.reset();
      }}
      ref={formRef}
    >
      <input type="text" name="test" />
      <button>send</button>
    </form>
  );
}
