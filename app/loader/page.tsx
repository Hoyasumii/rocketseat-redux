"use client";

import { api } from "@/services";
import { use, useEffect, useState } from "react";

export default function Page() {
  const data = use(api());

  // const [data, setData] = useState<string>("");

  // useEffect(() => {
  //   (async () => {
  //     setData(await api());
  //   })();
  // }, []);

  return <p>{data}</p>;
}

// import { api } from "@/services";

// export default async function Page() {
//   const data = await api();
//   return <p>{data}</p>;
// }
