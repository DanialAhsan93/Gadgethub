import React, { useState } from 'react';
import "./style.css"
const Chatbox = ({ handleClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
    }
    setInputValue('');
  };

  return (
    <div className="chat-box shadow">
      <div className="chat-header shadow">
        <div className='text-white'>

        <h4 className='p-2'>TechShed</h4> 
        <p className='chat-box-p'><span><i class="fa-solid fa-circle"></i></span> We'll reply as soon as we can</p>
        </div>
        <button className="close-button" onClick={handleClose}>
        <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="chat-body shadow">
       {/* <div className='align-items-center justify-content-center'><p className= ' text-center  text-balck  pt-2'>How can I help You!</p></div>  */}
        
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-footer shadow">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        {/* <button type="submit">Send</button> */}
      </form>
    </div>
  );
};

export default Chatbox;
