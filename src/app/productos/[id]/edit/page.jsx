"use client";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const editProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/productos/${id}`
      );
      const result = await response.data;
      setProduct(result);
      setTitle(result.title);
      setPrice(result.price);
      setDescription(result.description);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditProducto = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      price: price,
      description: description,
    };
    try {
      const response = await axios.put(
        `http://localhost:8000/api/productos/${id}`,
        data
      );
      const result = await response.data;
      alert("El producto ha sido actualizado correctamente");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <main className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleEditProducto}
        className="bg-white text-gray-900 p-2 shadow-md rounded-md"
      >
        <h1 className="w-full text-lg p-1 text-sky-900">
          <b>Editar producto</b>
        </h1>
        <div className="flex flex-col p-1">
          <label htmlFor="" className="text-sky-900">
            Title:
          </label>
          <input
            className="p-1 border rounded-md"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-1">
          <label htmlFor="" className="text-sky-900">
            Price:
          </label>
          <input
            className="p-1 border rounded-md"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-1">
          <label htmlFor="" className="text-sky-900">
            Descripción:
          </label>
          <input
            className="p-1 border rounded-md"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-1">
          <button
            type="submit"
            className="bg-sky-500 text-white py-2 rounded-md hover:shadow-md"
          >
            Guardar cambios
          </button>
        </div>
      </form>
    </main>
  );
};

export default editProduct;
