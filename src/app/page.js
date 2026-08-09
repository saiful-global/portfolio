"use client"
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(10)

  return (
    <>
      <h1>Saiful</h1>
      <p>Frontend Developer {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
