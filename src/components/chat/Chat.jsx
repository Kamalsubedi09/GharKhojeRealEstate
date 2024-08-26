import { useState } from "react";
import "./chat.scss";


function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://th.bing.com/th/id/OIP.XGkWC1GA1yp6oMcc4EpR-gHaJ4?w=121&h=180&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
          <span>Kamal subedi</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://th.bing.com/th/id/OIP.XGkWC1GA1yp6oMcc4EpR-gHaJ4?w=121&h=180&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://th.bing.com/th/id/OIP.XGkWC1GA1yp6oMcc4EpR-gHaJ4?w=121&h=180&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://th.bing.com/th/id/OIP.XGkWC1GA1yp6oMcc4EpR-gHaJ4?w=121&h=180&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://th.bing.com/th/id/OIP.XGkWC1GA1yp6oMcc4EpR-gHaJ4?w=121&h=180&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://th.bing.com/th/id/OIP.XGkWC1GA1yp6oMcc4EpR-gHaJ4?w=121&h=180&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://th.bing.com/th/id/OIP.XGkWC1GA1yp6oMcc4EpR-gHaJ4?w=121&h=180&c=7&r=0&o=5&pid=1.7"
                alt=""
              />
            Kamal subedi
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}


export default Chat;
