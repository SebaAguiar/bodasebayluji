// Generated by Xata Codegen 0.28.4. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "Users",
    columns: [
      { name: "name", type: "string" },
      { name: "attendance", type: "string", defaultValue: "PENDING" },
      { name: "email", type: "email" },
      { name: "phone", type: "string" },
      { name: "direction", type: "string" },
      { name: "gender", type: "string" },
      { name: "age", type: "string", defaultValue: "ADULT" },
      { name: "user_table", type: "link", link: { table: "Tables" } },
    ],
  },
  {
    name: "Tables",
    columns: [{ name: "number", type: "int" }],
    revLinks: [{ column: "user_table", table: "Users" }],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Users = InferredTypes["Users"];
export type UsersRecord = Users & XataRecord;

export type Tables = InferredTypes["Tables"];
export type TablesRecord = Tables & XataRecord;

export type DatabaseSchema = {
  Users: UsersRecord;
  Tables: TablesRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    process.env.XATA_DATABASE_URL,
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};

export const xata = getXataClient()
