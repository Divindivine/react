import React from "react";

// function Greet() {
//   return <h1>Hello Divine</h1>;
// }

// const Greet = (props) => {
//   console.log(props);
//   return (
//     <div>
//     <h1>
//       Hello {props.name} as {props.heroName}
//     </h1>
//     {props.children}
//     </div>
//   );
// };

// const Greet = ({ name, heroName }) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} as {heroName}
//       </h1>
//     </div>
//   );
// };

const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} as {heroName}
      </h1>
    </div>
  );
};

export default Greet;
