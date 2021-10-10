import React, { useState, useEffect } from "react";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import Messages from "./Messages";
import Input from "./Input";
import { API } from "./ChatbotAPI";
import { API2 } from "./ChatbotAPI";
import "./Chatbot.css";
import Header from "./Header";


const Chatbot1 = (props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse("")}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = (text) => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API2.Michael1(text)}
      />
    );
    setMessages(newMessages);
  };

  return (
    <div className="chatbot">
      <Header/>
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}

export default Chatbot1;
