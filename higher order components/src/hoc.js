import { useState } from "react";

function hoc(Component) {
  function NewComponent(props) {
    const [width, setWidth] = useState(props.width);
    return <Component width={width} />;
  }
  return NewComponent;
}
export default hoc;
