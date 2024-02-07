import PocketBase, { AdminService, RecordModel, RecordService } from "pocketbase";

// export const client = new PocketBase(`${process.env.POCKETHOST_URL}`);
const POCKETHOST_URL = process.env.POCKETHOST_URL;

export class PocketClient {
  private client: PocketBase;
  public users: RecordService<RecordModel>;
  public badges: RecordService<RecordModel>;
  public events: RecordService<RecordModel>;
  public admins: AdminService;

  constructor() {
    this.client = new PocketBase(POCKETHOST_URL);
    this.client.autoCancellation(false);
  
    this.users = this.client.collection("users");
    this.badges = this.client.collection("badges");
    this.events = this.client.collection("events");
    this.admins = this.client.admins;
  }

  public collection(collectionName: string) {
    return this.client.collection(collectionName);
  }
}

export const client = new PocketClient();

export default PocketClient;
