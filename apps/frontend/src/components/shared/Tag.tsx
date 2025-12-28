interface TagProps {
    label: string
    icone: React.ElementType
    outlined?: boolean
}

export default function Tag(props: TagProps) {
    const { label, icone: Icone, outlined = false } = props;
    return (
        <div className={`flex items-center gap-2 self-start py-1 px4
            rounded-full text-xs uppercase
            ${
                outlined
                ? 'border border-violet-500 text-white'
                : 'bg-linear-to-r from-violet-500 to-violet-800 text-white'
            }
        `}>
            <Icone size={15} />
            <span>{label}</span>
        </div>
    )
}