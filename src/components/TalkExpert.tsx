import { Container } from "./Container";
import Image from "next/image";
import Atendente from "@/assets/atendente.webp"
import { TalkButton } from "./TalkButton";

export function TalkExpert() {
    return (
        <section className="w-full  py-[70px] bg-backgrou-gray">
            <Container>
                <div className="flex flex-wrap gap-10 items-center">
                    <div className="">
                        <Image
                            className="w-[580px] h-[387px] " 
                            src={Atendente}
                            alt="Atentende"
                        />
                    </div>
                    <div className="flex flex-col w-[502px]">
                        <h2 className="font-bold text-[42px] leading-tight mb-5">Tem dúvidas de como a Conta Azul <br/>pode 
                            <span className="text-primary-blue"> ajudar o seu negócio?</span>
                        </h2>
                        <p className="text-second-gray mb-5">Fale com nosso time de especialistas e tire todas as suas dúvidas</p>
                        <a className="text-primary-blue" href="">Falar com um especialista</a>
                    </div>
                    <div className="flex flex-1 justify-center">
                        <TalkButton />
                    </div>
                </div>
            </Container>
        </section>
    )
}