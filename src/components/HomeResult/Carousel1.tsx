/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react';

interface CarouselModel {
  url: string;
  text: string;
  header: string;
  active: boolean;
}

const carousels: CarouselModel[] = [
  { url: '/escale.png', header: 'Escale seu negócio mantendo as finanças organizadas', text: 'Um sistema com informações centralizadas, conciliando rotinas burocráticas com relatórios de saúde do negócio, tendo uma melhor previsibilidade de lucros e clareza na tomada de decisão. Backups automáticos de maneira recorrente e otimizada, com toda segurança de dados.', active: true },
  { url: '/envio.png', header: 'Boleto, Pix Cobrança ou cartão de crédito via link', text: 'Envie a cobrança para seus clientes por boleto registrado, Pix Cobrança ou cartão de crédito (via link). Integrado ao ERP e ao aplicativo Conta Azul de Bolso, você escolhe o meio de recebimento e envia para seu cliente por e-mail ou WhatsApp.', active: true },
  { url: '/contasPagar.png', header: 'Controle compras e contas a pagar da sua empresa, sem dor de cabeça', text: 'Ganhe tempo no controle de gastos de sua empresa, evite multas e atrasos no pagamento de fornecedores', active: true },
  { url: '/emissao.png', header: 'Simplifique a emissão das suas notas fiscais e eletrônicas', text: 'Gerenciando seu negócio com ERP Conta Azul Pro, você ganha tempo e evita retrabalho emitindo suas notas fiscais a partir das vendas, sem a necessidade de digitar novamente produtos, serviços e dados do cliente nos portais do governo.', active: true },
  { url: '/contratos.png', header: 'Mais agilidade na gestão dos seus contratos', text: 'Basta informar o cliente, o dia do mês que a cobrança deve ser feita, a vigência do contrato, os serviços oferecidos e pronto. A Cobrança e Nota fiscal são enviados automaticamente todos os meses.', active: true },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carousels.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carousels.length - 1 : prevIndex - 1));
  };



  return (
    <div className="relative flex lg:w-[1200px] md:w-[928px] sm:w-[608px] w-[350px] lg:h-[450px] md:h-[343px] sm:h-[705px] h-[617px]  md:mt-[70px] overflow-hidden justify-center items-center">
      <div className="absolute inset-0 flex  transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {carousels.map((carousel, index) => (
          
          <div key={index} className="flex w-[1200px] flex-shrink-0">
              {carousel.active && (
                <div className="flex lg:w-[45%] md:w-[399px] md:mr-[68px] items-center">
                  <div className="absolute lg:w-[516px] md:w-[399px] sm:w-[608px] lg:top-1/2 md:top-1/2 sm:top-[550px] top-[430px]   transform -translate-y-1/2">
                    <h2 className='text-2xl font-bold mb-5'>{carousel.header}</h2>
                    <p className=' text-second-gray mb-5 '>{carousel.text}</p>
                    <a href="" className='flex gap-2 text-primary-blue'>Teste Gratuitamente 
                        <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="1 -5 15 35">
                        <g fill="none" stroke="#2687e9" stroke-linecap="round" stroke-width="2"><path stroke-miterlimit="10" d="M4 12h16"/>
                        <path stroke-linejoin="round" d="M11.033 4.34L4.46 10.911a1.53 1.53 0 0 0 0 2.176l6.573 6.573"/></g>
                        </svg>
                      </a>
                  </div>
                </div>
            )}
            <div className="md:mb-[30px] sm:mb-0">
              <img
                src={carousel.url}
                alt={carousel.text}
                className="lg:w-[616px] md:w-[460px] sm:w-[608px] w-[350px]"
              />
            </div>

          </div>
        ))}
      </div>
      <div className="block md:fixed top-[55%]">
        <button onClick={prevSlide} className="absolute lg:-left-[700px] sm:hidden md:hidden hidden transform -translate-y-1/2">
        <svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#666666" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"></polyline></svg>
        </button>
        <button onClick={nextSlide} className="absolute lg:-right-[700px] sm:hidden md:hidden hidden  transform -translate-y-1/2 ">
        <svg className='rotate-180' width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#666666" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"></polyline></svg>
        </button>

      </div>
    </div>
  );
};

export default Carousel;
