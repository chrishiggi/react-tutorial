import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Beavis");
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    const names = ["Beavis", "Butthead", "Hank"];
    const selection = Math.floor(Math.random() * 3);
    setName(names[selection]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = (name) => {
    console.log(count);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click It</button>
      <button onClick={handleClick2}>Click It</button>
    </main>
  );
};

export default Content;
