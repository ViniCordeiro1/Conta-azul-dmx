import { CarouselSegmentos } from "./CarouselSegmentos";
import { Container } from "../Container";

export function SectionSegments() {
    return (
        <section className="flex flex-wrap w-full bg-backgrou-gray py-[70px]">
            <Container>
                <div className="w-[1200px] flex flex-col">
                    <h2 className="text-[42px] font-bold pb-5"><span className="text-primary-blue">Segmentos</span> Variados</h2>
                    <p className="text-second-gray pb-5">Atuamos em muitos segmentos. Deixa a Conta Azul te ajudar! Qual o seu perfil de negócio?</p>
                    <CarouselSegmentos />
                </div>
            </Container>
                
                

        </section>
    )
}