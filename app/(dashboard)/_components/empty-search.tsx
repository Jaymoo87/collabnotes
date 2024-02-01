import Image from "next/image";
import React from "react";

export const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/emptynotes.png"} alt="empty Notes" height={600} width={600} />
      <h2 className="text-2xl font-semibold mt-6">No Results Found</h2>
      <p className="text-muted-foreground text-sm mt-2">Try Again</p>
    </div>
  );
};
