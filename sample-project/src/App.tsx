import { useState } from "react";
import Alert from "./Component/Alert";
import Button from "./Component/Button";
import FaveColor from "./Component/FaveColor";
import ListGroup from "./Component/ListGroup";
import Message from "./Component/Message";

function App() {
  let listOfCities = [
    "Seoul",
    "Bangalore",
    "Berlin",
    "Hanoi",
    "New York",
    "Mexico",
    "Oslo",
  ];

  const [alertVisible, setAlert] = useState(false);

  return (
    <div>
      {/* <ListGroup heading="Cities" listOfItems={listOfCities} /> */}
      {/* <FaveColor /> */}
      {/* <Message text="Mareea Mehbin" /> */}
      {/* <Alert>Hello World</Alert> */}

      {alertVisible && (
        <Alert children="Hello World" onClose={() => setAlert(false)}></Alert>
      )}
      <Button text="Button Dark" buttonClick={() => setAlert(true)} />
    </div>
  );
}

export default App;
