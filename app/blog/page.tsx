import Link from 'next/link';
import { BLOG_POSTS } from '../data/post';

export default function BlogListPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col font-sans">
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-600 text-xs font-bold tracking-widest uppercase bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            ✈️ Cẩm Nang Du Lịch & Bay
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Kinh Nghiệm & Mẹo Săn Vé Máy Bay
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Cập nhật khuyến mãi mới nhất, kinh nghiệm săn vé giá rẻ và những quy định hành lý cần biết cho mọi hành trình bay.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id}
              className="group flex flex-col bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 text-xs font-semibold bg-white/95 backdrop-blur-md text-sky-700 px-3 py-1 rounded-full border border-slate-200/60 shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-slate-600 text-sm line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                {/* Author Info & Read More */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">

                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform flex items-center gap-1"
                  >
                    Xem chi tiết &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}