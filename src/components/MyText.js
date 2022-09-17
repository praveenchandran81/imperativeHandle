import { forwardRef, useImperativeHandle, useState } from "react";

export default forwardRef(function MyText(props, ref) {
  const [username, setUsername] = useState("");

  useImperativeHandle(ref, () => {
    return {
      resetUsername: () => setUsername("")
    };
  });

  return (
    <input
      ref={ref}
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      name="username"
      type="text"
    />
  );
});
