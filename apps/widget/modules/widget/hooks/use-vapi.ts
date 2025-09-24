import Vapi from "@vapi-ai/web";
import { useEffect, useState } from "react";

interface TranscriptMessage {
  role: "user" | "assistent";
  message: string;
}

export const useVapi = () => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);

  useEffect(() => {
    const vapiInstance = new Vapi("d27893e2-a9b3-406c-aa04-a1c48e51bac3");
    setVapi(vapiInstance);

    vapiInstance.on("call-start", () => {
      setIsConnected(true);
      setIsConnecting(false);
      setTranscript([]);
    });

    vapiInstance.on("call-end", () => {
      setIsConnected(false);
      setIsConnecting(false);
      setIsSpeaking(false);
    });

    vapiInstance.on("speech-start", () => {
      setIsSpeaking(true);
    });

    vapiInstance.on("speech-end", () => {
      setIsSpeaking(false);
    });

    vapiInstance.on("error", (err) => {
      console.log(err, "VAPI_ERROR");
      setIsConnecting(false);
    });

    vapiInstance.on("message", (msg) => {
      if (msg.type === "transcript" && msg.transcriptType === "final") {
        setTranscript((prev) => [
          ...prev,
          {
            role: msg.role === "user" ? "user" : "assistent",
            message: msg.transcript,
          },
        ]);
      }
    });

    return () => {
      vapiInstance?.stop();
    };
  }, []);

  const startCall = () => {
    setIsConnected(true);
    if (vapi) {
      vapi.start("47dd4423-2dd0-4a0e-8490-b9c7acad2e37");
    }
  };

  const endCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  return {
    isConnected,
    isConnecting,
    isSpeaking,
    transcript,
    startCall,
    endCall,
  };
};
