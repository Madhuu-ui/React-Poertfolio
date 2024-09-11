import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './ProjectCard.module.css'

function ProjectCard({project}) {
    const {title, imageSrc,description,skills, demo, source} = project
    return (
        <div className={styles.container}>
            <img className={styles.image} src={getImageUrl(imageSrc)}></img>
             <h3 className={styles.title}>{title}</h3>
             <p className={styles.description}>{description}</p>
            {/* <ul className={styles.skills}>{skills.map((skill, id) => {
                return (
                    <li className={styles.skill}key={id}>{skill}</li>   
                )             
                 })}
                
            </ul> */}
            <div className={styles.links}>
                {/* <a className={styles.link} href={demo}>DEMO</a> */}
                <a className={styles.link} href={source}>Certificate</a>
            </div>
        </div>
    )
}

export default ProjectCard

