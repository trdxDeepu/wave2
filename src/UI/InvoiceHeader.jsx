import InvoiceBody from '../components/INVOICEBODY/InvoiceBody'
import InvoiceBodyFrom from '../components/INVOICEFORMBODY/main'
import '../styles/invoiceheader.css'
import RoundButton from '../UI/roundedbutton/RoundButton'
import Footer from './Footer/Footer'

const InvoiceHeader = () => {
  return (
    <div className='invoice-header'>
      <div className='frame_content_body'>
        <div className='advisor_content'></div>
        <div className='frame_body_side'></div>
        <div className='frame_body_main'>
          {' '}
          {/* in this add the body component also */}
          <div className='frame-body'>
            <div className='invoice_add'>
              {/* we can put modal also in this div */}
              <div className='invoide_add_header'>
                <div className='add_header'>
                  <div className='add_header_title'>
                    <h1>New Invoice</h1>
                  </div>
                  <div className='add_header_action'>
                    <RoundButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InvoiceBody />
          <InvoiceBodyFrom />
          <Footer/>
        </div>
      </div>
    </div>
  )
}
export default InvoiceHeader
