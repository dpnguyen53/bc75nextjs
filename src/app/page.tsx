"use client";

import Image from "next/image";
// import Image from "next/image";
import { useEffect, useState } from "react";

interface IShoe {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function Home() {
  const [data, setData] = useState<IShoe[]>([]);
  const fetchData = async () => {
    try {
      const result = await fetch(
        "https://apistore.cybersoft.edu.vn/api/Product"
      );

      const data = await result.json();
      setData(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1>List Shoes</h1>
      <div className="grid grid-cols-4 gap-10">
        {data?.map((shoe) => {
          return (
            <div
              key={shoe.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Image
                src={shoe.image}
                alt={shoe.name}
                width={300}
                height={300}
              />

              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {shoe.name}
                  </h5>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // <div>
    //   <h1>Learn Nextjs</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate amet
    //     aliquid nobis debitis. Doloremque, autem doloribus eius temporibus
    //     quibusdam rem minima nihil. Recusandae nulla rerum porro, reiciendis
    //     veritatis at delectus.
    //   </p>
    //   <Image
    //     src="https://apistore.cybersoft.edu.vn/images/vans-black-black.png"
    //     alt="vans-black-black.png"
    //     width={300}
    //     height={300}
    //     priority
    //   />
    //   <Image
    //     src="/images/black-car.jpg"
    //     alt="black-car.jpg"
    //     width={300}
    //     height={300}
    //     style={{ width: "auto", height: "auto" }}
    //   />
    // </div>
  );
}
