import "./ArticleTab.css";
import defaultImage from "../../defaultImage.png";
import Button from "../UI/Button/Button";

export default function ArticleTab(props) {
  return (
    <div className="productCard">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <h3>{props.title}</h3>
        <Button onClick={(e) => props.remove(props)}>Удалить</Button>
      </div>
      <div>{new Date(props.datePublished).toLocaleString()}</div>
      <img className="ArticleTabImage" src={defaultImage} alt="" />
      <div>{props.text}</div>
    </div>
  );
}
