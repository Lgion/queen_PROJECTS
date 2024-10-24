import React from 'react';
import Link from 'next/link'

const BlogPage: React.FC = () => {
  // Placeholder blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Les tendances beauté à Abidjan pour 2024",
      excerpt: "Découvrez les dernières tendances en matière de beauté et de bien-être qui font fureur à Abidjan cette année.",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",date: "2024-03-15"
    },
    {
      id: 2,
      title: "5 astuces pour une peau éclatante",
      excerpt: "Apprenez les secrets pour obtenir une peau radieuse et en bonne santé avec ces conseils simples et efficaces.",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      date: "2024-03-10"
    },
    {
      id: 3,
      title: "Les bienfaits des produits naturels pour vos cheveux",
      excerpt: "Découvrez comment les ingrédients naturels peuvent transformer vos cheveux et les rendre plus beaux que jamais.",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      date: "2024-03-05"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Beauté d'Abidjan</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link href={`/blog/${post.id}`} className="text-orange-600 hover:underline">Lire la suite</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;