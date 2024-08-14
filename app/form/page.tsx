"use client";

import { Form } from "@/components";
import { z } from "zod";

export default function Page() {
  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    date: z.string().date(),
  });

  return (
    <Form<"name" | "email" | "date">
      className="flex flex-col gap-2 p-10"
      validator={schema}
      onSuccess={() => {
        console.log("success");
      }}
      onFailed={() => {
        console.log("failed");
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="border rounded-lg px-4 py-2 flex-1"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border rounded-lg px-4 py-2 flex-1"
      />
      <input
        type="date"
        name="date"
        placeholder="Date"
        className="border rounded-lg px-4 py-2 flex-1"
      />
      <button type="submit" className="transition-all duration-300 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-4 rounded-full">
        Submit
      </button>
    </Form>
  );
}
