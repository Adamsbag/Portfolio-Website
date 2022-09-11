import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What are the Tools and Technologies I work with?</h5>
      <h2>My SKILLS</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>My Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                 <h4>Terraform</h4>
                 <small className='text-light'>Experienced</small>
              </div>
             
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                 <h4>Docker</h4>
                 <small className='text-light'>Experienced</small>
              </div>
             
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Kubernetes</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>
          </div>
        </div>

{/*============== END OF My Skills ================*/}

        <div className="experience__backend">
        <h3>AWS Services</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>IAM</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>VPC</h4>
              <small className='text-light'>Experienced</small>
              </div>              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>EC2</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Lambda</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CI/CD</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience