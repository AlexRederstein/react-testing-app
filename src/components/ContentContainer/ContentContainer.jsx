import "./ContentContainer.css";
import { useState, useMemo } from "react";
import { articles } from "../../Articles.js";
import ArticleBoard from "../ArticlesBoard/ArticleBoard.jsx";
import PostFilter from "../PostFilter/PostFilter.jsx";
import PostForm from "../Postform/PostForm.jsx";
import Modal from "../UI/Modal/Modal.jsx";
import Button from "../UI/Button/Button.jsx";

export default function ContentContainer() {
  const [articlesArray, setArticles] = useState(articles);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false);

  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...articlesArray].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return articlesArray;
  }, [filter.sort, articlesArray]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPost]);

  function createPost(newPost) {
    setArticles([...articlesArray, newPost]);
  }

  function removePost(post) {
    setArticles(articlesArray.filter((p) => p.id !== post.id));
  }

  return (
    <main>
      <Button onClick={() => setVisible(!visible)}>Добавить новый пост</Button>
      <PostFilter filter={filter} setFilter={setFilter} />
      <hr style={{ margin: "15px 0" }} />
      <Modal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </Modal>

      <ArticleBoard
        remove={removePost}
        articles={sortedAndSearchedPosts}
        title="Список 1"
      />
    </main>
  );
}
