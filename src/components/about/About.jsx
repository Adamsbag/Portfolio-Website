import React from 'react'
import './About.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2> About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years as Cloud Engineer</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3 Companies WorldWide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          I am a goal oriented cybersecurity and cloud computing professional who graduated with a 4.00 GPA.
          For over 20 year, I have been building, troubleshooting , updating, minimizing cost, and securing 
          resilient systems to sustain workloads of different kind. I work as a cloud engineer at Madina 
          Conception. As I was restarting my career in cybersecurity 3 years ago, I started simultaneously 
          learning cloud computing. Today, I have mastered several AWS services such as IAM, EC2, load balancer
          Route53, S3, ECS/ECR, CI/CD and more… As of now I own an AWS Solution Architect Associate and I am 
          working toward an AWS Devops Associate. In December 2020, I obtained my Associate of Art in Cyber 
          Security & Assurance at Baltimore City Community College. I am currently doing my Bachelor of Science
          in Computer Networks & Cybersecurity at University of Maryland Global Campus.
          </p>
          <a href='#contact' className='btn btn-primary'>let's Talk</a> 
        </div>
      </div>
    </section>
  )
}

export default About