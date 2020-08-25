import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Ambika Sharma {year}</p>
    </footer>
  );
}

export default Footer;
