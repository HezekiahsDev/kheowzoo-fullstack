import { NextResponse } from "next/server";

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api.twitter.com/2/tweets/search/recent?query=from:${username}&tweet.fields=created_at,text`,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Twitter API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch tweets" },
      { status: 500 }
    );
  }
}
