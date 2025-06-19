import "./ContentContainer.css";
import { useState, useMemo, useEffect } from "react";
import { usePosts } from "../../hooks/usePosts.js";
import ArticleBoard from "../ArticlesBoard/ArticleBoard.jsx";
import PostFilter from "../PostFilter/PostFilter.jsx";
import PostForm from "../Postform/PostForm.jsx";
import Modal from "../UI/Modal/Modal.jsx";
import Button from "../UI/Button/Button.jsx";
import Loading from "../Loading/Loading.jsx";
import axios from "axios";
import PostService from "../../API/PostService.js";
import { useFetching } from "../../hooks/useFetching.js";
import { getPagesCount, getPagesArray } from "../../utils/pages.js";

export default function ContentContainer() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  let pagesArray = getPagesArray(totalPages);
  console.log(pagesArray);
  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const res = await PostService.getAll(limit, page);
    const totalCount = res.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
    setPosts(res.data);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <main>
      {/* <Button onClick={fetchPosts}>posts</Button> */}

      <Button onClick={() => setVisible(!visible)}>Добавить новый пост</Button>
      <PostFilter filter={filter} setFilter={setFilter} />
      <hr style={{ margin: "15px 0" }} />
      <Modal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </Modal>
      {postError && <h1>Ошибка! {postError}</h1>}
      {isLoading ? (
        <Loading />
      ) : (
        <ArticleBoard
          remove={removePost}
          articles={sortedAndSearchedPosts}
          title="Список 1"
        />
      )}
      {pagesArray.map((item) => {
        <Button>{item}</Button>;
      })}
    </main>
  );
}
