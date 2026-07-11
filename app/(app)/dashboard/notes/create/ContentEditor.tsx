interface ContentEditorProps {
    defaultValue?: string;
}

const ContentEditor = ({ defaultValue }: ContentEditorProps) => {
    return (
        <div className="min-h-[60vh]">

            <textarea
                name="content"
                defaultValue={defaultValue}
                placeholder="Start writing your thoughts..."
                spellCheck={true}
                className="min-h-[65vh] w-full resize-none bg-transparent text-lg leading-9 text-neutral-300 placeholder:text-neutral-600 outline-none"
            />

        </div>
    );
};

export default ContentEditor;