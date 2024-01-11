import { Select } from 'antd'
import './styles.css'
import { HiOutlineExternalLink } from 'react-icons/hi'
import ButtonRounded from '../../UI/Button/ButtonRounded'

const CustomerStateMent = () => {
  const handleChange = value => {
    console.log(`selected ${value}`)
  }

  return (
    <section className='customer_section'>
      <div className='container'>
        <h1 className='customer_title'>Customer Statements</h1>
        <p className='customer_link'>
          <span className='coustomer_link_subtitle'>How does this Works?</span>
          <HiOutlineExternalLink color='gray' />{' '}
        </p>
      </div>
      <div className='customer_container'>
        <div className='customer_container_select'>
          <Select
            placeholder='Select Customer'
            style={{ width: 200 }}
            size='large'
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' }
            ]}
          />
          <Select
            // defaultValue='lucy'
            placeholder='Select Type'
            size='large'
            style={{ width: 200 }}
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' }
            ]}
          />
        </div>
        <ButtonRounded type='primary'>Create Statement</ButtonRounded>
      </div>

      <div className='customer_inform'>
        <img
          src='/assets/invoice.png'
          alt='Invoice Image'
          className='customer_image'
          height={120}
          width={120}
        />
        <h3 className='customer_info_title'>Keep customers informed</h3>
        <p className='customer_info_Sub_title'>
          Remind your customers about outstanding invoices or send details of
          their account activity. Create a statement by selecting a customer and
          statement type from the form above.
        </p>
      </div>
    </section>
  )
}

export default CustomerStateMent
