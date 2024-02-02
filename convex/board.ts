import { v } from "convex/values";

import { mutation } from "./_generated/server";

const images = [
  "/placeholders/ph1.png",
  "/placeholders/ph2.png",
  "/placeholders/ph3.png",
  "/placeholders/ph4.png",
  "/placeholders/ph5.png",
  "/placeholders/ph6.png",
  "/placeholders/ph7.png",
  "/placeholders/ph8.png",
  "/placeholders/ph9.png",
  "/placeholders/ph10.png",
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
