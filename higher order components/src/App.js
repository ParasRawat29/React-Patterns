/***
 * Higher Order Component
 * ----------------------------------
 *  A function that recievse a component , do some logic and return that component with additonal logic
 *
 *
 * when to use?
 * ---------------------
 * when we want to apply same logic to multiple components
 *
 */

import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import "./styles.css";
import Todos from "./Todos";
import Users from "./User";

export default function App() {
  return (
    <div className="App">
      {/* <Comp1 width={155} />
      <Comp2 width={400} /> */}

      <div style={{ display: "flex", gap: "10px", height: "97vh" }}>
        <Users />
        <Todos />
      </div>
    </div>
  );
}
