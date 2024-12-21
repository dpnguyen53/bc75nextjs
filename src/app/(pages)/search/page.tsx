import { fetchSearch } from "@/app/action/services/productApi";
import Image from "next/image";
import Link from "next/link";

export default async function Search({ searchParams }: any) {
  const { keyword } = await searchParams;

  const data = await fetchSearch(keyword);

  return (
    <div className="container mx-auto">
      <h1>Search</h1>
      <div className="grid grid-cols-4 gap-10">
        {data?.map((shoe: any) => {
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
                <Link
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  href={`/detail/${shoe.id}`}
                >
                  Detail
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
