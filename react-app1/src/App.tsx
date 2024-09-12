// import ListGroup from "./components/ListGroup";
// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
//   const handleselectItem = (item:string) => {
//     console.log(item);
//   }
//   return (
//     <div>
//       <ListGroup items={items} heading="Cities" onSelectItem={handleselectItem}/>
//     </div>
//   );
// }

import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/button";

// export default App;

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <Alert text="Hello World" />

      <Alert>
        Hello <span>World</span>
      </Alert> */}
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
