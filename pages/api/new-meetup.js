import { connectToMongoDBAndRunQuery } from "../../utils/helpers";
// .../api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, description, image, address } = data;

    let result;
    try {
      const result = await connectToMongoDBAndRunQuery((collection) => {
        return collection.insertOne(data);
      });

      console.log(result);
      res
        .status(201)
        .json({ message: "Meetup created successfully", result: result });
    } catch (e) {
      console.log(e);
    }
  }
};

export default handler;
