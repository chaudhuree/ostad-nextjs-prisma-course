import React, { useEffect, useRef } from "react";
import "./Content.css";

export default function Content() {
  let textAreaRef = useRef();
  let paragraphRef = useRef();
  let paragraphTitleRef = useRef();
  let clearItemRef = useRef();

  const handleTextField = () => {
    clearItemRef.current.innerHTML = "";
    paragraphRef.current.innerHTML = `<h3>${textAreaRef.current.value}</h3>`;
    paragraphTitleRef.current.innerHTML = "This Is Input Value ➡";
    textAreaRef.current.value = "";
  };

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  return (
    <>
      <div className="section">
        <div className="text-area">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="title-area">
                  <h2 ref={paragraphTitleRef}>Who am I</h2>
                  <div className="separator separator-danger">✻</div>
                </div>
              </div>
              <div className="col-md-7 col-md-offset-1">
                <div className="description">
                  <p ref={clearItemRef}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique saepe minima odio hic et quos inventore suscipit
                    tempore sed. Accusantium consequuntur nulla vitae suscipit
                    dolorum nihil cumque facilis quos, ex necessitatibus, nam
                    provident nesciunt nostrum. Vel sit tenetur magnam quisquam
                    quidem magni et nemo ut doloremque architecto a aperiam
                    placeat modi reprehenderit, blanditiis velit? Minima sit
                    omnis enim?
                  </p>
                  <p ref={paragraphRef}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque, earum adipisci nostrum soluta repellendus hic.
                  </p>
                </div>
              </div>
            </div>

            <div className="row f-flex justify-content-center py-4">
              <div className="col-md-8 col-md-offset-2">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        ref={textAreaRef}
                        name="content"
                        className="form-control form-control-plain text-area-height"
                        placeholder="Here you can write your nice text"
                        rows={8}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="col-md-2 col-md-offset-5">
                        <button
                          type="button"
                          className="btn btn-danger btn-fill"
                          onClick={handleTextField}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
