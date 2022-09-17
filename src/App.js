import { useRef, useEffect } from "react";
import MyText from "./components/MyText";
import "./styles.css";

export default function App() {
  const usernameRef = useRef();

  useEffect(() => {
    // usernameRef.current.focus();
  });

  const handleClick = () => {
    // usernameRef.current.focus();
    usernameRef.current.resetUsername();
  };

  return (
    <div className="App">
      <MyText ref={usernameRef} />
      <button onClick={handleClick} type="button">
        Reset
      </button>
    </div>
  );
}
