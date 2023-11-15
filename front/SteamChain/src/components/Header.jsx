
import { Link } from 'react-router-dom';

 const headerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    
    padding: '10px',
    textAlign: 'center',
  };

  const fialdStyle = {
    color: '#FFFFFF',
    background: '#a482f3',
    borderRadius: '999px',
    boxShadow: '#5E5DF0 0 10px 20px -10px',
    boxSizing: 'border-box',
    color: '#FFFFFF',
    cursor: 'pointer',
    fontFamily: 'Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '24px',
    opacity: 0.9,
    outline: '0 solid transparent',
    padding: '8px 18px',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    width: 'fit-content',
    wordBreak: 'break-word',
    border: '0',
    margin: '5px 5px 5px 5px',
  };

  function InputField(props) {
    return (
      <header style={headerStyle}>

        <a style={fialdStyle}><Link style={{color: '#FFFFFF'}} to="/register">Home</Link></a>
        <a style={fialdStyle}><Link style={{color: '#FFFFFF'}} to="/register">Loja</Link></a>
        <a style={fialdStyle}><Link style={{color: '#FFFFFF'}} to="/register">Market Place</Link></a>
        <a style={fialdStyle}><Link style={{color: '#FFFFFF'}} to="https://github.com/Pedro22D0W">suporte</Link></a>
        {
  localStorage.getItem('token') ? (
    <a style={fialdStyle}>
      <Link style={{ color: '#FFFFFF' }} to="/register">
        {localStorage.getItem('username')}
      </Link>
    </a>
  ) : (
    <a style={fialdStyle}>
      <Link style={{ color: '#FFFFFF' }} to="/register">
        Registrar
      </Link>
    </a>
  )
}
      </header>      
    );
  }
  
  export default InputField;