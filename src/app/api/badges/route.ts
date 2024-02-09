import { createBadge } from "@/utils/pocketbase/badges/createBadge";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, image } = body;

    const response = await createBadge({
        name: name,
        description: description,
        image: image,
    });

    return NextResponse.json({ message: "Badge created successfully" });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
