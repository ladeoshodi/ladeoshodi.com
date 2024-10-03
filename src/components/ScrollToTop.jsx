import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useRef } from "react";

function ScrollToTop() {
  const scrollButtonRef = useRef(null);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollButtonRef.current.style.display = "block";
    } else {
      scrollButtonRef.current.style.display = "none";
    }
  }

  function handleScrollToTop() {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      ref={scrollButtonRef}
      className="button"
      onClick={handleScrollToTop}
      id="scrollToTopButton"
    >
      <ArrowDropUpIcon />
    </button>
  );
}

export default ScrollToTop;
