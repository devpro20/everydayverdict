import Link from "next/link";
import Image from "next/image";

export default function PostCardOverlay({ post }: { post: any }) {
  return (
    <Link
      href={`/post/${post.slug}`}
      className="group relative block w-full h-full min-h-[350px] rounded-sm overflow-hidden bg-slate-900"
    >
      <Image
        src={post.thumbnail}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        priority
      />
      {/* Dark gradient from bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
        <div className="flex items-start">
          <span className="flex items-center gap-1 text-xs font-bold tracking-wider uppercase text-white bg-brand-600 px-3 py-1.5 rounded-sm">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
            {post.category.name}
          </span>
        </div>
        
        <div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white leading-tight tracking-tight shadow-sm group-hover:text-brand-400 transition-colors duration-300">
            {post.title}
          </h3>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              The Verdicator
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
