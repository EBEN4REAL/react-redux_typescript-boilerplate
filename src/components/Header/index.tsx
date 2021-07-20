import React from "react";

// declare an interface here and pass to this component
interface IProps {
  name?: string;
}

const Header: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <h1>Hello, {props.name}! Welcome to React and TypeScript</h1>
    </>
  );
};
// React.FC<> is what allows us to use defaultProps and children in component;
Header.defaultProps = {
  name: "chisom",
};
export default Header;
