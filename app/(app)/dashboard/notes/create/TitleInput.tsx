interface TitleInputProps {
    defaultValue?: string;
}

const TitleInput = ({ defaultValue }: TitleInputProps) => {
    return (
        <div className="mb-8">

            <input
                type="text"
                name="title"
                placeholder="Untitled Note"
                defaultValue={defaultValue}
                autoComplete="off"
                spellCheck={false}
                className="w-full bg-transparent text-5xl font-bold tracking-tight text-white placeholder:text-neutral-600 outline-none md:text-6xl"
            />

        </div>
    );
};

export default TitleInput;