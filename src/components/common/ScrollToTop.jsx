"use client";

import { useState, useEffect } from "react";

// How far (in px) the page must be scrolled before the button appears.
const SHOW_AFTER = 300;

export default function ScrollToTop() {
  // Next.js renders this component on the server first, where `window` does not exist.
  // So the state must start as false; reading window.scrollY here would crash the build.
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // The handler gets a name so the exact same function can be removed in the cleanup below.
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER);
    };

    // Run once on mount: if the visitor refreshes the page while it is already scrolled down,
    // the button shows up immediately instead of waiting for the next scroll event.
    handleScroll();

    // "passive: true" tells the browser this listener never blocks scrolling,
    // which keeps scrolling smooth on phones.
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup: remove the listener when the component unmounts.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    // Position and size:
    // - bottom-4 right-4 on mobile, bottom-5 right-5 from 640px up.
    // - p-4 on mobile makes the button about 46px, a comfortable size for a thumb
    //   (the recommended minimum touch target is about 44px). From 640px it is p-3.
    // - z-40: above the page sections, below the fixed header (z-50).
    // - Glass style on a dark site: translucent white background, white arrow,
    //   and on hover the button turns solid white with a black arrow.
    // - aria-label: gives the icon-only button a name for screen readers.
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group fixed bottom-4 right-4 z-40 rounded-full border border-white/15 bg-white/10 p-4 shadow-xl backdrop-blur-md transition-all hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-5 sm:right-5 sm:p-3"
    >
      <svg
        className="fill-white group-hover:fill-black"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M7.49932 3.36078C7.22726 3.08872 6.77274 3.08872 6.49999 3.36078L0.206656 9.638C-0.0688853 9.91355 -0.0688853 10.3604 0.206656 10.6352C0.482197 10.9108 0.929749 10.9108 1.20529 10.6352L6.99997 4.85667L12.794 10.6359C13.0702 10.9115 13.517 10.9115 13.7933 10.6359C14.0688 10.3604 14.0688 9.91355 13.7933 9.6387L7.49932 3.36078Z" />
      </svg>
    </button>
  );
}
