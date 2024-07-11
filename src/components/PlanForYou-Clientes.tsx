import { Container } from "./Container"
import Image from "next/image"
import Mapa from "@/assets/mapa2.png"

export function PlanForYouClientes () {
    return (
        <section className="w-full py-[70px]  bg-backgrou-gray">
            <Container>
                <div className="flex flex-1 flex-wrap justify-between items-center">
                    <div className="w-[585] h-[151px]">
                        <h2 className="text-[42px] font-bold leading-tight">Já ajudamos <br/><span className="text-primary-blue">milhares de clientes</span> <br/>no Brasil todo!</h2>
                    </div>
                    <div className="w-[526px]">
                        <Image 
                            src={Mapa}
                            alt="Mapa"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}