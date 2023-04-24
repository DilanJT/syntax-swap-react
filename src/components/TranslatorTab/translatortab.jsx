import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-java";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

const CodeTranslatorTab = () => {
  const [javaCode, setJavaCode] = useState(
    `System.out.println("Hello World");`
  );
  const [jsCode, setJsCode] = useState("");

  const [jsData, setJsData] = useState({
    javascript_code: "",
    string_labels: "",
  });

  const handleTranslate = async (e) => {
    // TODO: implement code translation logic
    // setJsCode("Translated JavaScript code goes here");

    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ java_code: javaCode }),
    });
    const data = await response.json();
    console.log(data);
    setJsData({
      javascript_code: data.javascript_code,
      string_labels: data.string_labels,
    });
  };

  const handleCompile = () => {
    // TODO: implement code compilation logic
    alert("compilation triggered");
  };

  const handleClear = () => {
    // TODO: implement code compilation logic
    setJavaCode("");
    setJsCode("");
  };

  const styles = {
    // try to the center the buttons
    buttonsStyle: {
      top: "50%",
    },
  };
  return (
    <div className="container my-5">
      {/* <h3>Translate Java to JavaScript</h3> */}
      <div className="row mt-3">
        <div className="col-12 col-md-5">
          <h3>Java Code</h3>
          {/* <textarea
                        className="form-control"
                        rows="10"
                        value={javaCode}
                        onChange={(e) => setJavaCode(e.target.value)}
                    ></textarea> */}
          <Editor
            value={javaCode}
            onValueChange={(javaCode) => setJavaCode(javaCode)}
            highlight={(javaCode) => highlight(javaCode, languages.java)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
              backgroundColor: "#f5f5f5",
              borderRadius: 5,
              border: "1px solid #ccc",
              height: "300px",
            }}
          />
        </div>
        <div className="col-12 col-md-2" style={styles.buttonsStyle}>
          <div className="row">
            <button className="btn btn-primary" onClick={handleCompile}>
              Compile
            </button>
          </div>
          <br />
          <div className="row">
            <button className="btn btn-primary" onClick={handleTranslate}>
              Translate
            </button>
          </div>
          <br />
          <div className="row">
            <button className="btn btn-primary" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <h3>JavaScript Code</h3>
          <Editor
            value={jsData.javascript_code}
            onValueChange={(jsCode) => setJsCode(jsCode)}
            highlight={(jsCode) => highlight(jsCode, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
              backgroundColor: "#f5f5f5",
              borderRadius: 5,
              border: "1px solid #ccc",
              height: "300px",
            }}
          />
          {/* <textarea
                        className="form-control"
                        rows="10"
                        value={jsCode}
                        readOnly
                    ></textarea> */}
        </div>
      </div>
    </div>
  );
};

export default CodeTranslatorTab;
