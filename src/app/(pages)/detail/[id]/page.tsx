import { fetchDetail } from "@/app/action/services/productApi";
import Image from "next/image";

export async function generateMetadata({ params }: any) {
  const prodDetail = await fetchDetail(params.id);

  return {
    title: `${prodDetail.name} - Product Detail`,
    description: prodDetail.description,
    openGraph: {
      title: prodDetail.name,
      description: prodDetail.description,
      url: `https://yourwebsite.com/products/${params.id}`,
      images: [
        {
          url: prodDetail.image,
          width: 500,
          height: 500,
          alt: prodDetail.alias,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: prodDetail.name,
      description: prodDetail.description,
      images: [prodDetail.image],
    },
  };
}

export default async function Detail({ params }: any) {
  const { id } = await params;

  const data = await fetchDetail(id);

  return (
    <div className="container mx-auto">
      <h1>Detail</h1>
      <div className="grid grid-cols-2">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image src={data.image} alt={data.name} width={300} height={300} />
        </div>
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name: {data.name}
          </h5>
          <p>
            <span className="font-bold">Descripton</span>: {data.description}
          </p>
          <p>
            <span className="font-bold">Price</span>: {data.price}
          </p>
        </div>
      </div>
    </div>
  );
}
