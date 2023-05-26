interface Props {
  text: string;
}

function Message(props: Props) {
  const name = "";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello {props.text}</h1>;
}

export default Message;
