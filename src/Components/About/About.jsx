import React from 'react';
import './About.scss';
import chairIMG from '../../static/Images/chair.png';
import arrow from '../../static/Images/Carousel/arrow-right-gold.png';
import lamb from '../../static/Images/lightbulb-regular.png'
import paintRoller from '../../static/Images/paint-roller-solid.png'
import penNib from '../../static/Images/pen-nib-solid.png'
import SunBright from '../../static/Images/sun-bright-svgrepo-com.png'
const About = () => {
  return (
    <>
      <section className='leadGenInterior-design' id='About'>
        <div className='leadGenContainer'>
          <div className="leadGenInteriorDesignService">
            <h2 className='InteriorDesignServiceHeader'>About our LeadGen interior design.</h2>

            <p className='InteriorDesignServiceDetails1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>

            <p className='InteriorDesignServiceDetails2'>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled.</p>

            <button className='exploreServiceBTN'>Explore Services <img className='goldArrow' src={arrow} height="15px" width='25px' alt="" /></button>
          </div>

          <div className="leadGenInteriorDesignServiceLogo">
            <img className='chairIMG' src={chairIMG} alt="chair" />
          </div>
        </div>
      </section>

      <section className='Interior-designer'>
        <div className='graphic-designerCapabilities'>

          <div className='graphicDesignerHeader-Details'>
            <h2 className='Interior-designerHeader'>Interior designer</h2>
            <p className='Interior-designerDetails'>
              Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem
              Ipsum has been the standard dummy text.
            </p>
          </div>

          <div className='designerDetailsFollow'>
            {designerCapability.map(({ id, Icon, Title, Details }) => (
              <div className='designerCapability' key={id}>
                <div className='designerCapabilityHeader'>
                  <img className='designerCapabilityIcon'  src={Icon} alt="..." />
                  <h3 className='designerCapabilityTitle'>{Title}</h3>
                </div>

                <div className='designerCapabilityDetails'>
                  <p>{Details}</p>
                </div>
              </div>
            ))}


          </div>

        </div>

        <div className='Interior-designerBackg'>

        </div>

      </section>
    </>
  )
}

export default About

const designerCapability = [
  { id: "1", Icon: paintRoller, Title: 'Interior expertise', Details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { id: "2", Icon: lamb, Title: 'Creative collaboration', Details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { id: "3", Icon: penNib, Title: 'Distinctive designs', Details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { id: "4", Icon: SunBright, Title: 'Design without limits', Details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
];
