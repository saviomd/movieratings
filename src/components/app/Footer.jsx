import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";

import { Anchor } from "../library";

const Footer = memo(() => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-secondary border-top mb-3 pt-3 small text-center">
      &copy; 2017-{year}
      <Anchor href="http://saviomd.com/" margin="left" target="_blank">
        <img
          alt="saviomd.com"
          className="me-1"
          src="https://saviomd.com/img/icon-192.png"
          height="15"
          width="15"
        />
        Sávio Mendes
        <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
      </Anchor>
    </footer>
  );
});

export default Footer;
