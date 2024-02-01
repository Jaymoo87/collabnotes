import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/emptynotes.png"} alt="empty Notes" height={400} width={400} />
      <h2 className="text-2xl font-semibold mt-6">Create Your First Board</h2>
      <p className="text-muted-foreground text-sm mt-2">Create Your First Board To Collab With Others!</p>
      <div className="mt-6">
        <Button size={"lg"}>Create Board</Button>
      </div>
    </div>
  );
};
