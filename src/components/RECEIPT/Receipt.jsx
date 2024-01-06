/* eslint-disable no-unused-vars */
import { useState } from 'react'
import InvoiceHeader from '../../UI/InvoiceHeader'
// import { GrCircleInformation } from 'react-icons/gr'
import './receipt.css'

import RecuringInvoiceSummary from '../../UI/RecuringInvoice/RecuringInvoiceSummary'
import RecuringInvoiceBody from '../../UI/RecuringInvoiceBody/RecuringInvoiceBody'

const Receipt = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      <div className='invoice-header'>
        <div className='frame_content_body'></div>
        <InvoiceHeader show={show} />
        <div className='hr-line'></div>
        <RecuringInvoiceSummary />
        <RecuringInvoiceBody />
      </div>
    </>
  )
}

export default Receipt
