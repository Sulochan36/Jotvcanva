import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";


export async function GET(
    req: Request,
    { params }: { params: Promise<{ noteId: string }> }
) {
    try {
        await connectDB();

        const { noteId } = await params;

        const note = await Note.findById(noteId);

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

        const updatedNote = await Note.findByIdAndUpdate(
            noteId,
            body,
            { new: true }
        );

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

        await Note.findByIdAndDelete(noteId);

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
