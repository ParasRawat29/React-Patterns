import searchBarHOC from "./searchBarHOC";
const API = "https://jsonplaceholder.typicode.com/users";

function Users({ data }) {
  return <div style={{ height: "90%", overflow: "scroll" }}>{data}</div>;
}

export default searchBarHOC(Users, API, "users");
