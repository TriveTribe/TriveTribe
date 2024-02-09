import { createAnnouncement } from "@/utils/pocketbase/announcements/createAnnouncements";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { header, description } = body;

    const response = await createAnnouncement({
      header: header,
      description: description,
    });

    return NextResponse.json({ message: "Announcement created successfully" });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
