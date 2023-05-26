import { MouseEvent, useState } from "react";
function ListGroup() {
  let cities = ["Chennai", "Bangalore", "Mumbai", "Delhi", "Kolkata"];
  // cities = [];
  // const handleClick = (event: MouseEvent) => console.log(event);
  const [activeIndex, setIndex] = useState(-1);

  return (
    <>
      <h1>Dynamic List</h1>
      {cities.length === 0 && <p>No Items is found in the list</p>}

      <ul className="list-group">
        {cities.map((x, index) => (
          <li
            className={
              activeIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => setIndex(index)}>
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
