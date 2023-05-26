interface Props {
  text: string;
}

function Button(props: Props) {
  const appendAlert = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <div id="liveAlertPlaceholder"></div>
      <button
        type="button"
        className="btn btn-dark"
        onClick={appendAlert}
        id="liveAlertBtn">
        Click {props.text}
      </button>
    </>
  );
}

export default Button;
