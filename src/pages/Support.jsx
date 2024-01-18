import "./Support.css";
import FormSupport from "../components/FormSupport";
import PopUp from "../components/PopUp";
import { useState } from "react";

function Support() {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleFormSubmit = () => {
    setIsFormVisible(false);
  };

  const handlePopUpButtonClick = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="supportContainer">
      {isFormVisible ? (
        <FormSupport onSubmit={handleFormSubmit} />
      ) : (
        <PopUp onButtonClick={handlePopUpButtonClick} />
      )}
    </div>
  );
}

export default Support;
