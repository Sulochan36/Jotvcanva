import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { auth } from "@clerk/nextjs/server";


export async function GET(
    req: Request,
    { params }: { params: Promise<{ noteId: string }> }
) {
    try {
        await connectDB();

        const { noteId } = await params;

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

        const note = await Note.findOne({
            _id: noteId,
            userId,
        });

        if (!note) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Note not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: note,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch note",
            },
            { status: 500 }
        );
    }
}


export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ noteId: string }> }
) {
    try {
        await connectDB();

        const { noteId } = await params;

        const body = await req.json();

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

        const updatedNote = await Note.findOneAndUpdate(
            {
                _id: noteId,
                userId,
            },
            body,
            {
                new: true,
            }
        );

        if (!updatedNote) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Note not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Note updated successfully",
            data: updatedNote,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Failed to update note",
            },
            { status: 500 }
        );
    }
}



export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ noteId: string }> }
) {
    try {
        await connectDB();

        const { noteId } = await params;

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

        const deletedNote = await Note.findOneAndDelete({
            _id: noteId,
            userId,
        });

        if (!deletedNote) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Note not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Note deleted successfully",
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Failed to delete note",
            },
            { status: 500 }
        );
    }
}
