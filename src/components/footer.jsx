import "../style/footer.css"



const Footer = () => {
    const currentDate = new Date()
    const year=currentDate.getFullYear()

    return (
         <>
    <div className="foot">
       Designed and Developed by Aharon Karsenti Copyright © {year} SB
    </div>
    </> 
    );
}
 
export default Footer;