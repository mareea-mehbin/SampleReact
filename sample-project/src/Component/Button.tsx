interface Props {
  text: string;
  buttonClick: () => void;
}

function Button(props: Props) {
  return (
    <>
      <button
        type="button"
        className="btn btn-dark"
        onClick={props.buttonClick}>
        Click {props.text}
      </button>
    </>
  );
}

export default Button;
