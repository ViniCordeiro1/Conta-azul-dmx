import { Container } from "./Container";

export function SectionSegments() {
    return (
        <section className="flex w-full h-[673px] bg-backgrou-gray py-[70px]">
            <Container>
                <div>
                    <h2 className="text-[42px] font-bold pb-5"><span className="text-primary-blue">Segmentos</span> Variados</h2>
                    <p className="text-second-gray">Atuamos em muitos segmentos. Deixa a Conta Azul te ajudar! Qual o seu perfil de negócio?</p>
                </div>
            </Container>
        </section>
    )
}