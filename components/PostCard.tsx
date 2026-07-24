import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }: { post: any }) {
  return (
    <Link
      href={`/post/${post.slug}`}
      className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative h-48 sm:h-56 w-full overflow-hidden shrink-0">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Category Badge - Optional, but keeps standard card consistent if needed */}
        {post.category && (
          <div className="absolute top-0 left-0">
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-bold tracking-wider uppercase text-white bg-brand-600 shadow-sm">
              {post.category.name}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300 leading-tight">
          {post.title}
        </h3>

        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="whitespace-nowrap">The Verdicator</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
          <span className="whitespace-nowrap">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}
