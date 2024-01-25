"use client";
import axios from "axios";
const { Fragment, useState, useEffect } = require("react");
import Link from "next/link";

const ProductoPage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/productos`);
      const result = await response.data;
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = (id) => async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/productos/${id}`
      );
      const result = await response.data;
      alert("El producto ha sido eliminado");
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="h-screen pt-12 px-6  text-gray-700">
      <h1 className="w-full text-center text-3xl text-gray-700 py-5">
        <b>Productos Disponibles</b>
      </h1>
      <div className="w-full h-max grid grid-cols-4 gap-4">
        {products.map((item, idx) => {
          return (
            <div key={idx} className="p-2 shadow-sm bg-white rounded-md ">
              <p className="text-lg">
                <Link
                  className={!item.title ? "text-red-400" : ""}
                  href={`/productos/${item._id}`}
                >
                  {!item.title ? "sin nombre" : item.title}
                </Link>
              </p>
              <div className="mt-2 w-full">
                <button onClick={handleDelete(item._id)} className="bg-red-400 text-white text-sm p-1 rounded-md float-end">
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default ProductoPage;
