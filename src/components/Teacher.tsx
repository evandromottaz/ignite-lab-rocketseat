type TeacherProps = {
    name: string;
    bio: string;
    avatar: string;
}

export function Teacher({ name, bio, avatar }: TeacherProps) {
    return (
        <div className="flex items-center gap-4 mt-6">
            <img
                src={avatar}
                alt="Imagem de perfil"
                className="h-16 w-16 rounded-full border-2 border-blue-500"
            />

            <div className="leading-relaxed">
                <strong className="font-bold text-2xl black mobile:text-lg">{name}</strong>

                <span className="text-gray-200 text-sm block">{bio}</span>
            </div>
        </div>
    )
}