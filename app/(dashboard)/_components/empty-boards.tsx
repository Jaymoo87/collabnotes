"use client";
import React from "react";
import Image from "next/image";

import { useOrganization } from "@clerk/nextjs";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";

import { useApiMutation } from "@/hooks/use-api-mutation";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "untitled",
    })
      .then((id) => toast.success("Board Created"))
      .catch(() => toast.error("Failed to Create Board"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/emptynotes.png"} alt="empty Notes" height={400} width={400} />
      <h2 className="text-2xl font-semibold mt-6">Create Your First Board</h2>
      <p className="text-muted-foreground text-sm mt-2">Create Your First Board To Collab With Others!</p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size={"lg"}>
          Create Board
        </Button>
      </div>
    </div>
  );
};
