const EmailButton = () => {
    const emailAddress = 'aharon589@gmail.com.com'; // Replace with your email address
  
    return (
      <button className="email-button">
        <a href={`mailto:${emailAddress}`} className="email-link">Send Email</a>
      </button>
    );
  };
  
  export default EmailButton;
  