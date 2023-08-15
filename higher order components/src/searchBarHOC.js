import { useEffect, useState } from "react";

function searchBarHOC(Component, API, entity) {
  function Temp() {
    const [apiData, setApiData] = useState([]);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
      setValue(e.target.value);
    };

    const showData = () => {
      let ent = entity === "todos" ? "title" : "name";

      let data = apiData.map((item) => {
        if (item[ent].toLowerCase().includes(value.toLowerCase())) {
          return <p key={item.id}>{item[ent]}</p>;
        }
      });

      return data;
    };

    const fetchData = async () => {
      const res = await fetch(API);
      const d = await res.json();
      setApiData(d);
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <div className="child">
        <input placeholder={entity} value={value} onChange={handleChange} />
        <Component data={showData()} />
      </div>
    );
  }
  return Temp;
}
export default searchBarHOC;
