import { PersonProps } from "./person.type";

export const Person = (props: PersonProps

) => {
  return <div>{props.name.firstName} {props.name.lastName}</div>;
};

