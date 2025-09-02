import Image from "next/image";
import data from "../data";

// ✅ Tell Next.js which blog pages to generate
export function generateStaticParams() {
  return data.map((blog) => ({
    id: blog.id.toString(),
  }));
}

// ✅ SEO Metadata for each blog


interface BlogDetailProps {
  params: { id: string };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const blog = data.find((item) => item.id.toString() === params.id);

  if (!blog) {
    return <h1 className="text-center text-2xl mt-55">Blog not found!</h1>;
  }

  return (
    <main className="max-w-3xl mx-auto p-6 mt-45">
      <Image
        src={blog.image}
        alt={blog.title}
        width={800}
        height={400}
        className="w-full h-80 object-fit rounded-xl mb-6"
      />
      <p className="text-white mb-2">{blog.type}</p>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="whitespace-pre-line text-white leading-relaxed">
        {blog.description}
      </p>
    </main>
  );
}
