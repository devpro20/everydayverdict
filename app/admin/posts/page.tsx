import { prisma } from '@/lib/prisma'
import { createPost } from '@/app/actions/post'

export const revalidate = 0

export default async function AdminPosts() {
  const posts = await prisma.post.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' }
  })

  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' }
  })

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Posts</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Create and manage your blog articles.</p>
      </header>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-slate-100 dark:border-slate-800 mb-12">
        <h2 className="text-xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center text-sm">+</span>
          Create New Post
        </h2>
        
        <form action={createPost} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Title</label>
                <input 
                  type="text" 
                  id="title" 
                  name="title" 
                  required 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-slate-900 dark:text-white transition-all placeholder:text-slate-400"
                  placeholder="The future of web development"
                />
              </div>
              
              <div>
                <label htmlFor="slug" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Slug</label>
                <input 
                  type="text" 
                  id="slug" 
                  name="slug" 
                  required 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-slate-900 dark:text-white transition-all placeholder:text-slate-400"
                  placeholder="the-future-of-web-development"
                />
              </div>

              <div>
                <label htmlFor="thumbnail" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Thumbnail URL</label>
                <input 
                  type="url" 
                  id="thumbnail" 
                  name="thumbnail" 
                  required 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-slate-900 dark:text-white transition-all placeholder:text-slate-400"
                  placeholder="https://images.unsplash.com/photo-..."
                />
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="categoryId" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Category</label>
                <div className="relative">
                  <select 
                    id="categoryId" 
                    name="categoryId" 
                    required 
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-slate-900 dark:text-white transition-all appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a category</option>
                    {categories.map((c: any) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="flex items-center h-[calc(100%-4.5rem)] pt-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      id="isFeatured" 
                      name="isFeatured" 
                      value="true"
                      className="peer sr-only"
                    />
                    <div className="w-12 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer-checked:bg-brand-500 transition-colors duration-300"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6 shadow-sm"></div>
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-brand-600 transition-colors">Feature this post</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Content (Markdown supported)</label>
            <textarea 
              id="content" 
              name="content" 
              rows={8} 
              required 
              className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-slate-900 dark:text-white transition-all placeholder:text-slate-400 font-mono text-sm leading-relaxed"
              placeholder="Write your amazing article here..."
            ></textarea>
          </div>

          <div className="flex justify-end border-t border-slate-100 dark:border-slate-800 pt-6">
            <button 
              type="submit"
              className="bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              Publish Post
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </form>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Published Posts</h2>
      
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800">
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Title</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Category</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Featured</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {posts.map((post: any) => (
                <tr key={post.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-8 py-5">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-1">
                      {post.title}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="inline-flex px-2.5 py-1 text-xs font-semibold bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 rounded-full border border-brand-100 dark:border-brand-500/20">
                      {post.category.name}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    {post.isFeatured ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-full border border-pink-100 dark:border-pink-500/20">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                        Yes
                      </span>
                    ) : (
                      <span className="text-slate-400 dark:text-slate-500 text-sm">-</span>
                    )}
                  </td>
                  <td className="px-8 py-5 text-right text-sm text-slate-500 dark:text-slate-400">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-8 py-16 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" /></svg>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">No posts published yet.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
