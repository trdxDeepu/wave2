import InvoiceBody from '../components/INVOICEBODY/InvoiceBody'
import InvoiceBodyFrom from '../components/INVOICEFORMBODY/main'
import Footer from '../UI/Footer/Footer'
import InvoiceHeader from './InvoiceHeader'
import '../styles/invoices.css'

const Invoices = () => {
  return (
    <div className='invoice-header'>
      <div className='frame_content_body'></div>
      <div className='frame_body_main'>
        <form>
          <div className='frame-body'>
            <div className='invoice_add'>
              {/* we can put modal also in this div */}
              <InvoiceHeader />
            </div>
          </div>

          <InvoiceBody />
          <InvoiceBodyFrom />
          <Footer />
        </form>
      </div>
    </div>
  )
}

export default Invoices
