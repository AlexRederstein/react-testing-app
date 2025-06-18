import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <Input
        type="text"
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <Select
        value={filter.sort}
        onChange={(sort) => setFilter({ ...filter, sort: sort })}
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "По названию" },
          { value: "text", name: "По тексту" },
        ]}
      ></Select>
    </div>
  );
}
