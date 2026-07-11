import mongoose, {
    Schema,
    models,
} from "mongoose";

const WorkspaceSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: true,
        },

        color: {
            type: String,
            default: "#b4abff",
        },
    },
    {
        timestamps: true,
    }
);

export default models.Workspace || mongoose.model("Workspace",WorkspaceSchema);