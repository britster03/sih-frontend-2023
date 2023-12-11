import styles from "./InfoSection.module.css"
const InfoSection = ({heading,points}) => {
    return(
        <div className={styles.main}>
            <div className={styles.headContainer}>
                <img src="/icons/arrow.png" alt="Arrow" />
                <h1>{heading}</h1>
            </div>
            
            <div className={styles.points}>
            <ul  >

                {
                    points.map((point,index) => <li className={styles.listPoints} key={index}>{point}</li>)
                }

            </ul>
            </div>
        </div>
    )
}

export default InfoSection;