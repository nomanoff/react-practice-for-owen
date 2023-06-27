import { useState } from "react";
import MainPageTemplate from "./template";

const MainPage = () => {
  const [toDo, settoDO] = useState([]);

  const handleInput = (data) => {
    settoDO([...toDo, data.inputValue]);
  };

  const handleDelete = (num) => {
    settoDO(toDo.filter((_, i) => i !== num));
  };
  return (
    <MainPageTemplate
      toDo={toDo}
      handleInput={handleInput}
      handleDelete={handleDelete}
    />
  );
};

export default MainPage;
