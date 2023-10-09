import { getIcons } from "@/services/getIcons";
import { IconSocialMedia } from "./IconSocialMedia"

const socialMediaIcons = getIcons();

function AsideSocialMedia() {
    return (
        <section className="bg-indigo-100  shadow-lg w-[10%]">
            <aside className="flex flex-col items-center">
                <h3 className="text-primary-bold mt-[50%]">Links</h3>
                {
                    socialMediaIcons.map((icon) => (
                        <IconSocialMedia key={icon.id} iconName={icon.iconName} link={icon.link} relIcon={icon.relIcon} />
                    ))
                }
            </aside>
        </section>

    )
}

export { AsideSocialMedia }