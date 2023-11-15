import ButtonRounded from '../../../../../UI/Button/ButtonRounded'
import StepBadge from '../../../../../UI/StepBadge/StepBadge'
import RecuringSelection from '../../../../RecuringSelection/RecuringSelection'
import { useState } from 'react'

const RecuringBoxHeader = () => {
  const [data, setData] = useState([])

  return (
    <div className='wv-box wv-workflow__task is-highlighted'>
      <div className='wv-box_content'>
        <div className='recuring_invoice-section'>
          <div className='recuring_invoice_create_box_option'>
            <StepBadge />
            <div className='recuring_invoice_create_box_info'>
              <div className='recuring_invoice_create_box_info_label'>
                <p className='wv-heading--subtitle'>
                  <span>Set Schedule</span>
                </p>
              </div>
            </div>
            <span className='recuring_invoice_create_box_info_button'>
              <ButtonRounded size='small'>Next</ButtonRounded>
            </span>
          </div>
          <span>
            <div className='wv-content'>
              <div className='wv-content_primary'>
                <div className='schedule_setting_container'>
                  <RecuringSelection data={data} setData={setData} />
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RecuringBoxHeader
