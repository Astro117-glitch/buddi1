import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  bio: text("bio").default(""),
  avatar: text("avatar").default("default"),
  status: text("status").default("online"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  channel: text("channel").notNull().default("general"),
  message: text("message").default(""),
  fileName: text("file_name").default(""),
  fileData: text("file_data").default(""),
  avatar: text("avatar").default(""),
  createdAt: timestamp("created_at").defaultNow(),
});

export const moments = pgTable("moments", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  message: text("message").default(""),
  fileName: text("file_name").default(""),
  fileData: text("file_data").default(""),
  avatar: text("avatar").default(""),
  createdAt: timestamp("created_at").defaultNow(),
});

export const groups = pgTable("groups", {
  id: serial("id").primaryKey(),
  groupName: text("group_name").notNull().unique(),
  members: text("members").default(""),
  createdAt: timestamp("created_at").defaultNow(),
});

export const bans = pgTable("bans", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  banned: text("banned").default("false"),
  bannedBy: text("banned_by").default(""),
  createdAt: timestamp("created_at").defaultNow(),
});
