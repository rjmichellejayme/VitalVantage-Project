import { useState } from 'react';


import './scss/style.css';

function SetMain() {
  return (
    <>
       
          <main className='apt-main'>
            <aside>
              <section className='apt-selection'>
               
                  <button class="selection-btn">
                  <i class="fa-solid fa-briefcase"></i> Select Services
                  <i class="fa-regular fa-square"></i>
                  </button>
                  <button class="selection-btn">
                  <i class="fa-solid fa-briefcase"></i> Select Date
                  <i class="fa-regular fa-square"></i>
                  </button>
         
              </section>
              <section className='apt-summary'>
                <h2>Selected Services</h2>


              </section>
            </aside>
            <section className='services-wrap'>
                <h2 className='service-title'>SERVICES OFFERED IN OUR OB-GYN DEPARTMENT</h2>
                <ul className='Clinic Notes'>
                  <li>Appointments Needed</li>
                  <li>Walk-ins Allowed</li>
                </ul>
                <div className='clinic-service'> 
                    <div className='services-choose'>
                      <div className='service-book'>
                        <h2> 1. Prenatal Checkup</h2>
                        <button className='book-btn'>Book</button>
                      </div>
                      <p>Prenatal checkups monitor your health and baby’s development during pregnancy. Book your appointment for a healthy pregnancy</p>
                    </div>
                    <div className='apt-notes-wrap'>
                      <p className='notes-instructuction'>Add any details or special requests for your appointment here.</p>
                      <textarea className='apt-notes' id='prenatal-notes'></textarea>
                    </div>
                </div>

                <div className='clinic-service'> 
                    <div className='services-choose'>
                      <div className='service-book'>
                        <h2> 1. Prenatal Checkup</h2>
                        <button className='book-btn'>Book</button>
                      </div>
                      <p>Prenatal checkups monitor your health and baby’s development during pregnancy. Book your appointment for a healthy pregnancy</p>
                    </div>
                    <div className='apt-notes-wrap'>
                      <p className='notes-instructuction'>Add any details or special requests for your appointment here.</p>
                      <textarea className='apt-notes' id='prenatal-notes'></textarea>
                    </div>
                </div>

                <div className='clinic-service'> 
                    <div className='services-choose'>
                      <div className='service-book'>
                        <h2> 1. Prenatal Checkup</h2>
                        <button className='book-btn'>Book</button>
                      </div>
                      <p>Prenatal checkups monitor your health and baby’s development during pregnancy. Book your appointment for a healthy pregnancy</p>
                    </div>
                    <div className='apt-notes-wrap'>
                      <p className='notes-instructuction'>Add any details or special requests for your appointment here.</p>
                      <textarea className='apt-notes' id='prenatal-notes'></textarea>
                    </div>
                </div>
              
            </section>

          </main>
       
       
    </>
  );
}

export default SetMain;
