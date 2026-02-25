import { supabase } from "@/utils/supabase";

/* 벞교 불량유저 신고 */
export const reportUser = async (form: ReportForm) => {
    // 이미지 업로드
    const file = form.contents.image;
    const fileName = `${crypto.randomUUID()}.${file!.name.split(".").pop()}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
        .from("report-images")
        .upload(fileName, file!);
    if (uploadError) throw uploadError;

    const { data: publicUrlData } = supabase.storage
        .from("report-images")
        .getPublicUrl(uploadData.path);

    // Report 테이블에 데이터 삽입
    const { error } = await supabase.from("Report").insert([
        {
            reporter_server: form.reporter.server,
            reporter_character: form.reporter.character,
            reporter_adventure: form.reporter.adventure,
            reportee_server: form.reportee.server,
            reportee_character: form.reportee.character,
            reportee_adventure: form.reportee.adventure,
            contents_type: form.contents.type,
            contents_detail: form.contents.detail,
            contents_image: publicUrlData.publicUrl,
        },
    ]);
    if (error) throw error;

    return true;
};
