import searchBarHOC from "./searchBarHOC";
const API = "https://jsonplaceholder.typicode.com/todos";

function Todos({ data }) {
  return <div style={{ height: "90%", overflow: "scroll" }}>{data}</div>;
}

export default searchBarHOC(Todos, API, "todos");
