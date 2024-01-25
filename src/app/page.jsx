"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";

export default function Home() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const handleCreateProducto = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      price: price,
      description: description,
    };
    console.log(data);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/productos",
        data
      );
      const result = await response.data;
      console.log(result);
      setTitle("");
      setPrice(0);
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleCreateProducto}
        className="bg-white text-gray-900 p-2 shadow-md rounded-md"
        >
        <h1 className="w-full text-lg p-1 text-sky-900"><b>Registrar productos</b></h1>
        <div className="flex flex-col p-1">
          <label htmlFor="" className="text-sky-900">Title:</label>
          <input
            className="p-1 border rounded-md"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-1">
          <label htmlFor="" className="text-sky-900">Price:</label>
          <input
            className="p-1 border rounded-md"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-1">
          <label htmlFor="" className="text-sky-900">Descripción:</label>
          <input
            className="p-1 border rounded-md"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-1">
          <button type="submit" className="bg-sky-500 text-white py-2 rounded-md hover:shadow-md">Create</button>
        </div>
      </form>
    </main>
  );
}
