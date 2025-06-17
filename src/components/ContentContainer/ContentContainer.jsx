import "./ContentContainer.css";
import { useState } from "react";
import { articles } from "../../Articles.js";
import ArticleBoard from "../ArticlesBoard/ArticleBoard.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import PostForm from "../Postform/PostForm.jsx";
import Select from "../Select/Select.jsx";

export default function ContentContainer() {
  const [articlesArray, setArticles] = useState(articles);
  const [selectedSort, setSort] = useState("");

  function setselectedSort(sort) {
    // setSort(selectedSort);
    console.log(sort);
    setSort([...articlesArray].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  function createPost(newPost) {
    setArticles([...articlesArray, newPost]);
  }

  function removePost(post) {
    setArticles(articlesArray.filter((p) => p.id !== post.id));
  }

  return (
    <main>
      <div>
        <Select
          value={selectedSort}
          onChange={(sort) => setselectedSort(sort)}
          defaultValue="Сортировка по"
          options={[
            { value: "title", name: "По названию" },
            { value: "text", name: "По тексту" },
          ]}
        ></Select>
      </div>
      <hr style={{ margin: "15px 0" }} />
      <PostForm create={createPost} />
      {articlesArray.length !== 0 ? (
        <ArticleBoard
          remove={removePost}
          articles={articlesArray}
          title="Список 1"
        />
      ) : (
        <div style={{ textAlign: "center" }}>Файлы не найдены</div>
      )}
    </main>
  );
}
