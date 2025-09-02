"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import data from "./data"

export default function Home() {
  const router = useRouter();

  const redirect = (id: number) => {
    router.push(`/Blogs/${id}`);
  };

  return (
    <main className="max-w-7xl mx-auto p-6 mt-40">
      <h1 className="text-3xl font-bold mb-8">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={listing.image}
              alt={listing.title}
              width={500}
              height={300}
              className="w-full h-48 object-fit"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">
                <b>{listing.type}</b>
              </p>
              <h2 className="text-lg text-black font-semibold mb-2">
                {listing.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {listing.description}
              </p>
              <button
                className="px-4 py-2 border border-gray-800 rounded-xl text-black text-sm font-medium hover:bg-gray-100"
                onClick={() => redirect(listing.id)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}