import React from "react";
import BreadCrumbs from "./components/breadcrumb";
import UserAvatar from "./components/userAvatar";

const contentPlaceHolder = (
  <p className="text-gray-800">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu euismod
    lacus, eget ornare nisi. Sed id iaculis orci.;
  </p>
);

const TWComponentWrapper = ({ title, subtitle, description, children }) => {
  return (
    <div className="w-full h-auto my-2 p-2 border-b border-gray-300">
      <div className="w-full h-auto">
        <h1 className="font-bold text-base text-gray-800">{title}</h1>
        <h1 className="font-bold text-sm text-gray-500">{subtitle}</h1>
        <div className="mt-4">{description}</div>
      </div>
      <div className="relative w-full h-full mt-2 p-12">{children}</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="w-full w-full p-4 sm:p-12">
      <TWComponentWrapper
        title="Breadcrumbs"
        subtitle="/components/breadcrumbs.js"
        description="Breadcrumbs will help users to navigate through the website."
      >
        <BreadCrumbs
          index="/"
          paths={[
            { name: "Home", link: "/" },
            { name: "Profile", link: "/profile" },
            { name: "Edit Profile", link: "/profile/edit" },
          ]}
        />
        <div className="my-4 p-4 text-sm">{contentPlaceHolder}</div>
      </TWComponentWrapper>
      <TWComponentWrapper
        title="User Avatar"
        subtitle="/components/userAvatar.js"
      >
        <div className="w-full flex gap-x-4">
          <UserAvatar firstName="John" lastName="Doe" width="14" height="14" />
          <UserAvatar firstName="Eric" lastName="Cruz" />
          <UserAvatar firstName="Sherlock" lastName="Holmes" />
        </div>
      </TWComponentWrapper>
    </div>
  );
};

export default App;
