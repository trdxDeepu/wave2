
import '../styles/invoices.css'
import InvoiceHeader from './InvoiceHeader'
import InvoiceBody from '../components/INVOICEBODY/InvoiceBody'
import InvoiceFormBody from '../components/INVOICEFORMBODY/InvoiceFormBody'
import { Footer } from 'antd/es/layout/layout'

const Invoices = () => {
  // const { handleSubmit } = useFormContext()

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
          <InvoiceFormBody/>
          <Footer />
        </form>
      </div>
    </div>
  )
}

export default Invoices
