import { Blog } from '~/types/app';

export const useBlogsStore = defineStore('blogsStore', {
  state: () => ({
    blog: {} as Blog,
    blogs: [] as Array<Blog>
  }),

  getters: {
    getBlog: (state) => state.blog,
    getBlogs: (state) => state.blogs
  },

  actions: {
    setBlog(id: number) {
      const blog = this.blogs.find((blog) => blog.id === id);
      if (blog) this.blog = { ...blog };
    },
    setBlogs() {
      this.blogs = [];
    }
  }
});
