import { NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = "https://api.twitter.com/2";
const BEARER_TOKEN =
  "AAAAAAAAAAAAAAAAAAAAAFFRxAEAAAAAL8mmxvSgIlvdvq4m8kKFFS8Z3C8%3DA1DKn22VuDh3M8jYpVK5jzUmIK5GGiPoNCCdVPEV5T88dXQPC6";

// Define the types for the Twitter API responses
interface UserResponse {
  data: {
    id: string;
    username: string;
    // Add other relevant fields if necessary
  };
}

interface TweetResponse {
  data: Array<{
    id: string;
    text: string;
    created_at: string;
    attachments?: { media_keys: string[] };
  }>;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

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

    const userId = userResponse.data?.data?.id; // Safe access to `id`

    if (!userId) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Step 2: Fetch latest tweets for the user
    const tweetsResponse = await axios.get<TweetResponse>(
      `${BASE_URL}/users/${userId}/tweets?tweet.fields=attachments,created_at`,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );

    return NextResponse.json(tweetsResponse.data, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching tweets:", error.message);
    } else {
      console.error("An unknown error occurred", error);
    }
    return NextResponse.json(
      { error: "Unable to fetch tweets" },
      { status: 500 }
    );
  }
}
