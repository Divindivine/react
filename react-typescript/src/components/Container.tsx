type ContainerProps = {
  styles: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Text contet goes here</div>;
};

