import { useEffect, useRef } from "react";
import { useChat } from "../hooks/useChat";
import { useSpeech } from "../hooks/useSpeech";

export const UI = ({ hidden, ...props }) => {
  const input = { current: { value: "" } };
  const { sendMessage: send, loading, cameraZoomed, setCameraZoomed, fakeChat } = useChat();
  const { listening, message, temp, startListening, stopListening } = useSpeech();

  const sendMessage = () => {
    const text = input.current.value;
    if (!loading && text) {
      send(text);
      input.current.value = "";
    }
  };


  const record = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };

  useEffect(() => {
    if (temp) {
      input.current.value = temp;
    }
  }, [temp]);

  useEffect(() => {
    if (message) {
      input.current.value = message;
      stopListening();
      sendMessage();
    }
  }, [message]);

  if (hidden) {
    return null;
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-between p-4 flex-col pointer-events-none">
        <div className="self-start backdrop-blur-md bg-white bg-opacity-50 p-4 rounded-lg">
          <h1 className="font-black text-xl">Eden Partenaire 💖</h1>
          <p>votre partenaire digital boosté par</p><p>intelligence artificiel🤖</p>
        </div>
        <div className="w-full flex flex-col items-end justify-center gap-4">
          <button
            onClick={() => setCameraZoomed(!cameraZoomed)}
            className="pointer-events-auto bg-blue-800 hover:bg-blue-950 text-white p-4 rounded-md"
          >
            {cameraZoomed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 pointer-events-auto max-w-screen-sm w-full mx-auto">
          <input
            className="w-full placeholder:text-gray-800 placeholder:italic p-4 rounded-md bg-opacity-50 bg-white backdrop-blur-md"
            placeholder="Votre message..."
            ref={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <button
            disabled={loading | listening}
            onClick={record}
            className={`bg-blue-800 hover:bg-blue-950 text-white p-4 px-10 font-semibold uppercase rounded-md ${loading | listening} ? "cursor-not-allowed opacity-30" : ""
              }`}
          >
            MICRO
          </button>
          <button
            onClick={() => fakeChat()}
            className={`bg-blue-800 hover:bg-blue-950 text-white p-4 px-10 font-semibold uppercase rounded-md `}
          >
            DEMOS
          </button>
        </div>
      </div >
    </>
  );
};
