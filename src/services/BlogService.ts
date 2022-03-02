import { Blog } from "../model/model";
import { get, post, patch, del } from "./ServiceUtils";

class BlogService {
  private url = "/blog";

  async listBlogs(): Promise<Blog[]> {
    const response = await get(this.url);
    return response.data;
  }

  async getBlog(id: string): Promise<Blog> {
    const response = await get(this.url + "/" + id);
    return response.data.doc;
  }

  async postBlog(blog: Blog): Promise<Blog> {
    const result = await post(this.url, blog);
    return result.data.doc;
  }

  async updateBlog(blog: Blog): Promise<Blog> {
    const result = await patch(this.url + "/" + blog._id, blog);
    return result.data.doc;
  }

  async deleteBlog(blog: Blog): Promise<Blog> {
    return await del(this.url + "/" + blog._id);
  }
}

export default BlogService;
