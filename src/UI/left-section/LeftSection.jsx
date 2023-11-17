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
          width={200}
          height={200}
        />
        <div className='text-container'>
          <span>Get paid like the pros.</span>
        </div>
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '19px'
          }}
        >
          <span>Give your customers every way to pay with</span>
          <span style={{ textAlign: 'center' }}> Wave Payments.</span>
        </span>
        <div className='ul-parent-div'>
          <ul className='ul-text'>
            <li>
              {' '}
              <Image
                preview={false}
                src='/tick.png'
                alt='tickpng'
                className='tick-png'
                height={25}
                width={25}
              />{' '}
              Add a secure &quot;Pay now&quot; button to invoices.
            </li>
            <li>
              {' '}
              <Image
                preview={false}
                src='/tick.png'
                alt='tickpng'
                className='tick-png'
                height={25}
                width={25}
              />
              Accept credit cards, bank transfers, or Apple Pay.
            </li>
            <li>
              {' '}
              <Image
                preview={false}
                src='/tick.png'
                alt='tickpng'
                className='tick-png'
                height={25}
                width={25}
              />
              Get paid in 1-2 business days.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
