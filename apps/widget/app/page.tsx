"use client";

import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useQuery } from "convex/react";

export default function Page() {
  const {
    isConnected,
    isConnecting,
    isSpeaking,
    transcript,
    startCall,
    endCall,
  } = useVapi();

  return (
    <div className="flex flex-col items-center justify-center min-h-svh max-w-md mx-auto w-full">
      <Button onClick={() => startCall()}>Start Call</Button>
      <Button variant="destructive" onClick={() => endCall()}>
        End Call
      </Button>
      <p>isConnected : {`${isConnected}`}</p>
      <p>isSpeaking : {`${isSpeaking}`}</p>
      <p>isConnecting : {`${isConnecting}`}</p>
      <p>{JSON.stringify(transcript, null, 2)}</p>
    </div>
  );
}
