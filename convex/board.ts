import { v } from "convex/values";

import { mutation } from "./_generated/server";

const images = [
  "/placeholders/ph1",
  "/placeholders/ph2",
  "/placeholders/ph3",
  "/placeholders/ph4",
  "/placeholders/ph5",
  "/placeholders/ph6",
  "/placeholders/ph7",
  "/placeholders/ph8",
  "/placeholders/ph9",
  "/placeholders/ph10",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    });
    return board;
  },
});
