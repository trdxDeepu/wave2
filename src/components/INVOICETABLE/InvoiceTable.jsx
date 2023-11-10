/* eslint-disable react/prop-types */
import { BsPencil } from 'react-icons/bs'
import './styles.css'
import EditTable from '../../UI/Table/EditTable'


const InvoiceTable = ({userData,setUserData}) => {
  return (
    <div className='invoice_addItem'>
      <div className='invoice-add_customize-tab '>
        <span id='invoice-add-tab'>
          <BsPencil />
          <a href='#' id='edit_column_text'>
            Edit columns
          </a>
        </span>
      </div>
     <EditTable userData={userData} setUserData={setUserData}/>
    </div>
  )
}

export default InvoiceTable
