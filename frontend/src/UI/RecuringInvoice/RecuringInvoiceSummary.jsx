import { GrCircleInformation } from 'react-icons/gr'

const RecuringInvoiceSummary = () => {
  return (
    <div className='recuring_invoice_summary'>
      <div className='recuring_summary_container'>
        <div className='recuring_summary_container_rowStatus'>
          <div style={{ margin: '12px 0px' }}>
            <p className='wv-text'>Status</p>
          </div>
          <div>
            <span className='wv-badge-large wv-badge-muted'>Drafts</span>
          </div>
        </div>
        <div className='recuring_summary_container_customer'>
          <div style={{ margin: '12px 4px' }}>
            <p className='wv-text'>Customer</p>
          </div>

          <p className='wv-badge-large  recuring_invoice_customer_name'>
            name <GrCircleInformation size={13} className='info_icon' />
          </p>
        </div>
        <div className='recuring_summary_container_amount'>
          <div style={{ margin: '12px 4px' }}>
            <p className='wv-text '>Invoice amount</p>
          </div>
          <div>
            <span className='wv-badge-large recuring_invoice_customer_amount'>
              Rs 102
            </span>
          </div>
        </div>
        <div className='recuring_summary_container_date'>
          <div style={{ margin: '12px 4px' }}>
            <p className='wv-text '>Created to date</p>
          </div>
          <div>
            <span className='wv-badge-large recuring_invoice_customer_amount'>
              0 invoice
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecuringInvoiceSummary
