import './Roundedbutton.css'

const ButtonRounded = ({ children, size, ...restProps }) => {
  const getSizeClassName = () => {
    switch (size) {
      case 'large':
        return 'large'
      case 'small':
        return 'small'
      default:
        return ''
    }
  }

  return (
    <button className={`rounded-button ${getSizeClassName()}`} {...restProps}>
      {children}
    </button>
  )
}

export default ButtonRounded
