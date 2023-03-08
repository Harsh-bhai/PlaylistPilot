import React,{useEffect} from "react";

const Test = () => {
useEffect(() => {
  const searchBox = document.getElementById("search");
  // searchBox.addEventListener("input", () => {
  //   searchBox.innerHTML = searchBox.innerHTML.replace(
  //     /@([a-zA-Z0-9]+)/,
  //     "<span class='red'>$1</span>"
  //   );
  // });
}, [])

  return (
    <div>
      <style jsx>
        {`
          .red {
            background-color: red;
          }
        `}
      </style>
      <div
        id="search"
        style={{height: '100px', width: '100px', background: 'grey'}}
        contenteditable=""
      ></div>
    </div>
  );
};

export default Test;
