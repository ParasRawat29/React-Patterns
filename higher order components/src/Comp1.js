import hoc from "./hoc";

function Comp1({ width }) {
  console.log(width);
  return <p>Hey i am comp1 width: {width}</p>;
}
export default hoc(Comp1);
