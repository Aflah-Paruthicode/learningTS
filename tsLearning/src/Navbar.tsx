import React from "react";
import { Logo } from "./utils/constants";

const Navbar = (props: any) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearch(e.target.value);
  };
  return (
    <nav>
      <div>
        <img id="logo" src={Logo} alt="logo image" />
      </div>
      <div>
        <input value={props.searchText} onChange={handleSearch} placeholder="Search Charecter..." type="text" />
      </div>
    </nav>
  );
};

export default Navbar;
