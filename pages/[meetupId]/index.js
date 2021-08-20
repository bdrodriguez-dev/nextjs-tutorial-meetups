import { ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { connectToMongoDBAndRunQuery } from "../../utils/helpers";

const MeetupDetailsPage = (props) => {
  return (
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const meetups = await connectToMongoDBAndRunQuery((collection) => {
    return collection.find({}, { _id: 1 }).toArray();
  });

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => {
      return {
        params: {
          meetupId: meetup._id.toString(),
        },
      };
    }),
  };
}

export async function getStaticProps(context) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;
  // console.log(`Hey, I'm the meetupId: ${meetupId}`);
  let meetupData;
  try {
    meetupData = await connectToMongoDBAndRunQuery((collection) => {
      return collection.findOne({ _id: ObjectId(meetupId) });
    });
    // console.log(`Hi, I'm the meetupData: ${JSON.stringify(meetupData)}`);
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      meetupData: {
        title: meetupData.title,
        image: meetupData.image,
        address: meetupData.address,
        description: meetupData.description,
      },
    },
    revalidate: 1,
  };
}

export default MeetupDetailsPage;
