
import { useNavigate } from 'react-router-dom';
import svg from '/404.svg';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate(-1); 
  };

  return (
    <div className='cont-404' style={{ position: 'relative', overflowY: 'hidden' }}>
      <img
        src={svg}
        alt='svg'
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', 
        }}
      />
      <button
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          border: 'none',
          background: 'transparent',
          color: 'red',
          fontSize: '16px',
          cursor: 'pointer',
        }}
        onClick={handleBackToHome}
      >
        &larr; Back to Home 🏠
      </button>
    </div>
  );
};

export default ErrorPage;
