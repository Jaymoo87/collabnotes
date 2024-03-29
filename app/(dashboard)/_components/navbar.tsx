"use client";
import { OrganizationSwitcher, UserButton, useOrganization } from "@clerk/nextjs";
import React from "react";
import { SearchInput } from "./search-input";
import { InviteButton } from "./invite-button";

export const Navbar = () => {
  const { organization } = useOrganization();
  return (
    <div className="flex items-center gap-x-4 p-5 ">
      <div className="hidden lg:flex-1 lg:flex ">
        <SearchInput />{" "}
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "367px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                justifyContent: "space-between",
                border: "1px solid #e5e7eb",
              },
            },
          }}
        />
      </div>
      {organization && <InviteButton />}

      <UserButton />
    </div>
  );
};
