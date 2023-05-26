import FaveColor from "./Component/FaveColor";
import ListGroup from "./Component/ListGroup";
import Message from "./Component/Message";

function App() {
  return (
    <div>
      <ListGroup
        heading="Cities"
        listOfItems={["Seoul", "Bangalore", "Berlin", "Hanoi", "New York"]}
      />
      {/* <FaveColor /> */}
      {/* <Message text="Mareea Mehbin" /> */}
    </div>
  );
}

export default App;
