import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () =>{

  const[click, setclick]= useState(false)

  const handleClick = () =>{
    return(
         setclick(!click)
    )
  }
  return(
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi there! </h1>
            <h1 className={styles.title}> I am Madhu</h1>
            <p className={styles.description}>Futuristic & Forward Looking Professional with  3 years of experience and notable success in designing and developing applications using React js and other technologies.</p>
            <div className={styles.resumeBtn}>
            <a className={styles.contactBtn} href="mailto:madhumgowda323@gmail.com">Contact</a>
            <a onClick={handleClick} className={styles.contactBtn}>Resume</a>
            
            {click &&
             <div className={styles.viewbtn}>
             <a className={styles.contactBtn} href="assets/contact/MadhuuMahesh.pdf">view</a>
             <a className={styles.contactBtn} href="assets/contact/MadhuuMahesh.pdf" download>Download</a>
             </div>
            }
            </div>
            
            
        </div>
        <img className={styles.heroImg}
        src={getImageUrl("hero/heroImage2.png")}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}