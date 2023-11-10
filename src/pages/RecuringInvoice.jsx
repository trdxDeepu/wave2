import '../styles/recuringInvoice.css'
import ButtonRound from '../UI/Button/ButtonRounded'
import credtCard from '../assets/creditcard.svg'
import jar from '../assets/jar.svg'
import money from '../assets/money.svg'

const RecuringInvoice = () => {
  return (
    <div className='fram_content_wrapper'>
      <div className='recuring_list'>
        <div className='grid_container'>
          <div className='recuring_list_heading'>
            <p className='title_heading'>Recuring Invoice</p>
            <h1 className='recuring_list_heading_header'>
              Get paid without lifting a finger
            </h1>
            <p className='title-description'>
              Automate your recurring invoices quickly, easily, and reliably —
              all in one place.
            </p>

            <ButtonRound size='large'>Create a recurring invoice</ButtonRound>
          </div>
          <div className='image'>
            <img
              src='https://illustrations.waveapps.com/2.11.0/spots/lp-recurring-invoices.png'
              alt='A person standing happily in front of a software interface as money flows from their hands'
              width={380}
              height={300}
              className='wv-image'
            />
          </div>
        </div>
        <div className='recuring_list_wrapper'>
          <div className='recuring_list_wrapper_column wv-text'>
            <img
              src={credtCard}
              alt='A credi card Svg'
              width={120}
              height={90}
            />
            <h3 className='recuring_list_wrapper_column_heading wv-text '>
              Automatic payments
            </h3>
            <p className='recuring_list_wrapper_column_para'>
              Securely save your customer’s credit card to get paid instantly.
            </p>
          </div>
          <div className='recuring_list_wrapper_column wv-text'>
            <img src={jar} alt='A Money Svg' width={80} height={90} />
            <h3 className='recuring_list_wrapper_column_heading wv-text'>
              Customizable scheduling
            </h3>
            <p className='recuring_list_wrapper_column_para'>
              You’re in control. Your customers get your invoices exactly when
              you want them to.
            </p>
          </div>
          <div className='recuring_list_wrapper_column wv-text'>
            <img src={money} alt='A credi card Svg' width={130} height={90} />
            <h3 className='recuring_list_wrapper_column_heading wv-text '>
              Automated accounting
            </h3>
            <p className='recuring_list_wrapper_column_para'>
              We keep track of all your transactions and make tax-season a
              breeze.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecuringInvoice
