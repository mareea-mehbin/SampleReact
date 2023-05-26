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
      <ListGroup heading="Cities" listOfItems={listOfCities} />
      {/* <FaveColor /> */}
      {/* <Message text="Mareea Mehbin" /> */}
    </div>
  );
}

export default App;
