import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";

export async function GET() {
    try {
        await connectDB();

        const notes = await Note.find().sort({ createdAt: -1 });

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
        await connectDB();

        const body = await req.json();

        const note = await Note.create({
            ...body,
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