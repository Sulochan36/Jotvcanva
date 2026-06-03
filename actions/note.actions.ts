"use server";

import { connectDB } from "@/lib/db";
import Note from "@/models/note.model";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";



export async function createNote(formData: FormData) {
    try {
        const { userId } = await auth();

        if (!userId) {
            throw new Error("Unauthorized");
        }

        await connectDB();

        const title = formData.get("title") as string;
        const content = formData.get("content") as string;
        const workspace = formData.get("workspace") as string;
        const theme = formData.get("theme") as string;
        const tags =
            (formData.get("tags") as string)
                ?.split(",")
                .map((tag) => tag.trim())
                .filter(Boolean) || [];

        await Note.create({
            userId,
            title,
            content,
            workspace,
            theme,
            tags,
            slug: title.toLowerCase().replace(/\s+/g, "-"),
        });

        revalidatePath("/dashboard/notes");
    } catch (error) {
        console.error("Create Note Error:", error);
        throw new Error("Failed to create note");
    }
}

export async function deleteNote(id: string) {
    try {
        const { userId } = await auth();

        if (!userId) {
            throw new Error("Unauthorized");
        }

        await connectDB();

        await Note.findByIdAndDelete({
            _id: id,
            userId,
        });

        revalidatePath("/dashboard/notes");
    } catch (error) {
        console.error("Delete Note Error:", error);
        throw new Error("Failed to delete note");
    }
}

export async function updateNote(id: string, formData: FormData) {
    try {
        const { userId } = await auth();

        if (!userId) {
            throw new Error("Unauthorized");
        }

        await connectDB();

        await Note.findByIdAndUpdate({
            _id: id,
            userId,
        }, {
            title: formData.get("title"),
            content: formData.get("content"),
            workspace: formData.get("workspace"),
            tags:
                (formData.get("tags") as string)
                    ?.split(",")
                    .map((tag) => tag.trim())
                    .filter(Boolean) || [],
            theme: formData.get("theme"),
        });

        revalidatePath("/dashboard/notes");
    } catch (error) {
        console.error("Update Note Error:", error);
        throw new Error("Failed to update note");
    }
}

export async function toggleFavorite(id: string) {
    try {
        const { userId } = await auth();

        if (!userId) {
            throw new Error("Unauthorized");
        }

        await connectDB();

        const note = await Note.findById({
            _id: id,
            userId,
        });

        if (!note) {
            throw new Error("Note not found");
        }

        note.isFavorite = !note.isFavorite;
        await note.save();

        revalidatePath("/dashboard/notes");
    } catch (error) {
        console.error("Toggle Favorite Error:", error);
        throw new Error("Failed to update favorite");
    }
}

export async function archiveNote(id: string) {
    try {
        const { userId } = await auth();

        if (!userId) {
            throw new Error("Unauthorized");
        }

        await connectDB();

        const note = await Note.findById({
            _id: id,
            userId,
        });

        if (!note) {
            throw new Error("Note not found");
        }

        note.isArchived = !note.isArchived;
        await note.save();

        revalidatePath("/dashboard/notes");
    } catch (error) {
        console.error("Archive Note Error:", error);
        throw new Error("Failed to archive note");
    }
}