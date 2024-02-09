import { createEvent } from "@/utils/pocketbase/events/createEvent";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      description,
      startDateTime,
      endDateTime,
      location,
      organizer_id,
      xpGiven,
    } = body;

    const response = await createEvent({
      name: name,
      description: description,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
      location: location,
      organizer_id: organizer_id,
      xpGiven: xpGiven,
    });

    return NextResponse.json({ message: "Event created successfully" });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
