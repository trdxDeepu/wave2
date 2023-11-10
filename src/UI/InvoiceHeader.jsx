
import InvoiceBody from '../components/INVOICEBODY/InvoiceBody'
import InvoiceBodyFrom from '../components/INVOICEFORMBODY/main'
import '../styles/invoiceheader.css'
import RoundButton from './roundedbutton/DropDownButton'
import Footer from './Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { updateForm } from '../store/formSlice'
import DropDownButton from './roundedbutton/DropDownButton'

const InvoiceHeader = () => {


  

  const dispatch = useDispatch()

  const formData = useSelector(state => state.users.formData)
console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateForm(formData))
 
  }



  return (
    <div className='invoice-header'>
    <div className='frame_content_body'></div>
        <div className='frame_body_main'>
      
          <form onSubmit={handleSubmit}>
            <div className='frame-body'>
              <div className='invoice_add'>
                {/* we can put modal also in this div */}
                <div className='invoide_add_header'>
                  <div className='add_header'>
                    <div className='add_header_title'>
                      <h1>New Invoice</h1>
                    </div>
                    <div className='add_header_action'>
                      <DropDownButton/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/*   <InvoiceBody userData={userData} setUserData={setUserData} />
            <InvoiceBodyFrom userData={userData} setUserData={setUserData} /> */}
             <InvoiceBody  />
            <InvoiceBodyFrom   /> 
            <Footer />
          </form>
        </div>
        </div>
      
  )
}

export default InvoiceHeader
