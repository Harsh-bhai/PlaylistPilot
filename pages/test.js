import React,{useState,Component} from 'react'

const Test = () => {
    const [text, setText] = useState("");
    const [preview, setPreview] = useState("");
    return (
        <div>
          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
              setPreview(
                e.target.value
                  .replace(/(@[a-zA-Z0-9]+)/g, "<span class='red'>$1</span>")
                  .replace(/(#[a-zA-Z0-9]+)/g, "<span class='yellow'>$1</span>")
              );
            }}
            value={text}
          />
           <div dangerouslySetInnerHTML={{ __html: preview }}></div>
        </div>
      );
    };


export default Test