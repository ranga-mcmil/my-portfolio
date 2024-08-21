import { fetchRandomBioText } from "@/lib/actions/bio.actions";

export const BioText = async () => {
    const bio_text = await fetchRandomBioText()


    return (
        <h2 className="text-sm text-zinc-500 w-[60%] mx-auto">
            {bio_text?.content}
        </h2>
        
    );
};
