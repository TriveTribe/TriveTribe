import { createAnnouncement } from "@/utils/pocketbase/announcements/createAnnouncements";
import { NextRequest, NextResponse } from "next/server";
import {authUserWithPassword} from "@/utils/pocketbase/auth/authUserWithPassword";
import { cookies } from 'next/headers';
import { client } from '@/utils/pocketbase/client';
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password} = body;

        const response = await authUserWithPassword({
            username: username,
            password: password
        });

        console.log(response)

        const { record, token } = response;
        record.token = token;
        cookies().set('pb_auth', client.authStore.exportToCookie());

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
