/* eslint-disable react/prop-types */
import { UserAddOutlined } from '@ant-design/icons'
import './styles.css'
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react'

const CustomerModal = ({ open, setOpen }) => {
  const [activeNav, setActiveNav] = useState('tab1')

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
                <div className='wvmodal'>
                  <div className='nav_items_nav'>
                    <ul className='nav_item_ul'>
                      <li
                        className={`nav_item_li ${activeNav==='tab1'?'active_li':''}`}
                        onClick={() => setActiveNav('tab1')}
                      >
                        Contact
                      </li>
                      <li
                       className={`nav_item_li ${activeNav==='tab2'?'active_li':''}`}
                        onClick={() => setActiveNav('tab2')}
                      >
                        Billing
                      </li>
                      <li
                           className={`nav_item_li ${activeNav==='tab3'?'active_li':''}`}
                        onClick={() => setActiveNav('tab3')}
                      >
                        Shipping
                      </li>
                      <li
                        className={`nav_item_li ${activeNav==='tab4'?'active_li':''}`}
                        onClick={() => setActiveNav('tab4')}
                      >
                        More
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='outlet'>
                  <div className='contact_outlet'>
                    {activeNav === 'tab1' && (
                      <>
                        <ContactTab />
                      </>
                    )}
                  </div>
                  <div className='bussiness_outlet'>
                    {activeNav === 'tab2' && (
                      <>
                        <BillingTab />
                      </>
                    )}
                  </div>
                  <div className='bussiness_outlet'>
                    {activeNav === 'tab3' && (
                      <>
                        <ShippingTab />
                      </>
                    )}
                  </div>
                  <div className='more_outlet'>
                    {activeNav === 'tab4' && (
                      <>
                        <MoreTab />
                      </>
                    )}
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

function ContactTab () {
  return (
    <>
      <h1>This is contact tab</h1>
    </>
  )
}

function BillingTab () {
  return (
    <>
      <h1>This is Billing tab</h1>
    </>
  )
}
function ShippingTab () {
  return (
    <>
      <h1>This is Shipping tab</h1>
    </>
  )
}

function MoreTab () {
  return (
    <>
      <h1>This is More tab</h1>
    </>
  )
}
