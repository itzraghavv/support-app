import { throwDeprecation } from "process";
import { mutation, query } from "./_generated/server";
import { error } from "console";

export const getUser = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();

    return users;
  },
});

export const addUser = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Not authenticated");
    }

    const orgId = identity.orgId as string;

    if (!orgId) {
      throw new Error("Missing Organization!");
    }

    const user = ctx.db.insert("users", { name: "Raghav" });
  },
});
