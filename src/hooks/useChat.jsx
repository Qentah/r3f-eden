import { createContext, useContext, useEffect, useState } from "react";

const backendUrl = "http://localhost:8000";
const ChatContext = createContext();
let i = 0;

export const ChatProvider = ({ children }) => {
    const chat = async (message) => {
        setLoading(true);
        const date = new Date();
        try {
            fetch(`${backendUrl}/chat/gpt?message=${message}`).then(async response => {
                let text = "";
                const stream = new WritableStream({
                    async write(chunk) {
                        text += chunk;
                        if (text.includes('.') || text.includes('!') || text.includes('?')) {
                            const before = text.split(/[\.\!\?]/)[0] + text[text.split(/[\.\!\?]/)[0].length]
                            const after = text.split(/[\.\!\?]/)[1];
                            text = after;
                            setMessage(before);
                        }
                    },
                });

                await response.body
                    .pipeThrough(new TextDecoderStream())
                    .pipeTo(stream);
                setLoading(false);
            })
        } catch (e) {
            console.error(e);
        }
    };

    const randomSentence = () => {
        const sentences = [
            ". La ville organise une journée de solidarité avec des jeux et des activités, ça vous tente?",
            ". Bonjour je me présente, je suis Eden. Je suis votre partenaire digital. On peut commencez par faire connaissance si vous le voulez bien?",
            ". Avez vous pensé à prendre vos médicaments ?",
            ". Il est prévu une belle journée aujourd'hui, avec 17°C et un ciel dégagé. Ca vous direz une petite balade?",
            ". J'ai observé que vous écoutiez beaucoup de musique ces derniers temps, je peux vous aider à trouver de nouvelles musiques si vous voulez!",
            ". Attention nous sommes en canicule, il est important de bien s'hydrater, n'oubliez pas de boire de l'eau!",
            ". Vous avez rendez-vous chez le médecin cette aprés midi à 14h, voulez vous que je vous explique comment vous y rendre?",
            ". En votre absence votre petit fils vous a envoyé un message, voulez vous que je vous le lise?",
        ];

        return sentences[i = (i + 1) % sentences.length];
    };

    const fakeChat = () => {
        setFakeMessage(randomSentence());
    };

    const [fakeMessage, setFakeMessage] = useState();
    const [message, setMessage] = useState();

    const [loading, setLoading] = useState(false);
    const [cameraZoomed, setCameraZoomed] = useState(true);

    return (
        <ChatContext.Provider
            value={{
                chat,
                loading,
                cameraZoomed,
                setCameraZoomed,
                fakeChat,
                setFakeMessage,
                fakeMessage,
                setMessage,
                message,
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
