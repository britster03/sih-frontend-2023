import styles from "./footer.module.css"
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router";
const Footer = () => {
    return(
        <div className={styles.main} >
            <div className={styles.divOne}>
                <div className={styles.divOneInside}>
                    <h1>Be involved</h1>
                    <p>Collaborate, share and inluence government policy</p>
                    <div className={styles.footerPoints}>
                    <div>
                        <img src="/icons/check.png" />
                        <p onClick={() => window.location.href = "https://www.mygov.in/task/national-gopal-ratna-award-2023/"}>National Gopal Ratna Award 2023</p>
                    </div>
                    <div>
                    <img src="/icons/chat.png" />
                    <p onClick={() => window.location.href = "https://www.mygov.in/group-issue/inviting-ideas-mann-ki-baat-prime-minister-narendra-modi-24th-september-2023/"}>Inviting ideas for Mann Ki Baat by Prime Minister Narendra Modi on 24th Septembe...</p>
                    </div>
                    <div>
                    <img src="/icons/poll.png" />
                    <p onClick={() => window.location.href = "https://www.mygov.in/mygov-survey/fit-india-mobile-application-survey/"}>Fit India mobile Application Survey</p>
                    </div>
                    <div>
                    <img src="/icons/mic.png" />
                    <p onClick={()=> window.location.href = "https://www.mygov.in/talk/tune-104th-episode-mann-ki-baat-prime-minister-narendra-modi-27th-august-2023/"}>Tune in to 104th Episode of Mann Ki Baat by Prime Minister Narendra Modi on 27th...</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.divTwo}>
                <div className={styles.sectionOne}>
                    <h1>Spotlight</h1>
                    <ul>
                        <li>Amrit Bharat Station Scheme</li>
                        <li>Sahkar Se Samriddhi Scheme</li>
                    </ul>
                    <button>View All</button>
                </div>
                <div className={styles.sectionTwo}>
                    <h1>Transparency</h1>
                    <p>Right to Information | Open Data | Public Grievance</p>
                </div>
            </div>
            <div className={styles.divThree}>
                <div>
                    <Icon icon="codicon:feedback" />
                    <p>Feedback</p>
                </div>
                <div>
                    <Icon icon="teenyicons:phone-solid" />
                    <p>Contact Us</p>
                </div>
                <div>
                    <Icon icon="majesticons:share" />
                    <p>Share this page</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer