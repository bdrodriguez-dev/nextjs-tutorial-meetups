import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { connectToMongoDBAndRunQuery } from "../utils/helpers";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="some description" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from api
  let meetups;
  // try {
  //   const client = await MongoClient.connect(
  //     "mongodb+srv://brodriguez:qwg0pFdmOTAEtqQf@cluster0.knibf.mongodb.net/meetups?retryWrites=true&w=majority"
  //   );
  //   const db = client.db();
  //   const meetupsCollection = db.collection("meetups");
  //   meetups = await meetupsCollection.find().toArray();
  //   await client.close();
  //   // return result;
  // } catch (e) {
  //   console.log(e);
  // }
  try {
    meetups = await connectToMongoDBAndRunQuery((collection) => {
      return collection.find().toArray();
    });

    // console.log(
    //   `Meetups from root index.js line 22: ${JSON.stringify(meetups)}`
    // );
  } catch (e) {
    console.log(`Error from root index.js line 24 ${e}`);
  }
  // console.log(`Meetups from root index.js line 28: ${JSON.stringify(meetups)}`);

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          description: meetup.description,
          image: meetup.image,
          address: meetup.address,
        };
      }),
      revalidate: 1,
    },
  };
}

export default HomePage;
