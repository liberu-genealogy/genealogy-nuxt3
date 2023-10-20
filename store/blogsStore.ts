import { Blog, BlogResponse } from '~/types/app';

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
    async setBlog(id: number) {
      const blog = this.blogs.find((blog) => blog.id === id);
      if (blog) this.blog = { ...blog };
    },
    async setBlogs() {
      useAsyncData('blogs', () =>
        queryContent<BlogResponse>('/blogs')
          .findOne()
          .then((response) => {
            const blogs = response.data.map((blog) => {
              return {
                id: blog.id,
                title: blog.title,
                description: blog.description.join(' ')
              };
            });
            this.blogs = [...blogs];
          })
          .catch((error) => console.log(error))
      );
    }
  }
});
