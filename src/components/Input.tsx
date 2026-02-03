interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    id: string;
}

export default function Input({ children, id, ...props }: InputProps) {
    return (
        <div className="relative flex flex-col gap-1">
            <label htmlFor={id}>{children}</label>
            <input
                id={id}
                className={
                    "placeholder-gray500 dark:placeholder-gray700 dark:border-gray700 h-12.5 w-full rounded-xl border border-gray-300 px-4 focus:outline-none"
                }
                {...props}
            />
        </div>
    );
}
