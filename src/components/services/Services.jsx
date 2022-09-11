import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>General Activities</h5>
      <h2>Experience</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>DevOps Engineer </h3>
            <h3>Madina Conception</h3>
            <h3>(June 2022)</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Provision modularized AWS resources using Terraform.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Leverage containerization of legacy web applications using Docker.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Orchestrate Clustered containers with Kubernetes. </p>
            </li>
          </ul>
        </article>

        {/*========END OF DEVOPS====*/}

        <article className='service'>
          <div className="service__head">
            <h3>Cloud Engineer </h3>
            <h3>Madina Conception</h3>
            <h3>(2020-2022)</h3>
          </div>

          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Migrate Database from RDS to S3 using AWS Database Migration Service (DMS). </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Built, deployed, and maintained various AWS Infrastructure.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design highly available systems using auto scaling, load balancing and route 53.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop bash scripts to automate regular tasks.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Daily interaction with client and troubleshooting system bugs and configuration issues.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Orient and guide users on how to operate new software and computer equipment.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Performed applications installation, upgrades/patches, maintenance, and configuration changes using system manager and SSH</p>
            </li>
          </ul>
        </article>

      {/*========END OF CLOUD ENGINEER====*/}

        <article className='service'>
          <div className="service__head">
            <h3>System Admnistrator</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managing users using active Directory</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintaining and administering computer networks and related computing environments including systems
                 software, applications software, hardware, and configurations. 
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Troubleshooting, diagnosing, and resolving hardware, software, and other network and system problems. </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Replacing faulty network hardware components when required.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designing, configuring, testing, and updating networking software, computer hardware, and operating system software.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services