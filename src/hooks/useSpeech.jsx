//set hook for webkitSpeechRecognition

import { useEffect, useState } from "react";

export const useSpeech = () => {
    const [listening, setListening] = useState(false);
    const [message, setMessage] = useState("");
    const [temp, setTemp] = useState("");
    const [recognition, setRecognition] = useState(null);

    useEffect(() => {
        if (!("webkitSpeechRecognition" in window)) {
            setError("Speech recognition is not supported by this browser");
        }
        else {
            const recognition = new window.webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = true;
            recognition.lang = "fr-FR";

            //add grammar punctuation


            recognition.onresult = (event) => {
                let interimTranscript = "";
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        setMessage(transcript);
                    } else {
                        interimTranscript += transcript;
                        setTemp(interimTranscript);
                    }

                }
            }
            recognition.onend = () => {
                setListening(false);
            }
            setRecognition(recognition);
        }
    }, []);

    const startListening = () => {
        recognition.start();
        setListening(true);
    }

    const stopListening = () => {
        recognition.stop();
    }

    return { listening, message, temp, startListening, stopListening };
}
