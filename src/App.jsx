import ButtonPrimary from './components/ButtonPrimary'
import InputText from './components/InputText'
import creditCard from './assets/credit-card.png'

function App() {

  return (
    <div>
      <div className='bg-gray-800 w-full p-10 rounded-lg border border-gray-700'>
        <div className='flex md:flex-row flex-col'>
          <div className='flex flex-col gap-5'>
            <InputText name="num_card" type="text" placeholder="Número do cartão" label="Número do cartão" width="100%" />
            <InputText name="name_holder" type="text" placeholder="Nome como está no cartão" label="Nome do titular" width="100%" />
            <div className='flex gap-9'>
              <InputText name="validate" type="date" placeholder="" label="Validade" width="10rem" />
              <InputText name="cvv" type="password" placeholder="***" label="CVV" width="10rem" />
            </div>
          </div>
          <div className='text-center text-white'>
            <img src={creditCard} />
            <p>Seus dados estão seguros</p>
            <br />
          </div>
        </div>
        <div>
          <ButtonPrimary text="Adicionar cartão" />
        </div>
      </div>
    </div>
  )
}

export default App
