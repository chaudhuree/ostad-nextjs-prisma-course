import React from "react";
import "./Header.css";

export default function Header({title}) {
  return (
    <>
      <div className="section section-header section-header-about">
        <div className="parallax filter filter-color-black d-flex justify-content-center">
          <div className="image header-section"></div>
          <div className="container">
            <div className="content">
              <h1>{title}</h1>
              <div class="separator-container">
                        <div class="separator line-separator">♦</div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
