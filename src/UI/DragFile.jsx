/* import ImgCrop from 'antd-img-crop'
import { InboxOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import { useState } from 'react'
const { Dragger } = Upload

const DragFile = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ])
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }
  const onPreview = async file => {
    let src = file.url
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  return (
    <div className='add_presentation'>
      <ImgCrop rotationSlider>
        <Upload.Dragger
          action={'http://localhost:5173/'}
          onChange={onChange}
          onPreview={onPreview}
          listType='picture-circle'
          accept='.jpeg,.png'
        >
          {fileList.length === 0 ? (
            <>
              <p className='ant-upload-drag-icon'>
                <InboxOutlined />
              </p>
              <p className=''>
                <span
                  style={{
                    color: 'blue',
                    fontWeight: 700,
                    wordSpacing: '40px',
                    letterSpacing: '1.5px'
                  }}
                >
                  Browse
                </span>
                <span>or drop your logo here.</span>
              </p>
              <p className='ant-upload-hint'>
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </>
          ) : (
            <>
              <img src={onPreview}/>
            </>
          )}
        </Upload.Dragger>
      </ImgCrop>
    </div>
  )
}

export default DragFile
 */

import React, { useState } from 'react'
import { LoadingOutlined, CloudTwoTone } from '@ant-design/icons'
import { message, Upload, Image } from 'antd'
import ImgCrop from 'antd-img-crop'
const getBase64 = (img, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
const beforeUpload = file => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 2048 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}
const App = () => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState()
  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, url => {
        setLoading(false)
        setImageUrl(url)
        message.success(`${info.file.name} file uploaded successfully`)
      })
    }
  }
  const uploadButton = (
    <div
    style={{
      width: '300px',
      height:"160px",
      textAlign: 'center'
    }}>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <CloudTwoTone style={{ fontSize: '2.4rem', color: '#08c' }} />
      )}
      <div
        style={{
          marginTop:'5px'
        }}
      >
        <p
          style={{
            fontSize: '18px',
            color:"#8f8686"
          }}
        >
          <span style={{
            color:"#2046cf",
            fontWeight:"600",
          }}>Browse </span> {''}
          or drop your logo here.
        </p>
        <p
          style={{
            fontSize: '17px',
            color:"#8f8686"
          }}
        >
          Maximum 2MB in size
        </p>
        <p
         style={{
            fontSize: '17px',
            color:"#8f8686"
          }}
        >
          JPG PNG Format
        </p>
      </div>
    </div>
  )
  return (
    <div className=''>
      <ImgCrop>
        <Upload.Dragger
          name='avatar'
          listType='picture-card'
          showUploadList={false}
          action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <Image src={imageUrl} alt='avatar' width={150} height={150} />
          ) : (
            uploadButton
          )}
        </Upload.Dragger>
      </ImgCrop>
    </div>
  )
}
export default App
