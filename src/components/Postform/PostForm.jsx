import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function PostForm({ create }) {
  const [post, setPost] = useState({
    title: "",
    text: "",
  });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
      datePublished: Date.now(),
    };
    create(newPost);
    // setArticles([
    //   ...articlesArray,
    //   { ...post, id: Date.now(), datePublished: Date.now() },
    // ]);
    setPost({ title: "", text: "" });
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
        value={post.text}
        onChange={(e) => setPost({ ...post, text: e.target.value })}
        placeholder="Текст"
        type="text"
      />
      <Button onClick={addNewPost}>Добавить</Button>
    </form>
  );
}
