import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

import { auth, currentUser } from "@clerk/nextjs";

import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(request: Request) {
  const authorization = await auth();
  const user = await currentUser();
  // Get the current user from your database
  if (!authorization || !user) {
    return new Response("Unauthorized", { status: 403 });
  }

  // Start an auth session inside your endpoint

  // Implement your own security, and give the user access to the room
  const { room } = await request.json();
  const board = await convex.query(api.board.get, { id: room });

  if (board?.orgId !== authorization.orgId) {
    return new Response("Unauthorized", { status: 403 });
  }

  const userInfo = {
    name: user.firstName || "Collaborator",
    picture: user.imageUrl!,
  };

  const session = liveblocks.prepareSession(
    user.id,
    { userInfo } // Optional
  );

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  //   if (room && __shouldUserHaveAccess__(user, room)) {
  //     session.allow(room, session.FULL_ACCESS);
  //   }

  //   // Authorize the user and return the result
  const { status, body } = await session.authorize();
  return new Response(body, { status });
}
