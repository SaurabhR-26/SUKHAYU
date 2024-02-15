import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import chatbot from "../../../images/chatbot.png";

function Chatbot() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (open) {
      // Dynamically create a script element for Botpress Webchat
      const script = document.createElement("script");
      script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
      script.async = true;

      script.onload = () => {
        // Once the inject.js script is loaded, dynamically create the config.js script
        const configScript = document.createElement("script");
        configScript.src =
         "https://mediafiles.botpress.cloud/e285beea-1d90-43b7-8f22-50f4549371e1/webchat/config.js";
        configScript.defer = true;

        // Append the config.js script to the body
        document.body.appendChild(configScript);
      };

      // Append the inject.js script to the body
      document.body.appendChild(script);
    }
  }, [modalOpen]);

  return (
    <div className="App" style={{ width: "300px", height: "400px" }}>
      {/* <button className="btn relative" onClick={() => setModalOpen(!modalOpen)}>
        <img
          src={chatbot}
          width="60px"
          className="absolute bottom-10 right-10"
          alt="Chatbot"
        />
        {modalOpen ? "Close" : "Open"}
      </button> */}

      {modalOpen &&
        createPortal(
          // <div id="botpress-webchat" className="w-[60%] h-[20%]"></div>,
          document.body
        )}
    </div>
  );
}

export default Chatbot;
