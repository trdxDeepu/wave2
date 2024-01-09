/* eslint-disable react/prop-types */
import { Flex } from 'antd'
import ButtonRounded from './Button/ButtonRounded'
import DropDownButton from './roundedbutton/DropDownButton'

const InvoiceHeader = ({ show }) => {
  return (
    <div className='invoide_add_header'>
      <div className='add_header'>
        <div className='add_header_title'>
          <h1>New Invoice</h1>
        </div>
        <div className='add_header_action'>
          {show ? (
            <Flex style={{ gap: '20px' }}>
              <ButtonRounded size='medium' dropdown='true'>
                More Action
              </ButtonRounded>
              <ButtonRounded size='medium'>
                Create another recuring invoices
              </ButtonRounded>
            </Flex>
          ) : (
            <DropDownButton>Save and continue</DropDownButton>
          )}
        </div>
      </div>
    </div>
  )
}

export default InvoiceHeader
