import React from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export const Chat: React.FC = () => {
  const [value, setValue] = React.useState("");
  const [chat, setChat] = React.useState<any>([]);

  React.useEffect(() => {
    socket.on("chat", (payload) => {
      setChat((prev: any)=>[...prev, {...payload}]);
    });
  }, []);

  const handleSendChat = () => {
    socket.emit("chat", { message: value });
    setValue("");
  };

  return (
    <>
      <h1>Chat App</h1>

      <input
        type={"text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSendChat}>Send</button>

      <div>
        <h3>Messages</h3>
        {chat.map((item: any, index: number) => {
          return <p key={index}>{item.message}</p>;
        })}
      </div>
    </>
  );
};
