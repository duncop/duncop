import ReportForm from "@/components/ReportForm";

export default function Report() {
    return (
        <div className="gap-10 flex flex-col items-center">
            <h2 className="text-4xl font-semibold">벞교 불량유저 신고</h2>
            <ReportForm />
        </div>
    );
}
