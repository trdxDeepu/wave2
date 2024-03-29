import '../styles/recuringInvoice.css'
import ButtonRound from '../UI/Button/ButtonRounded'
import credtCard from '/assets/card-payment.svg'
import jar from '/assets/availability.svg'
import money from '/assets/invoice.svg'
import SRK from '/SRK.jpg'
import tube from '/assets/customer-service.svg'
import bulb from '/assets/creative-team.svg'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { Image } from 'antd'

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
            <Link to='/receipts'>
              <ButtonRound type='primary'>
                Create a recurring invoice
              </ButtonRound>
            </Link>
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
          <div className='recuring_list_wrapper_column '>
            <img
              src={credtCard}
              alt='A credi card Svg'
              width={120}
              height={90}
            />
            <h3 className='recuring_list_wrapper_column_heading '>
              Automatic payments
            </h3>
            <p className='recuring_list_wrapper_column_para'>
              Securely save your customer’s credit card to get paid instantly.
            </p>
          </div>
          <div className='recuring_list_wrapper_column '>
            <img src={jar} alt='A Money Svg' width={80} height={90} />
            <h3 className='recuring_list_wrapper_column_heading '>
              Customizable scheduling
            </h3>
            <p className='recuring_list_wrapper_column_para'>
              You’re in control. Your customers get your invoices exactly when
              you want them to.
            </p>
          </div>
          <div className='recuring_list_wrapper_column'>
            <img src={money} alt='A credi card Svg' width={130} height={90} />
            <h3 className='recuring_list_wrapper_column_heading '>
              Automated accounting
            </h3>
            <p className='recuring_list_wrapper_column_para'>
              We keep track of all your transactions and make tax-season a
              breeze.
            </p>
          </div>
        </div>
        <div className='recuring_list_context'>
          <div className='content-right'>
            <p className=' text_primary'>
              I can set up a recurring invoice and literally just send the link,
              and they pay it on the spot. It’s helping me run my business and
              it’s painless for clients. It’s a win-win.
            </p>
            <p className='text_primary text_primary_name'>
              <strong>Sharukh Khan</strong>
            </p>
            <p className=' text_primay text_primay_name'>
              Continue, Digital Marketing
            </p>
          </div>
          <div className='secondary-left'>
            <Image
              preview={false}
              src={SRK}
              alt='SRK image'
              height={100}
              width={100}
              style={{
                borderRadius: '100px',
                border:'1px solid black',
                objectFit:'fill'
              }}
              // className='secondary-left-image'
            />
          </div>
        </div>
        <div className='recuring_list_wrapper2'>
          <div className='recuring_list_icon'>
            <img src={tube} alt='Tube image' width={64} height={64} />
          </div>
          <div className=''>
            <h3 className='recuring_list_wrapper_column_title'>
              Support when you need it
            </h3>
            <p className='wv-text-column'>
              When you activate Payments, you get access to a real, live
              customer support agent. Chat or email.
              <strong> Monday to Friday from 9 AM to 5 PM EST.</strong>
            </p>
            <ButtonRound size='medium'>Contact Support</ButtonRound>
            <a href='#' target='_blank' className='internal_link'>
              {' '}
              How does Wave support work?{' '}
              <span className='sr-only'>
                <HiOutlineExternalLink style={{ color: '#718fa2' }} />
              </span>
            </a>
          </div>
          <div className='recuring_list_icon'>
            <img src={bulb} alt='Tube image' width={64} height={64} />
          </div>
          <div>
            <h3 className='recuring_list_wrapper_column_title'>
              Advisors at your service
            </h3>
            <p className='wv-text-column'>
              Our bookkeeping and accounting experts can coach you—or do the
              work for you—during the year, when you’re closing year-end, or at
              tax time.
            </p>
            <ButtonRound size='medium'>Book a free consultation</ButtonRound>
            <a href='#' target='_blank' className='internal_link'>
              {' '}
              Learn more about Wave Advisors{' '}
              <span className='sr-only'>
                <HiOutlineExternalLink style={{ color: '#718fa2' }} />
              </span>
            </a>
          </div>
        </div>
        <div className='recuring_list_footer'>
          <p className='wv-text wv-text_footer'>
            <strong className='strong_text'>
              Stop chasing clients and get paid faster today
            </strong>
          </p>
          <div className='recuring_list_secondary'>
            <Link to='/receipts'>
              <ButtonRound type='primary'>
                Create a recurring invoice
              </ButtonRound>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecuringInvoice
