import React from "react";

const iconContainer = (props) => {
  const { onSwitch, icon } = props;
  
  let iconClass = "fa fa-2x plus fa-";
  iconClass += icon ? "minus" : "plus";

  return (
    <React.Fragment>
      <button
        className={iconClass}
        aria-hidden="true"
        onClick={onSwitch}
      ></button>
    </React.Fragment>
  );
};

export default iconContainer;
