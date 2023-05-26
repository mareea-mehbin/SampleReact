import { useState } from "react";

function FaveColor() {
  const [color, setColor] = useState("Black");
  return (
    <>
      <div>My favourite color is {color}</div>
      <div>
        <button onClick={() => setColor("Turquoise")}>Change color</button>
      </div>
    </>
  );
}

export default FaveColor;
