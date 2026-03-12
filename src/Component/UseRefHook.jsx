import React, { useEffect, useRef, useState } from "react";

export default function UseRefHook() {
  // eg1
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };

  // eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  //   console.log(sec);

  //   eg3
  const [newProduct, setNewProduct] = useState(true);
  const [imageURL, setImageURL] = useState("");

  const imgref = useRef(0);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageURL(preview);
      setNewProduct(false);
    }
  };

  return (
    <div>
      {/* eg1 */}
      <nav>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Focus input</button>
      </nav>
      {/* eg2 */}
      <h2>timer: {sec}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      {/* eg3 */}
      <div>
        <input type="file" ref={imgref} onChange={handleImage} hidden />
        {newProduct ? (
          <div className="img-container" onClick={() => imgref.current.click()}>
            upload profile img..?
          </div>
        ) : (
          <img
            className="Org-img"
            onClick={() => imgref.current.click()}
            src={imageURL}
            alt=""
          />
        )}
      </div>
    </div>
  );
}
