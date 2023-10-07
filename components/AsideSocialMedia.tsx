import { getIcons } from "@/services/getIcons";
import { IconSocialMedia } from "./IconSocialMedia"

const socialMediaIcons = getIcons();

function AsideSocialMedia() {
  return (
    <section className="flex flex-col items-center">
        <h3 className="text-primary-bold mt-[50%]">Liks</h3>
        {
            socialMediaIcons.map((icon) => (
                <IconSocialMedia iconName={icon.iconName} link={icon.link} relIcon={icon.relIcon}/>
            ))
        }
    </section>
  )
}

export {AsideSocialMedia}