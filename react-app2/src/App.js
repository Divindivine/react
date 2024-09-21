// import React, { Component,useReducer } from "react";
// // import logo from "./logo.svg";
// import "./App.css";
// // import CounterOne from "./components/CounterOne";
// // import CounterTwo from "./components/CounterTwo";
// // import CounterThree from "./components/ CounterThree";
// import ComponentAAA from "./components/ComponentAAA";
// import ComponentBBB from "./components/ComponentBBB";
// import ComponentCCC from "./components/ComponentCCC";
// // import ComponentCC from "./components/ComponentCC";
// // import IntervalClassCounter from "./components/IntervalClassCounter";
// // import IntervalHookCounter from "./components/IntervalHookCounter";
// // import DataFetching from "./components/DataFetching";
// // import MouseContainer from "./components/MouseContainer";
// // import Greet from "./components/Greet";
// // import Welcome from "./components/Welcome";
// // import Hello from "./components/hello";
// // import Message from "./components/Message";
// // import Counter from "./components/Counter";
// // import FunctionClick from "./components/FunctionClick";
// // import ClassClick from "./components/ClassClick";
// // import EventBInd from "./components/EventBInd";
// // import ParentComponent from "./components/ParentComponent";
// // import UserGreeting from "./components/UserGreeting";
// // import NameList from "./components/NameList";
// // import Stylesheet from "./components/Stylesheet";
// // import Inline from "./components/Inline";
// // import "./appStyles.css";
// // import styles from "./appStyles.module.css";
// // import Form from "./components/Form";
// // import LifecycleA from "./components/LifecycleA";
// // import FragmentDemo from "./components/FragmentDemo";
// // import Table from "./components/Table";
// // import PureComp from "./components/PureComp";
// // import ParentComp from "./components/ParentComp";
// // import RefsDemo from "./components/RefsDemo";
// // import FocusInput from "./components/FocusInput";
// // import FRParentInput from "./components/FRParentInput";
// // import PortalDemo from "./components/PortalDemo";
// // import Hero from "./components/Hero";
// // import ErrorBoundary from "./components/ErrorBoundary";
// // import ClickCounter from "./components/ClickCounter";
// // import HoverCounter from "./components/HoverCounter";
// // import ClickCounter2 from "./components/ClickCounter2";
// // import ComponentC from "./components/ComponentC";
// // import { userProvider } from "./components/UserContext";
// // import PostList from "./components/PostList";
// // import PostForm from "./components/PostForm";
// // import ClassCounter from "./components/ClassCounter";
// // import HookCounter from "./components/HookCounter";
// // import HookCounterTwo from "./components/HookCounterTwo";
// // import HookCounterThree from "./components/HookCounterThree";
// // import HookCounterFour from "./components/HookCounterFour";
// // import ClassCounterOne from "./components/ClassCounterOne";
// // import HookCounterOne from "./components/HookCounterOne";

// // export const UserContext = React.createContext();
// // export const ChannelContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <h1 className="error">Error</h1>
//         <h1 className={styles.success}>Success</h1> */}
//         {/* <Counter /> */}
//         {/* <Greet name = "Divin" heroName = "Batman">
//           <p>This is children tag</p>
//           </Greet> */}
//         {/* <Greet name = "Shijil" heroName = "Antman">
//           <button>Action</button>
//           </Greet>
//         <Greet name = "Hrishi" heroName = "Hulk"/> */}
//         {/* <Welcome name = "Divin" heroName = "Batman"/> */}
//         {/* <Welcome name = "Shijil" heroName = "Antman"/>
//         <Welcome name = "Hrishi" heroName = "Hulk"/> */}
//         {/* <Hello /> */}
//         {/* <Message />
//           <FunctionClick />
//           <ClassClick /> */}
//         {/* <EventBInd /> */}
//         {/* <ParentComponent /> */}
//         {/* <UserGreeting /> */}
//         {/* <NameList /> */}
//         {/* <Stylesheet primary = {false} /> */}
//         {/* <Inline /> */}
//         {/* <Form /> */}
//         {/* <LifecycleA /> */}
//         {/* <FragmentDemo /> */}
//         {/* <Table /> */}
//         {/* <PureComp /> */}
//         {/* <ParentComp /> */}
//         {/* <RefsDemo /> */}
//         {/* <FocusInput /> */}
//         {/* <FRParentInput /> */}
//         {/* <PortalDemo /> */}
//         {/* <ErrorBoundary>
//           <Hero heroName="Batman" />
//           </ErrorBoundary>
//           <ErrorBoundary>
//           <Hero heroName="Superman" />
//           <ErrorBoundary />
//           <ErrorBoundary ></ErrorBoundary>
//           <Hero heroName="Joker" />
//         </ErrorBoundary> */}
//         {/* <ClickCounter name = "Divin"/>
//         <HoverCounter /> */}
//         {/* <Counter
//           render={(count, incrementCount) => (
//             <ClickCounter2 count={count} incrementCount={incrementCount} />
//           )}
//         />

