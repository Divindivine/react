function JustInfo() {
  console.log("RENDER JUST INFO");
  return <div>JUST INFO</div>;
}

const NewComp = React.meme(JustInfo);

 export default NewComp;

// export default React.memo(JustInfo);

