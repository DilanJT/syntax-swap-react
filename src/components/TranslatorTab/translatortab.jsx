import React, { useState } from 'react';

const CodeTranslatorTab = () => {
  const [javaCode, setJavaCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  const handleTranslate = () => {
    // TODO: implement code translation logic
    setJsCode('Translated JavaScript code goes here');
  };

  return (
    <div className="container my-5">
      <h1>Code Translator</h1>
      <div className="row mt-3">
        <div className="col-12 col-md-6">
          <h3>Java Code</h3>
          <textarea
            className="form-control"
            rows="10"
            value={javaCode}
            onChange={(e) => setJavaCode(e.target.value)}
          ></textarea>
        </div>
        <div className="col-12 col-md-6">
          <h3>Translated JavaScript Code</h3>
          <textarea
            className="form-control"
            rows="10"
            value={jsCode}
            readOnly
          ></textarea>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <button className="btn btn-primary" onClick={handleTranslate}>
            Translate and Compile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeTranslatorTab;
