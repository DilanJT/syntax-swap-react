import React, { useState } from 'react';

const CodeTranslatorTab = () => {
    const [javaCode, setJavaCode] = useState('');
    const [jsCode, setJsCode] = useState('');

    const handleTranslate = () => {
        // TODO: implement code translation logic
        setJsCode('Translated JavaScript code goes here');
    };

    const handleCompile = () => {
        // TODO: implement code compilation logic
        alert("compilation triggered")
    }

    return (
        <div className="container my-5">
            <h1>Translate Java to JavaScript</h1>
            <div className="row mt-3">
                <div className="col-12 col-md-6">
                    <h3>Java Code</h3>
                    <textarea
                        className="form-control"
                        rows="10"
                        value={javaCode}
                        onChange={(e) => setJavaCode(e.target.value)}
                    ></textarea>
                    <div className="row mt-3">
                        <div className="col-12">
                            <button className="btn btn-primary" onClick={handleCompile}>
                                Compile
                            </button>

                        </div>

                        <div className="col-12 mt-3">
                            <button className="btn btn-primary" onClick={handleTranslate}>
                                Translate
                            </button>
                        </div>

                    </div>
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

        </div>
    );
};

export default CodeTranslatorTab;
