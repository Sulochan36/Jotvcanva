import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";

import { auth } from "@clerk/nextjs/server";

export async function GET() {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unauthorized",
                },
                { status: 401 }
            );
        }

        await connectDB();

        const notes = await Note.find({
            userId,
        }).sort({ createdAt: -1 });

        return NextResponse.json({
            success: true,
            message: "Notes fetched successfully",
            data: notes,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch notes",
            },
            { status: 500 }
        );
    }
}


export async function POST(req: Request) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unauthorized",
                },
                { status: 401 }
            );
        }

        await connectDB();

        const body = await req.json();

        const note = await Note.create({
            userId,
            title: body.title,
            content: body.content,
            workspace: body.workspace,
            theme: body.theme,
            slug: body.title
                .toLowerCase()
                .replace(/\s+/g, "-"),
        });

        return NextResponse.json(
            {
                success: true,
                message: "Note created successfully",
                data: note,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to create note",
            },
            { status: 500 }
        );
    }
}