import React from "react";
import Image from "next/image";

import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/emptynotes.png" alt="Empty" width={400} height={400} className="rounded-3xl" />
      <h2 className="text-2xl font-bold mt-6">Welcome to CollabNotes</h2>
      <p className="text-muted-foreground text-sm mt-2">Create an Organization to get Started</p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger>
            <Button size={"lg"}>Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
