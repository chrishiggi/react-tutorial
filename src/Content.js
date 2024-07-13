import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Beavis", "Butthead", "Hank"];
    const selection = Math.floor(Math.random() * 3);
    return names[selection];
  };

  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
    </main>
  );
};

export default Content;
