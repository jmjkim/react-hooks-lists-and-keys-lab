import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navItems = links.map((link) => {
    return <a href={`#${link}`} key={link}>{link}</a>
  })

  return <nav>{navItems}</nav>;
}

export default NavBar;
