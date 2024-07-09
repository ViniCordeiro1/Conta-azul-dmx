export function Form() {
    return (
        <form className=" flax-1 max-w-[450px] my-5 ">
        <div className="flex pb-5">
            <input type="email" name="email" placeholder="Seu-email" className=" h-[55px] w-100%] px-2.5 rounded-[5px] border-solid border-[1px] border-second-gray"/>
            <button className="h-[55px] w-[100%] px-10 bg-primary-green text-sm text-white rounded-[5px]">Experimente Grátris</button>
        </div>
        <input className="mr-1" type="checkbox"/>
        <label className="text-sm text-second-gray">
        Concordo com a 
        <a className="text-primary-blue text-sm" title="Política de Privacidade" href="https://ca.contaazul.com/termos/privacidade/?_ga=2.209904273.54477621.1690375421-388926672.1690220393" 
        target="_blank"> Política de Privacidade.</a>
        </label>
    </form>
    )
}