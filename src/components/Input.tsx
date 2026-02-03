import { Link } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    id: string;
}

export default function Input({
    children,
    id,
    type,
    placeholder,
    ...props
}: InputProps) {
    return (
        <div className="relative flex flex-col gap-1">
            <label htmlFor={id}>{children}</label>
            <input
                id={id}
                className={`placeholder-gray500 dark:placeholder-gray700 dark:border-gray700 h-12.5 w-full rounded-xl border border-gray-300 px-4 focus:outline-none
                    ${type === "file" && "hidden"}`}
                type={type}
                placeholder={placeholder}
                {...props}
            />
            {type == "file" && (
                <label
                    htmlFor={id}
                    className="relative dark:border-gray700 h-12.5 w-full rounded-xl border border-gray-300 px-4 flex items-center text-gray500 dark:text-gray700"
                >
                    {placeholder ? (
                        <span className="text-gray1000">{placeholder}</span>
                    ) : (
                        "선택된 파일 없음"
                    )}
                    <Link size={20} className="absolute right-4 text" />
                </label>
            )}
        </div>
    );
}
