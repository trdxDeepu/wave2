/* eslint-disable react/prop-types */
import './styles.css'
import { Progress } from 'antd'
import { useState } from 'react'
import { Modal } from 'antd'
// import { useFormContext } from '../../hooks/FormContext'

const DragAndDrop = () => {
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  // const { formData, setFormData } = useFormContext()

  const handleImageUpload = event => {
    const file = event.target.files[0]
    const reader = new FileReader()
    // const { name } = event.target

    reader.readAsDataURL(file)
    setLoading(true)

    reader.onloadend = () => {
      setImage(reader.result)
      setLoading(false)
      setProgress(100)

      // setFormData({ ...formData, [name]: reader.result })
    }

    reader.onprogress = progressEvent => {
      setProgress((progressEvent.loaded / progressEvent.total) * 100)
    }
  }

  const handleDrop = event => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    setLoading(true)
    reader.onloadend = () => {
      setImage(reader.result)
      setLoading(false)
      setProgress(100)
    }
    reader.onprogress = progressEvent => {
      setProgress((progressEvent.loaded / progressEvent.total) * 100)
    }
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setImage(null)
    setProgress(0)
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div
        className='hero'
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
      >
        <label htmlFor='input-file' id='drop-area'>
          {image ? (
            <>
              {loading ? (
                <Progress percent={progress} />
              ) : (
                <>
                  <img
                    src={image}
                    alt='uploaded'
                    id='img'
                    width={200}
                    height={100}
                  />
                  <p id='text-show' onClick={showModal}>
                    Remove logo
                  </p>
                  <Modal
                    title='Remove invoice logo'
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    keyboard={true}
                    okText='Remove logo'
                    cancelText='Cancel'
                  >
                    <p className='modal_text'>
                      Removing your logo will remove it from all existing and
                      future{' '}
                      <span> invoices and estimates. Are you sure you </span>
                      want to remove your <span style={{
                        fontWeight: 'bold'
                      }}>business logo?</span>
                    </p>
                  </Modal>
                </>
              )}
            </>
          ) : (
            <div id='img-view'>
              <img src='/508-icon.png' alt='icon' id='img' />
              <p>
                Drag and Drop or click here <br /> to upload your logo
              </p>
              <span>Upload any image</span>
            </div>
          )}
        </label>
      </div>
      <input
        type='file'
        accept='image/*'
        id='input-file'
        hidden
        name='image'
        onChange={handleImageUpload}
      />
    </>
  )
}

export default DragAndDrop
