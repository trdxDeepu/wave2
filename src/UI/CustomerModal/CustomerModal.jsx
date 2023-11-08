

import { UserAddOutlined } from '@ant-design/icons'
import './styles.css'
import { RxCross1 } from 'react-icons/rx'

const CustomerModal = ({ open, setOpen }) => {
  return (
    <>
      <div className='user-icon' onClick={() => setOpen(!open)}>
        <UserAddOutlined style={{ fill: 'lightgray', fontSize: '26px' }} />
        <span className='user-icon-text'>Add a customer</span>
      </div>
      {open && (
        <div className='modal-window'>
          <div className={`${open ? 'modal-window-open' : ''}`}>
            <div className='dialog-box'>
              <div className='dialog-header'>
                <h1 className='dialog-header_title'>New Customers</h1>
                <span id='icon_cross'>
                  <RxCross1 onClick={() => setOpen(!open)} />
                </span>
              </div>
              <div className='hr_line'></div>
              <div className='nav_items'>
                <div className="wvmodal">
                <div className="wvmoda_nav">

                <div className="nav_items_nav">
                <ul className='nav_item_ul'>
                  <li id='nav_item_li'>Contact</li>
                  <li id='nav_item_li'>Billing</li>
                  <li id='nav_item_li'>Shipping</li>
                  <li id='nav_item_li'>More</li>
                </ul>

                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CustomerModal
 

