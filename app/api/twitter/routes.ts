import { NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = "https://api.twitter.com/2";
const BEARER_TOKEN =
  "AAAAAAAAAAAAAAAAAAAAAFFRxAEAAAAAL8mmxvSgIlvdvq4m8kKFFS8Z3C8%3DA1DKn22VuDh3M8jYpVK5jzUmIK5GGiPoNCCdVPEV5T88dXQPC6";

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
    const userResponse = await axios.get(
      `${BASE_URL}/users/by/username/${username}`,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );

    const userId = userResponse.data.data.id;

    // Step 2: Fetch latest tweets for the user
    const tweetsResponse = await axios.get(
      `${BASE_URL}/users/${userId}/tweets?tweet.fields=attachments,created_at`,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );

    return NextResponse.json(tweetsResponse.data, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching tweets:", error.message);
    return NextResponse.json(
      { error: "Unable to fetch tweets" },
      { status: 500 }
    );
  }
}
