import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}
  <a href={links[0]}>Home</a>
  <a href={links[1]}>About</a>
  <a href={links[2]}>Projects</a>
  {/* {links.map((link, index)=> {
    <a href={link} key= {index}> {link}</a>
  })} */}
  </nav>;
}

export default NavBar;
