import "./Button.css";

export default function Button({ children, ...props }) {
  return (
    <button className="ControlButton" {...props}>
      {children}
    </button>
  );
}
