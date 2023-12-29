import { Image } from 'antd'

const LeftSection = () => {
  return (
    <div className='left-container'>
      <div className='left-container-div'>
        <Image
          src='/credit-cards.png'
          alt='credit-card-png'
          className='image-container'
          preview={false}
          width={230}
          height={200}
        />
        <div className='text-container'>
          <span>Get paid like the pros.</span>
        </div>
        <span
          style={{
            fontSize: '19px',
            marginTop: '10px'
          }}
        >
          Give your customers every way to pay with Wave Payments.
        </span>
        <div className='ul-parent-div'>
          <ul className='ul-text'>
            <li className = 'li_text'>
              {' '}
              <Image
                preview={false}
                src='/tick.png'
                alt='tickpng'
                className='tick-png'
                height={20}
                width={20}
              />{' '}
              <span>Add a secure &quot;Pay now&quot; button to invoices.</span>
            </li>
            <li className = 'li_text'>
              {' '}
              <Image
                preview={false}
                src='/tick.png'
                alt='tickpng'
                className='tick-png'
                height={20}
                width={20}
              />
              <span>Accept credit cards, bank transfers, or Apple Pay.</span>
            </li>
            <li className='li_text'>
              {' '}
              <Image
                preview={false}
                src='/tick.png'
                alt='tickpng'
                className='tick-png'
                height={20}
                width={20}
              />
              <span>Get paid in 1-2 business days.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
