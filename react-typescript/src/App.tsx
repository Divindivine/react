import { Stats } from "fs";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { ThemeContextProvider } from "./components/ThemeContext";
import { Box } from "./components/Box";

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "Wayne",
  };

  const nameList = [
    {
      firstName: "Bruce",
      lastName: "Wayne",
    },
    {
      firstName: "Clark",
      lastName: "Kent",
    },
    {
      firstName: "Princess",
      lastName: "Diana",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name="Divin" messageCount={20} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList}/> */}
      {/* <Status status="loading" /> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading> Oscar goes to Leanardo Dicaprio!</Heading>
      </Oscar> */}
      {/* <Greet name="Divin" isLoggedIn={true}/> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      /> */}
      {/* <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <Container styles={{border: '1px solid black', padding: "1rem"}}/> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
    </div>
  );
}

export default App;
