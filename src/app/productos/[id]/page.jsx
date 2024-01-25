"use client";
import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DetailProductpage = () => {
  const router = useRouter();
  //Destructuración
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const getProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/productos/${id}`
      );
      const result = await response.data;
      //   console.log(result);
      setProduct(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/productos/${id}`
      );
      const result = await response.data;
      alert("El producto ha sido eliminado");
        router.push("/productos");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="p-4 bg-white rounded-md shadow-md text-gray-900">
        <div className="mb-2">
          <h1 className="text-lg">
            <b>Detalles del Producto</b>
          </h1>
          <h3>Titulo: {product.title} </h3>
          <h3>Precio: Gs. {product.price} </h3>
          <h3>Descripción: {product.description} </h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link
            className="text-center p-1 bg-sky-500 text-white mt-5 rounded-md"
            href={`/productos/${product._id}/edit`}
          >
            Editar
          </Link>
          <Link
            className=" text-center p-1 bg-red-600 text-white mt-5 rounded-md"
            onClick={handleDelete}
            href="#"
          >
            Eliminar
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DetailProductpage;
