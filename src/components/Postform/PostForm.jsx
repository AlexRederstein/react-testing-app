import { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

export default function PostForm({ create }) {
  const [post, setPost] = useState({
    title: "",
    text: "",
  });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      ...post,
    };
    create(newPost);
    setPost({ title: "", body: "" });
  }

  return (
    <form>
      <Input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Заголовок"
      />
      <Input
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="Текст"
        type="text"
      />
      <Button onClick={addNewPost}>Добавить</Button>
    </form>
  );
}
