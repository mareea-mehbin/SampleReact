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
  return (
    <div>
      {/* <ListGroup heading="Cities" listOfItems={listOfCities} /> */}
      {/* <FaveColor /> */}
      {/* <Message text="Mareea Mehbin" /> */}
      {/* <Alert>Hello World</Alert> */}

      <Button text="Button Dark" />
    </div>
  );
}

export default App;
