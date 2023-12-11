import "./Header.css";
import ashok_stambh from "../../../assets/images/ashok_stambh.svg"
import digi from "../../../assets/images/digi.svg"
import g20 from "../../../assets/images/g20.jpg"
import gc from "../../../assets/images/gc.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="header-images">
                <div>
                    <img src={ashok_stambh} />
                </div>
                <div>
                    <img src={digi} style={{marginBottom:"1rem"}}/>
                    <img src={g20}/>
                    <img src={gc} style={{marginBottom:"1rem"}} />
                </div>
            </div>
        </div>
    )
}
export default Header;