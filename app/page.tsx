"use client";

import { List } from "@/components/List";
import { NewListItem } from "@/components/NewListItem";
import { store } from "@/storage";
import { Provider, useSelector, UseSelector } from "react-redux";

export default function Page() {
  return (
    <Provider store={store}>
      <List />
      <NewListItem />
    </Provider>
  );
}
