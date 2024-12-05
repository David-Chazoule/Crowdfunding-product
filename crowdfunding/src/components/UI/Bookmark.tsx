import React from "react";

interface BookmarkProps {
  selectBookmarked: boolean;
}

function Bookmark({ selectBookmarked }: BookmarkProps) {
  return (
    <div>
      <svg width="54" height="54" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <circle
            fill="#38B2B5"
            cx="27"
            cy="27"
            r="27"
            className={`cirle ${selectBookmarked ? "circle-selected" : ""}`}
          />
          <path
            fill="#FFFFFF"
            d="M23 19v18l5-5.058L33 37V19z"
            transform="translate(1, 1)"
            className={`path ${selectBookmarked ? "path-selected" : ""}`}
          />
        </g>
      </svg>
    </div>
  );
}

export default Bookmark;
