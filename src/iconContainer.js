import React from "react";

const iconContainer = (props) => {
  const { onSwitch, onIconChange } = props;

  return (
    <React.Fragment>
      <button
        className={onIconChange}
        aria-hidden="true"
        onClick={onSwitch}
      ></button>
    </React.Fragment>
  );
};

export default iconContainer;
