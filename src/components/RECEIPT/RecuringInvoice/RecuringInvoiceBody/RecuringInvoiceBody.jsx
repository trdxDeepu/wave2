import ButtonRounded from '../../../../UI/Button/ButtonRounded'
import StepBadge from '../../../../UI/StepBadge/StepBadge'
import RecuringBoxHeader from './recuring_box_header/RecuringBoxHeader'
import './recuringinvoicebody.css'

const RecuringInvoiceBody = () => {
  return (
    <div className='recuring_invoice_body'>
      <div className='wv-workflow wv-workflow__task'>
        <div>
          <div className='wv-box_content'>
            <div className='recuring_invoice_create_section'>
              <div className='recuring_invoice_create_box'>
                <div className='recuring_invoice_create_box_option'>
                  <StepBadge checked='true' />
                  {/* creating body here of recuring invoice */}
                  <div className='recuring_invoice_create_box_info'>
                    <div className='recuring_invoice_create_box_info_label'>
                      <p className='wv-heading--subtitle'>
                        <span>Create invoice</span>
                      </p>
                    </div>
                  </div>
                  <span className='recuring_invoice_create_box_info_button'>
                    <ButtonRounded size='medium'>Edit</ButtonRounded>
                  </span>
                </div>
              </div>
            </div>
            <div className='recuring_invoice_create_content_box'>
              <div className='recuring_invoice_create_content '>
                <p>
                  <strong className='wv-text-strong'>Created on : </strong>
                  <span>14 November 2023</span>
                </p>
              </div>
              <div className='recuring_invoice_create_content '>
                <p>
                  <strong className='wv-text-strong'>Payment terms : </strong>
                  <span>On Receipt</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecuringBoxHeader />
    </div>
  )
}

export default RecuringInvoiceBody
