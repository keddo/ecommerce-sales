import { Client, Account, Avatars } from "appwrite";

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("681d136a002c58f68f42");
export const account = new Account(client);
export const avatars = new Avatars(client);
