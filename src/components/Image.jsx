import { useState, useEffect } from "react";
import { createImage } from "../api/openAPI";

const Image = () => {
  const [imageData, setImageData] = useState({});
  const [prompt, setPrompt] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    if (prompt === "") return;

    createImage(prompt).then((res) => {
      setImageData(res.data.data[0].url);
      setPrompt("");
    });
    console.log(imageData);
  }, [prompt, imageData]);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          setPrompt(input);
          // setPrompt("");
          setInput("");
        }}
      >
        Submit
      </button>
      <img src={imageData} alt="" />
    </>
  );
};

export default Image;
