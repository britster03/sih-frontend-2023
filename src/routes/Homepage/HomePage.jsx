import Header from "../../componenets/Shared/Header/Header";
import Navbar from "../../componenets/Navbar/Navbar";
import styles from "./HomePage.module.css"
import InfoSection from "../../componenets/Shared/InfoSection/InfoSection";
import Footer from "../../componenets/Shared/Footer/Footer";

const heading1 = "What is this E-Vault for legal system ?";
const info1 = ["This platform leverages the robust features of Hyperledger Fabric, offering a permissioned blockchain platform that ensures privacy and security for legal records management with a focus on transparency and scalability",
    "It integrates seamlessly with existing legal databases and case management systems, streamlining operations for lawyers, judges, and clients",
    "Combines blockchain with user-friendly interfaces, our platform enhances access and fosters trust in the legal system",
    "Secure document encryption & decryption and efficient data management, makes it an ideal choice for revolutionizing the way legal records are stored, accessed, and shared."];

const heading2 = "Why Hyperledger Fabric is used? ";
const info2 = ["<> The originality of our concept rests in the incorporation of smart contracts enabled by blockchain technology into our Hyperledger Fabric-based system for managing legal records",
    "These improve security, openness, and effectiveness while also introducing a method for automating and carrying out legal agreements",
    "It marks a significant leap in the field of legal technology by streamlining legal procedures, automating contract enforcement, and triggering actions depending on predetermined parameters."];

const HomePage = () => {
    return(
        <div >
            <Header/>
            <Navbar/>
            <InfoSection heading={heading1} points={info1}/>
            <InfoSection heading={heading2} points={info1}/>
            <Footer />
        </div>
    )
}

export default HomePage;