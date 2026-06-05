interface StatsCardProps {
    title: string;
    value: number;
}

export default function StatsCard({title,value}: StatsCardProps) {
    return (
        <div className="border rounded-xl p-4">
            <h3 className="text-sm text-gray-500">
                {title}
            </h3>

            <p className="text-3xl font-bold mt-2">
                {value}
            </p>
        </div>
    );
}