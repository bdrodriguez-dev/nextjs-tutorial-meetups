import { MongoClient } from "mongodb";

export async function connectToMongoDBAndRunQuery(queryCallback) {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://brodriguez:qwg0pFdmOTAEtqQf@cluster0.knibf.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await queryCallback(meetupsCollection);
    await client.close();
    return result;
  } catch (e) {
    console.log(e);
  }
}
