import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema(

    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },

        content: {
            type: String,
            required: true,
        },

        workspace: {
            type: String,
            default: "General",
        },

        theme: {
            type: String,
            default: "aurora",
        },

        tags: {
            type: [String],
            default: [],
        },

        isFavorite: {
            type: Boolean,
            default: false,
        },

        isArchived: {
            type: Boolean,
            default: false,
        },

        slug: {
            type: String,
            unique: true,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);

export default Note;