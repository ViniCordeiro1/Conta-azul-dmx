import { Container } from "./Container"
import Image from "next/image"
import SiteSeguro from "@/assets/site-seguro-1024x840-1.png"

export function SectionErp() {
    return (
        <section className="bg-backgrou-gray w-full py-[70px]">
            <Container>
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex w-full justify-center">
                        <h1 className="text-[42px] font-bold mb-10">
                            Um ERP <span className="text-primary-blue">simples </span> e <span className="text-primary-blue">seguro</span>
                        </h1>
                    </div>
                    <div className="flex w-[600px]">
                        <Image 
                            src={SiteSeguro}
                            alt="site seguro"
                        />
                    </div>
                    <div className="flex flex-col w-[540px] text-left">
                        <h2 className="text-[32px] font-bold mb-5 w-[450px] leading-tight">Livre-se das planilhas e assuma o controle da sua empresa, tudo na nuvem.</h2>

                        <p className="text-second-gray mb-5">Um ERP para gestão financeira com um poderoso ecossistema que transforma a relação das empresas com seus contadores e bancos.</p>

                        <p className="text-second-gray">ERP financeiro com funcionalidades essenciais para todo negócio: gestão de clientes, 
                            controle de vendas, emissão de NFs eletrônicas, automatização da cobrança, contratos
                            recorrentes, produtos e estoque, contas a pagar/receber, conciliação bancária com 
                            importação automática do extrato e integração direta com o contador.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}