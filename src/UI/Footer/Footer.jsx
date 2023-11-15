import InvoiceBody from '../../components/INVOICEBODY/InvoiceBody'
import DropDownButton from '../roundedbutton/DropDownButton'

const Footer = () => {
  return (
    <>
      <InvoiceBody showTextArea />
      <DropDownButton>Save and Continue</DropDownButton>
    </>
  )
}
export default Footer
