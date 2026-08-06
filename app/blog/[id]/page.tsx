import { BLOG_POSTS } from '@/app/data/post';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => String(p.id) === String(id));

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-sky-600 mb-8 transition-colors gap-1"
        >
          &larr; Quay lại danh sách cẩm nang
        </Link>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs text-sky-600 font-semibold mb-3">
            <span className="bg-sky-50 border border-sky-100 px-2.5 py-0.5 rounded-md">
              {post.category}
            </span>
            <span>•</span>
            <span className="text-slate-500">{post.publishedAt}</span>
            <span>•</span>
            <span className="text-slate-500">{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Cover Image */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 aspect-video shadow-sm">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <article className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base space-y-6">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-slate-100 pb-2">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('```')) {
              const codeContent = paragraph.replace(/```[a-z]*/g, '').trim();
              return (
                <pre key={idx} className="bg-sky-950 text-sky-100 p-4 rounded-xl overflow-x-auto text-sm font-mono my-4 shadow-sm border border-sky-900">
                  <code>{codeContent}</code>
                </pre>
              );
            }
            return (
              <p key={idx} className="whitespace-pre-line leading-7">
                {paragraph}
              </p>
            );
          })}
        </article>
      </main>
    </div>
  );
}