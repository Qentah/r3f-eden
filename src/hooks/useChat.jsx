import { createContext, useContext, useEffect, useState } from "react";

const backendUrl = "http://localhost:3000";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const chat = async (message) => {
    setLoading(true);
    try {
      const data = await fetch(`${backendUrl}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const resp = (await data.json()).messages;
      setMessages((messages) => [...messages, ...resp]);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  let i = 0;
  const randomSentence = () => {
    const sentences = [
      "Bonjour je me présente, je suis Eden! Comment vous vous sentez aujourd'hui?",
      "Il est prévu une belle aujourd'hui, avec 17°C et un ciel dégagé. Ca vous direz une petite balade?",
      "J'ai observé que vous écoutiez beaucoup de musique ces derniers temps, je peux vous aider à trouver de nouvelles musiques si vous voulez!",
      "Attention nous sommes en canicule, il est important de bien s'hydrater, n'oubliez pas de boire de l'eau!",
      "Vous avez rendez-vous chez le médecin cette aprés midi à 14h, n'oubliez pas!",
      "En votre absence votre petit fils vous a envoyé un message, voulez vous que je vous le lise?",
      "La ville organise une journée de solidarité avec des jeux et des activités, ça vous tente?",
    ];
    return sentences[i = (i + 1) % (sentences.length - 1)];
  };


  const fakeChat = () => {
    setFakeMessage(randomSentence());
  };

  const [fakeMessage, setFakeMessage] = useState("");

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [cameraZoomed, setCameraZoomed] = useState(true);
  const onMessagePlayed = () => {
    setMessages((messages) => messages.slice(1));
  };

  useEffect(() => {
    if (messages.length > 0) {
      setMessage(messages[0]);
    } else {
      setMessage(null);
    }
  }, [messages]);

  return (
    <ChatContext.Provider
      value={{
        chat,
        message,
        onMessagePlayed,
        loading,
        cameraZoomed,
        setCameraZoomed,
        fakeChat,
        fakeMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
