import Connect from "./Connect";
import CopyRight from "./CopyRight";
import { forwardRef } from "react";

const Footer = forwardRef(function Footer(prop, footerRef) {
  return (
    <div ref={footerRef}>
      <Connect />
      <CopyRight />
    </div>
  );
});

export default Footer;
