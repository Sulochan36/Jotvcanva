"use server";

import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import Workspace from "@/models/workspace.model";
import { revalidatePath } from "next/cache";

export async function createWorkspace(
    formData: FormData
) {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    await connectDB();

    const name = formData.get("name") as string;

    if (!name.trim()) return;

    const exists = await Workspace.findOne({
        userId,
        name,
    });

    if (exists) return;

    await Workspace.create({
        userId,
        name,
    });

    revalidatePath("/dashboard/workspaces");
}