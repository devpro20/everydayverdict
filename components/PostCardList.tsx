import Link from "next/link";
import Image from "next/image";

export default function PostCardList({ post }: { post: any }) {
  return (
    <Link
      href={`/post/${post.slug}`}
      className="group flex gap-4 items-start pb-4 border-b border-slate-200 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 -mx-2 rounded-lg transition-colors"
    >
      <div className="relative w-28 h-24 sm:w-32 sm:h-24 shrink-0 overflow-hidden rounded-sm bg-slate-100 dark:bg-slate-800">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
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
