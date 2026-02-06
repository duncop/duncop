import AdventureCard from "@/components/AdventureCard";
import Menual from "@/components/Menual";
import SearchForm from "@/components/SearchForm";

export default function Home() {
    return (
        <div className="gap-10 flex flex-col items-center">
            <h1>
                DUN<span className="t-main">COP</span>
            </h1>
            <SearchForm />
            {true ? (
                <div className="w-full">
                    <p className="text-lg mb-2">
                        검색 결과 <span className="t-main">1</span>
                    </p>
                    <div className="w-full flex gap-3">
                        <AdventureCard />
                    </div>
                </div>
            ) : (
                <Menual />
            )}
        </div>
    );
}
