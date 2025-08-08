import { mutation, query } from "./_generated/server";

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
    const user = ctx.db.insert("users", { name: "Raghav" });
  },
});
