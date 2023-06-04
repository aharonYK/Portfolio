import queryString from 'query-string';
import "../style/whatapp.css"
const WhatsAppButton = () => {
    const phoneNumber = '972526071440'; // Update with your phone number
    const message = 'Hello there! I have a question.'; // Replace with your desired message
  
    const handleClick = () => {
      const url = `https://wa.me/${phoneNumber}/?${queryString.stringify({ text: message })}`;
      window.open(url, '_blank');
    };
  
    return (
      <button className='buttonA' onClick={handleClick}>Send Me WhatsApp</button>
    );
  };
  export default WhatsAppButton;