import "./App.css";
import { Private } from "./components/Auth/Private";
import { CustomButton } from "./components/html/Button";
// import { Greet } from "./components/Greet";
// import { Person } from "./components/Person";
// import { PersonList } from "./components/PersonList";
// import { Status } from "./components/Status";
// import { Heading } from "./components/Heading";
// import { Oscar } from "./components/Oscar";
// import { Button } from "./components/Button";
// import { Input } from "./components/Input";
// import { Container } from "./components/Container";
// import { ThemeContextProvider } from "./components/ThemeContext";
// import { Box } from "./components/Box";
// import { MutableRef } from "./components/r ef/MutableRef";
// import { Counter } from "./components/state/Counter";
// import { List } from "./components/generics/List";
// import { RandomNumber } from "./components/restriction/RandomNumber";
// import { Toast } from "./components/templateliterals/Toast";
import { Text } from "./components/polymorphic/Text";

function App() {
  // const personName = {
  //   firstName: "Bruce",
  //   lastName: "Wayne",
  // };

  // const nameList = [
  //   {
  //     firstName: "Bruce",
  //     lastName: "Wayne",
  //   },
  //   {
  //     firstName: "Clark",
  //     lastName: "Kent",
  //   },
  //   {
  //     firstName: "Princess",
  //     lastName: "Diana",
  //   },
  // ];

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
      {/* <MutableRef /> */}
      {/* <Counter message="the count value is"/> */}
      {/* <Private isLoggedIn/> */}
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <List
        items={[        
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
        ]}
        onClick={(item) => console.log(item)}
        />  */}
      {/* <RandomNumber value={10} isPositive/> */}
      {/* <Toast position="left - center" /> */}
      {/* <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton> */}
      {/* <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Labels
      </Text> */}
    </div>
  );
}

export default App;
