import ArticleTab from "../ArticleTab/ArticleTab.jsx";
import "./ArticleBoard.css";

export default function ArticleBoard({ articles, title, remove }) {
  {
    if (!articles.length) {
      return <div style={{ textAlign: "center" }}>Посты не найдены!</div>;
    }
  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <div className="articlesContainer">
        {articles.map((item, key) => (
          <ArticleTab {...item} key={key} remove={remove} />
        ))}
      </div>
    </div>
  );
}
