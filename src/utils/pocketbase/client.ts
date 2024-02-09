import PocketBase, {
  AdminService, BaseAuthStore,
  RecordModel,
  RecordService,
} from "pocketbase";

const POCKETHOST_URL = process.env.POCKETHOST_URL;

/**
 * PocketClient class to handle all pocketbase operations
 */
export class PocketClient {
  private client: PocketBase;
  public users: RecordService<RecordModel>;
  public badges: RecordService<RecordModel>;
  public events: RecordService<RecordModel>;
  public admins: AdminService;
  public announcements: RecordService<RecordModel>;
  public badgesReceived: RecordService<RecordModel>;
  public authStore: BaseAuthStore;

  constructor() {
    this.client = new PocketBase(POCKETHOST_URL);
    this.client.autoCancellation(false);

    this.users = this.client.collection("users");
    this.badges = this.client.collection("badges");
    this.events = this.client.collection("events");
    this.admins = this.client.admins;
    this.announcements = this.client.collection("announcements");
    this.badgesReceived = this.client.collection("badgesReceived");
    this.authStore = this.client.authStore;
  }

  public collection(collectionName: string) {
    return this.client.collection(collectionName);
  }
}

export const client = new PocketClient();

export default PocketClient;
