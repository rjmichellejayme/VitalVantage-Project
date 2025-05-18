import { useState } from 'react';

import './scss/style.css';
import ClinicCard from './Clinic-card';
import Header_p from './Header_p';
import NavBarHome from './NavBarHome';

function Home() {
  return (
    <>
    <Header_p/>
    <NavBarHome/>
      <section className='hero'>
        <div className='left'></div>
        <div className='right'>
          <div className='tagline'>
            <h2>YOUR HEALTH DESERVES</h2>
            <h2>A WINNING EDGE</h2>
          </div>

          <p>
            Vital Vintage is a healthcare assistance service that specializes in appointment setting to streamline patient care.
          </p>
        </div>
      </section>

      <section className='clinics' id='clinics-home'>
        <h1 className='section-title'>Clinics</h1>
        <div className='clinic-group-wrapper'>
          <ClinicCard
            title='OB-GYN'
            image='/src/assets/obgyn.png'
            services={['Prenatal Checkups', 'Postnatal Care', 'Gynecological Exams']}
            link='/OBGYN'
            id='obgyn-book'
          />

          <ClinicCard
            title='PEDIATRICS'
            image='/src/assets/pedia.png'
            services={['Preventive Care', 'Acute Care', 'Chronic Care']}
            link='/PEDIA'
            id='pedia-book'
          />

          <ClinicCard
            title='CARDIOLOGY'
            image='/src/assets/cardio.png'
            services={['Preventive Care', 'Treatment of Heart Conditions', 'Follow-Up Care']}
             link='/CARDIO'
            id='cardio-book'
          />

          <ClinicCard
            title='DENTISTRY'
            image='/src/assets/dental.png'
            services={['Preventive', 'Restorative', 'Cosmetic']}
              link='/DENTISTRY'
            id='dentistry-book'
          />

          <ClinicCard
            title='MENTAL'
            image='/src/assets/mental.png'
            services={['Psychiatry Consultations', 'Psychotherapy Sessions', 'Counseling Services']}
              link='/MENTAL'
            id='mental-book'
          />
        </div>
      </section>

      <section className='clinics' id='laboratories-home'>
        <h1 className='section-title'>Laboratories</h1>
        <div className='clinic-group-wrapper'>
          <ClinicCard
            title='Lab Services'
            image='/src/assets/mental.png'
            services={['Blood Tests', 'Urinalysis', 'Microbiology', 'Pathology']}
            link='/lab-book'
            id='lab-book'
          />
          <ClinicCard
            title='Imaging'
            image='/src/assets/mental.png'
            services={['Prenatal Checkups', 'Postnatal Care', 'Gynecological Exams']}
            link='/imaging-book'
            id='imaging-book'
          />
        </div>
      </section>

      <section className='location'>
        <h1 className='section-title'>Location</h1>
        <div className='map'>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7841.859271633634!2d122.31957697669066!3d10.66256975224275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae58ef47252d5d%3A0xfbc48b5a32f66a67!2sRep.%20Pedro%20Trono%20Memorial%20District%20Hospital!5e0!3m2!1sen!2sph!4v1729212107418!5m2!1sen!2sph"
            width="600"
            height="450"
            style={{ border: '0' }} // Changed to object
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
       
      </section>
    </>
  );
}

export default Home;