//         <Counter
//           render={(count, incrementCount) => (
//             <ClickCounter2 count={count} incrementCount={incrementCount} />
//           )}
//         /> */}
//         {/* <userProvider value = "Divin">
//           <ComponentC />
//         </userProvider> */}
//         {/* <PostList /> */}
//         {/* <PostForm /> */}
//         {/* <ClassCounter /> */}
//         {/* <HookCounter /> */}
//         {/* <HookCounterTwo /> */}
//         {/* <HookCounterThree /> */}
//         {/* <HookCounterFour /> */}
//         {/* <ClassCounterOne /> */}
//         {/* <HookCounterOne /> */}
//         {/* <ClassMouse /> */}
//         {/* <HookMouse /> */}
//         {/* <MouseContainer /> */}
//         {/* <IntervalClassCounter />
//         <IntervalHookCounter /> */}
//         {/* <DataFetching /> */}
//         {/* <UserContext.Provider value={"Divin"}>
//           <ChannelContext value={"Codevolution"}>
//             <ComponentCC />
//           </ChannelContext>
//         </UserContext.Provider> */}
//         {/* <CounterOne /> */}
//         {/* <CounterTwo /> */}
//         {/* <CounterThree /> */}
//         <ComponentAAA />
//         <ComponentBBB />
//         <ComponentCCC />
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
// import FocusInputOne from "./components/FocusInputOne";
// import ClassTImer from "./components/ClassTImer";
// import HookTimer from "./components/HookTimer";
// import DocTitleOne from "./components/DocTitleOne";
// import CounterA from "./components/CounterA";
import "./App.css";
// import DocTitleTwo from "./components/DocTitleTwo";
// import CounterOneOne from "./components/CounterOneOne";
// import CounterTwoTwo from "./components/CounterTwoTwo";
// import UserForm from "./components/UserForm";
// import { UseState } from "./components/UseState/UseState";
// import { UseReducer } from "./components/UseReduder/UseReducer";
// import { ObjectUseState } from "./components/ImmutabelState/ObjectUseState";
// import ArrayUseState from "./components/ImmutabelState/ArrayUseState";
// import { Parent } from "./components/Paraent Child/Parent";
// import DataFetchingOne from "./components/DataFetchingOne";
// import DataFetchingTwo from "./components/DataFetchingTwo";
// import ParentComponentOne from "./components/ParentComponentOne";
// import ComponentAAA from "./components/ComponentAAA";
// import ComponentBBB from "./components/ComponentBBB";
// import ComponentCCC from "./components/ComponentCCC";``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
// import { ParentOne } from "./components/Optimiation/ParentOne";
import { ParentFour } from "./components/Incorrect Optimizations/ParentFour";
import { ContextParent } from "./components/Context/ContextParent";
import { ChildA } from "./components/Context/ContextChildren";

function App() {
  //   const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    //   <div className="App">
    //     Count - {count}
    //     <ComponentAAA />
    //     <ComponentBBB />
    //     <ComponentCCC />
    //   </div>
    // </CountContext.Provider>
    // <DataFetchingOne />
    // <DataFetchingTwo />
    // <ParentComponentOne />
    // <CounterA />
    // <FocusInputOne />
    // <ClassTImer />
    // <HookTimer />
    <div>
      {/* <DocTitleOne />
    <DocTitleTwo /> */}
      {/* <CounterOneOne />
    <CounterTwoTwo /> */}
      {/* <UserForm /> */}
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}
      {/* <ParentOne /> */}
      {/* <ParentFour /> */}
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
