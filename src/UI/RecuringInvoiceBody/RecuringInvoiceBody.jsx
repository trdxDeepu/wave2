
import ButtonRounded from '../Button/ButtonRounded'
import StepBadge from '../StepBadge/StepBadge'
import RecuringBoxHeader from '../recuring_box_header/RecuringBoxHeader'
import './recuringinvoicebody.css'

const RecuringInvoiceBody = () => {
  return (
    <div className='recuring_invoice_body'>
      <div className='wv-workflow wv-workflow__task'>
        <div>
          <div className='wv-box_content'>
            <div className='recuring_invoice_create_section'>
              <div className='  '>
                <div className='recuring_invoice_create_box_option'>
                  <StepBadge checked='true' boxNumber='2' />
                  {/* creating body here of recuring invoice */}
                  <div className='recuring_invoice_create_box_info'>
                    {/* <div className='recuring_invoice_create_box_info_label'> */}
                      <p className='wv-heading--subtitle'>
                        Create invoice
                      </p>
                    {/* </div> */}
                  </div>
                  <span className='recuring_invoice_create_box_info_button'>
                    <ButtonRounded >Edit</ButtonRounded>
                  </span>
                </div>
              </div>
            </div>
            <div className='recuring_invoice_create_content_box'>
              <div className='recuring_invoice_create_content '>
                <p>
                  <span className='wv-text-strong'>Created on : </span>
                  <span>14 November 2023</span>
                </p>
              </div>
              <div className='recuring_invoice_create_content '>
                <p>
                  <span className='wv-text-strong'>Payment terms : </span>
                  <span>On Receipt</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecuringBoxHeader />
      <div className='wv-box wv-workflow  wv-workflow__task  wv-box--grey '>
        <div className='wv-box_content'></div>
        <div className='recuring_invoice_create_section'>
          <div className='flex_container_toCenter '>
            <StepBadge disabled='true' boxNumber='3' />
            <div className='recurring-invoice-flex-content-area'>
              <div className='flex-container--with-centering'>
                <div className='get_paid_header'>
                  <p className='wv-heading--subtitle'>Get Paid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='wv-box wv-workflow__task  wv-box--grey '>
        <div className='wv-box_content'></div>
        <div className='recuring_invoice_create_section'>
          <div className='flex_container_toCenter '>
            <StepBadge disabled='true' boxNumber='4' />
            <div className='recurring-invoice-flex-content-area'>
              <div className='flex-container--with-centering'>
                <div className='get_paid_header'>
                  <p className='wv-heading--subtitle'>Send</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecuringInvoiceBody
