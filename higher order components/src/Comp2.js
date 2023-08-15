import hoc from "./hoc";

function Comp2({ width }) {
  return <p>Hey i am comp2 width: {width}</p>;
}
export default hoc(Comp2);
