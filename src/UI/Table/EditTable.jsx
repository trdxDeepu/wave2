import { Input, Select } from 'antd'
import './styles.css'
import { RiDraggable } from 'react-icons/ri'
import {
  AiOutlineDelete,
  AiOutlineMinus,
  AiOutlinePlusCircle
} from 'react-icons/ai'
import { useState } from 'react'
import CurrencySelector from '../../components/currencySelector/CurrencySelector'

const EditTable = () => {
  const [data, setData] = useState([
    {
      key: '1',
      item: '',
      description: '',
      quantity: 1,
      price: 0.0,
      amount: 0.0
    }
  ])

  function handleChange (e, field, index) {
    let newData = [...data]
    newData[index][field] = e.target.value
    setData(newData)
    console.log(data)
  }

  function handleAddmore () {
    const newData = [...data]
    newData.push({
      key: `${data.length + 1}`,
      item: '',
      quantity: 0,
      price: 0,
      amount: 0
    })

    setData(newData)
  }

  const handleDeleteRow = key => {
    const newData = [...data]
    const index = newData.findIndex(item => key === item.key)
    newData.splice(index, 1)
    setData(newData)
  }

  return (
    <>
      <div className='table_container'>
        <table className='table_tab'>
          <thead className='header_table'>
            <tr
              style={{
                height: '34px',
                fontSize: '16px'
              }}
            >
              <td style={{ width: '40px' }} colSpan='1'></td>
              <td style={{ width: '200px' }}>Items</td>
              <td style={{ width: '342px' }}></td>
              <td style={{ width: '90px' }}>Quantity</td>
              <td style={{ width: '90px' }}>Price</td>
              <td style={{ width: '140px' }}>Amount</td>
              <td style={{ width: '40px' }}></td>
            </tr>
          </thead>
          <tbody id='body_of_table'>
            {data.map((item, index) => {
              return (
                <>
                  <tr
                    style={{
                      marginTop: '20px'
                    }}
                    className='body_row'
                    key={index}
                  >
                    <td style={{ width: '40px' }}>
                      <RiDraggable
                        style={{
                          textAlign: 'center',
                          marginTop: '17px',
                          fontSize: '18px'
                        }}
                      />
                    </td>
                    <td colSpan='7'>
                      <div className='row_container'>
                        <div className='item_inputs'>
                          <Input
                            type='text'
                            placeholder='Enter item name'
                            style={{ width: '185px' }}
                            name='item'
                            value={item.item}
                            size='large'
                            onChange={e => handleChange(e, 'item', index)}
                          />
                          <Input
                            type='text'
                            placeholder='Enter item name'
                            style={{ width: '295px' }}
                            size='large'
                            value={item.description}
                            onChange={e =>
                              handleChange(e, 'description', index)
                            }
                          />
                        </div>
                        <div className='quantity_price'>
                          <Input
                            type='text'
                            style={{ width: '90px', textAlign: 'right' }}
                            size='large'
                            value={item.quantity}
                            onChange={e => handleChange(e, 'quantity', index)}
                            inputMode='numeric'
                          />
                          <Input
                            type='text'
                            style={{ width: '90px', textAlign: 'right' }}
                            size='large'
                            value={item.price}
                            onChange={e => handleChange(e, 'price', index)}
                            inputMode='numeric'
                          />
                        </div>
                        <div className='amount'>
                          <span
                            style={{
                              fontSize: '16px',
                              color: 'black',
                              textAlign: 'right'
                            }}
                          >
                            $0.00
                          </span>
                          <AiOutlineDelete
                            size='20px'
                            id='delete_icon'
                            onClick={() => handleDeleteRow(item.key)}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr id='second_row'>
                    <td style={{ width: '40px' }}></td>
                    <td colSpan='7'>
                      <div className='container'>
                        <div className='left-container'>
                          <a href='' id='anchor_link_edit'>
                            Edit income amounts
                          </a>
                        </div>
                        <div className='right-container'>
                          <p className='span_text'>
                            <span
                              style={{
                                fontSize: '16px',
                                fontWeight: '600'
                              }}
                            >
                              Tax
                            </span>
                            <p
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '20px'
                              }}
                            >
                              <Select
                                id='input_select'
                                placeholder='Select Item'
                              />

                              <p
                                style={{
                                  marginLeft: '60px'
                                }}
                              >
                                <AiOutlineMinus />
                              </p>
                            </p>
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              )
            })}
            <tr>
              <td colSpan='7'>
                <div className='dynamic_button' onClick={handleAddmore}>
                  <button className='button_add' onClick={handleAddmore}>
                    <span>
                      <AiOutlinePlusCircle />
                    </span>
                    <span style={{ fontSize: '16px' }}>Add more</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <section className='invoice-add-totals'>
          <div className='invoice-add-totals_amount'>
            <div className='invoice-add-totals_label'>
              <p className='wv-text--inline'> Subtotal</p>
            </div>
            <div className='invoice-add-totals_label_amount'>
              <p className='wv-text--inline'>$0.00</p>
            </div>
          </div>
          <div className='invoice-add-totals_amount invoice_btn'>
            <span>
              <AiOutlinePlusCircle />
            </span>
            <span style={{ fontSize: '16px' }} id='amount_span'>
              Add more
            </span>
          </div>
          <div className='select_currency'>
            Total
            <CurrencySelector />
            <p className='wv-text-currency'>$0.00</p>
          </div>
        </section>
        <div className='invoice-memo'>
          <p className='invoice-memo-text'>Notes / Terms</p>
          <textarea
            name=''
            id=''
            style={{ width: '100%', border: 'none',fontSize:'15px' }}
            className='text-area'
            placeholder='Enter notes or terms of service that are visible to your customer'
          ></textarea>
        </div>
      </div>
    </>
  )
}

export default EditTable
