import Menual from "@/components/Menual";
import SearchForm from "@/components/SearchForm";

export default function Home() {
    return (
        <div className="gap-10 flex flex-col items-center">
            <h1>
                DUN<span className="text-main">COP</span>
            </h1>
            <SearchForm />
            <Menual />
        </div>
    );
}
