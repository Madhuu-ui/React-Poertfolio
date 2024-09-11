import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

function About() {
    return (
        
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/About.png")}></img>
           
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')}></img>
                <div className={styles.aboutItemText}>
                    {/* <h3>Frontend develoer</h3> */}
                    <p>With 3 years of experience as an Application Development Analyst at Accenture, I have honed my skills in React development,software development lifecycle, requirement gathering, user experience optimization, production support, risk management, and project management.</p>
                </div>
                </li>
                <li className={styles.aboutItem}>
                    <img   src={getImageUrl('about/serverIcon.png')}></img>
                <div  className={styles.aboutItemText}>
                    {/* <h3>Backend develoer</h3> */}
                    <p>I have excelled in designing and developing UI components, translating designs into high-quality code, debugging and optimizing front-end architecture, and collaborating with cross-functional teams to achieve project objectives.</p>
                </div>
                </li>
                <li className={styles.aboutItem}>
                    <img  src={getImageUrl('about/uiIcon.png')}></img>
                <div  className={styles.aboutItemText}>
                    {/* <h3>UI develoer</h3> */}
                    <p>My proficiency in React, React Hooks, Redux, JavaScript, SQL, CSS, has enabled me to contribute significantly to the development and maintenance of web applications.

</p>
                </div>
                </li>
                </ul>
                </div>
            </section>
    )
}

export default About
