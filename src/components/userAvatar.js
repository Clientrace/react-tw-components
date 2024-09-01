import React from "react";

export const randomColor = (firstName) => {
  let cIndex = parseInt(firstName[0], 36) - 10;
  if (cIndex === 19) {
    cIndex = 19;
  }

  cIndex = parseInt(cIndex % 4);

  const colorList = ["red", "blue", "green"];
  return colorList[cIndex];
};

const UserAvatar = ({
  firstName = "",
  lastName = "",
  imgUrl = null,
  box = false,
  width = "12",
  height = "12",
}) => {
  const bgColor = randomColor(firstName);
  if (!firstName.length || !lastName.length) {
    return null;
  }

  return (
    <React.Fragment>
      {imgUrl ? (
        <img
          className={`h-${height} w-${width} flex-none ${
            !box ? "rounded-full" : ""
          } bg-gray-50`}
          src={imgUrl}
          alt=""
        />
      ) : (
        <div
          className={`w-${width} h-${height} p-4 flex flex-shrink-0 justify-center text-center align-middle items-center text-white ${
            !box ? "rounded-full" : ""
          } bg-${bgColor}-400`}
        >
          {firstName[0].toUpperCase() + lastName[0].toUpperCase()}
        </div>
      )}
    </React.Fragment>
  );
};

export default UserAvatar;
