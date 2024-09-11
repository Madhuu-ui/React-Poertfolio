import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'


function Contact() {
    return (
        <section id="contact"className={styles.container}>
            <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')}></img>
                <a href='mailto:madhumgowda323@gmail.com'>madhumgowda323@gmail.com</a>
                </li>
                <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')}></img>
                <a href='https://www.linkedin.com/in/madhu-m-106528186/'>my linkedin</a>
                </li>
                <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')}></img>
                <a href='https://www.linkedin.com/in/madhu-m-106528186/'>my git account</a>
                </li>

            </ul>

        </section>
    )
}

export default Contact
