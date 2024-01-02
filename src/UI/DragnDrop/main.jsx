/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './styles.css'
import { Progress } from 'antd'
import { useState } from 'react'
import { Modal } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'
// import { useFormContext } from '../../hooks/FormContext'

const { confirm } = Modal

const DragAndDrop = () => {
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  // const { formData, setFormData } = useFormContext()

  /* To upload image  */

  const handleImageUpload = event => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.readAsDataURL(file)
    setLoading(true)

    reader.onloadend = () => {
      setImage(reader.result)
      setLoading(false)
      // setProgress(50);
    }

    reader.onprogress = progressEvent => {
      console.log(
        'Progress:',
        (progressEvent.loaded / progressEvent.total) * 100
      )
      setProgress((progressEvent.loaded / progressEvent.total) * 100)
    }

    reader.onerror = error => {
      console.error('Error reading the file:', error)
      setLoading(false)
      setProgress(0)
    }
  }

  /* To drag and drop the image fucntion */

  const handleDrop = event => {
    event.preventDefault()

    // Check if there are files in the dropped data
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      const file = event.dataTransfer.items[0].getAsFile()

      // Check if the dropped item is a file
      if (file) {
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
      } else {
        console.error('Dropped item is not a file')
      }
    } else {
      console.error('No files dropped')
    }
  }

  /* Delete Modal confirm  */

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk () {
        setImage(null)
        setProgress(0)
        setIsModalOpen(false)
      },
      onCancel () {
        setIsModalOpen(false)
      }
    })
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
                <>
                  <Progress percent={progress} />
                  <div>Loading...</div>
                </>
              ) : (
                <>
                  <img
                    src={image}
                    alt='uploaded'
                    id='img'
                    width={200}
                    height={100}
                  />
                  <div>
                    <p id='text-show' onClick={showDeleteConfirm}>
                      Remove logo
                    </p>
                  </div>
                </>
              )}
            </>
          ) : (
            <div id='img-view'>
              <img src='/508-icon.png' alt='icon' id='img' />
              <p
                style={{
                  marginTop: '15px'
                }}
              >
                Drag and Drop or click here <br /> to upload your logo
              </p>
              {/* <span>Upload any image</span> */}
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
