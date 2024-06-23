import { useEffect, useState } from "react";

import { generateClient } from "aws-amplify/api";

import { createBlog } from "../../graphql/mutations";
import { listBlogs } from "../../graphql/queries";
import { type CreateBlogInput, type Blog } from "../../API";

const initialState: CreateBlogInput = { name: "", id: "" };
const client = generateClient();

const Agenda = () => {
  const [formState, setFormState] = useState<CreateBlogInput>(initialState);
  const [blogs, setBlogs] = useState<Blog[] | CreateBlogInput[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const blogData = await client.graphql({
        query: listBlogs,
      });
      const blogs = blogData.data.listBlogs.items;
      setBlogs(blogs);
    } catch (err) {
      console.log("🚀 ~ fetchBlogs ~ err:", err);
      console.log("error fetching blogs");
    }
  };

  const addBlog = async () => {
    try {
      if (!formState.name || !formState.id) return;
      const newBlog = { ...formState };
      setBlogs([...blogs, newBlog]);
      setFormState(initialState);
      await client.graphql({
        query: createBlog,
        variables: {
          input: newBlog,
        },
      });
    } catch (err) {
      console.log("error creating blog:", err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Amplify Blogs</h2>
      <input
        onChange={(event) => setFormState({ ...formState, id: event.target.value })}
        style={styles.input}
        value={formState.id as string}
        placeholder="ID"
      />
      <input
        onChange={(event) => setFormState({ ...formState, name: event.target.value })}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <button style={styles.button} onClick={addBlog}>
        Create Blog
      </button>
      {blogs.map((blog, index) => (
        <div key={blog.id ? blog.id : index} style={styles.todo}>
          <p style={styles.blogId}>{blog.id}</p>
          <p style={styles.blogName}>{blog.name}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  blogId: { fontSize: 20, fontWeight: "bold" },
  blogName: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
} as const;

export default Agenda;
