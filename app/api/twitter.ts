import axios from "axios";

const BASE_URL = "https://api.twitter.com/2";
const BEARER_TOKEN =
  "AAAAAAAAAAAAAAAAAAAAAFFRxAEAAAAAL8mmxvSgIlvdvq4m8kKFFS8Z3C8%3DA1DKn22VuDh3M8jYpVK5jzUmIK5GGiPoNCCdVPEV5T88dXQPC6";

// Define types for API responses
interface UserResponse {
  data: {
    id: string;
    name: string;
    username: string;
  };
}

export interface Tweet {
  id: string;
  text: string;
  created_at?: string;
  attachments?: {
    media_keys?: string[];
  };
}

interface TweetsResponse {
  data: Tweet[];
}

export const fetchUserTweets = async (username: string): Promise<Tweet[]> => {
  try {
    // Step 1: Get user ID from username
    const userResponse = await axios.get<UserResponse>(
      `${BASE_URL}/users/by/username/${username}`,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );

    const userId = userResponse.data.data.id;

    // Step 2: Fetch latest tweets from user ID
    const tweetsResponse = await axios.get<TweetsResponse>(
      `${BASE_URL}/users/${userId}/tweets?tweet.fields=attachments,created_at`,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );

    return tweetsResponse.data.data;
  } catch (error) {
    console.log("Error fetching tweets:", error);
    throw new Error("Unable to fetch tweets");
  }
};
