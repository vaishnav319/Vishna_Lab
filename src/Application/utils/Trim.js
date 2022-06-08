import React from "react";

const Trim = ({ desc, len }) => {
  let trimmedString = desc?.substr(0, len);
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );
  if (desc.length > 25) {
    trimmedString = trimmedString + "...";
  }
  console.log(trimmedString);
  //   trimmedString = trimmedString.substr(
  //     0,
  //     Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  //   );
  return <div>{trimmedString}</div>;
};

export default Trim;
