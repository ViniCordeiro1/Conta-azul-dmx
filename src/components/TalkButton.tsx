import Image from "next/image"
import IconWhatsApp from "@/assets/whatsapp_.png"
import Call from "@/assets/telephone-call_.png"

export function TalkButton() {
    return (
        <div className="flex gap-[15px] mt-[140px] justify-center">
            <div className="flex w-[288px] h-[166px] p-10 bg-white items-center justify-center hover:bg-bg-hover duration-300 cursor-pointer">
                <button className="flex flex-col items-center gap-5">
                    <Image 
                        className="w-[43px] h-auto"
                        src={IconWhatsApp}
                        alt="WhatsApp"
                    />

                    <p>Mande um WhatsApp</p>
                </button>
            </div>

            <div className="flex w-[288px] h-[166px] p-10 bg-white items-center justify-center hover:bg-bg-hover duration-300 cursor-pointer">
                <button className="flex flex-col items-center gap-5">
                    <Image 
                        className="w-[42px] h-auto"
                        src={Call}
                        alt="WhatsApp"
                    />
                    <p>0800 600 0920</p>
                </button>
            </div>
        </div>
    )
}