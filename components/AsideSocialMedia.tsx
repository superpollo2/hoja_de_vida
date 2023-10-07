import { getIcons } from "@/services/getIcons";
import { IconSocialMedia } from "./IconSocialMedia"

const socialMediaIcons = getIcons();

function AsideSocialMedia() {
    return (
        <section className="bg-red-500 w-[10%] ">
            <aside className="flex flex-col items-center">
                <h3 className="text-primary-bold mt-[50%]">Liks</h3>
                {
                    socialMediaIcons.map((icon) => (
                        <IconSocialMedia iconName={icon.iconName} link={icon.link} relIcon={icon.relIcon} />
                    ))
                }
            </aside>
        </section>

    )
}

export { AsideSocialMedia }