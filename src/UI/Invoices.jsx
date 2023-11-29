import React from 'react'
const InvoiceBody = React.lazy(() =>
  import('../components/INVOICEBODY/InvoiceBody')
)
const InvoiceBodyFrom = React.lazy(() =>
  import('../components/INVOICEFORMBODY/InvoiceFormBody')
)
const Footer = React.lazy(() => import('../components/../UI/Footer/Footer'))
const InvoiceHeader = React.lazy(() => import('./InvoiceHeader'))
import '../styles/invoices.css'

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
          <InvoiceBodyFrom />
          <Footer />
        </form>
      </div>
    </div>
  )
}

export default Invoices
