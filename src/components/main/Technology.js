import React,{useState} from 'react'

import '../Styles/Technology.css'
// import 'bootstrap/dist/css/bootstrap.css';
const Technology= () => {
  const [showTab, setShowTab] = useState(1);

  const handletab = (e) => {
    setShowTab(e);
  };
  return (
    <>
      <div className='technologies'>
         <section className="vertical-tabs vertical-tabs--bg-yellow vertical-tabs--black vertical-tabs--equal-height js-tabs-equal-height ai-section section--indents-large">
          <div className="ai-section__inner ai-section__container vertical-tabs__inner" >
            <h2 className="vertical-tabs__title hfs1" >Technologies</h2>
            <div className="tabs js-tabs" data-accordion="">
              <div className="tabs__content">
                <div id="panel-648036a386005074492147" className={showTab===1?"tabs__panel is-active":"tabs__panel"} role="tabpanel" data-accordion-item="" >
                  <img width="450" height="620" src="https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Andrii-Stashko-Ziablietsov.png"
                    className="tab__image object-fit-contain object-fit-bottom d-none d-m-block" alt="" decoding="async" loading="lazy"
                    srcset="https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Andrii-Stashko-Ziablietsov.png 450w, https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Andrii-Stashko-Ziablietsov-218x300.png 218w"
                    sizes="(max-width: 450px) 100vw, 450px" />
                  <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false"
                    aria-label="Cloud">
                    <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      </g>
                    </svg>
                    </button>

                  <div className="tab__content tab__content--has-image" style={{ height: '430px' }}>
                    <div className="tab__buttons-container js-buttons-slider slick-initialized slick-slider">
                      <div className="slick-list draggable">
                        <div className="slick-track" style={{opacity: 1, width: '15000px', transform: 'translate3d(-259px, 0px, 0px)'}}>
                          <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter slick-slide slick-cloned" target="_self"
                            href="https://www.avenga.com/our-expertise/cloud-solution-engineering/" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1">
                            Cloud solution engineering                      </a>
                          <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter slick-slide slick-current slick-active" target="_self"
                            href="https://www.avenga.com/our-expertise/cloud-migration-services/" data-slick-index="0" aria-hidden="false">
                            Cloud migration                      </a>
                          <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter slick-slide" target="_self"
                            href="https://www.avenga.com/our-expertise/cloud-consulting/" data-slick-index="1" aria-hidden="true" tabindex="-1">
                            Cloud consulting                      </a
                          ><a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter slick-slide" target="_self"
                            href="https://www.avenga.com/our-expertise/cloud-solution-engineering/" data-slick-index="2" aria-hidden="true" tabindex="-1">
                            Cloud solution engineering  </a>
                                        
                        </div>
                        </div>
                    </div>

                    <div className="tab__text wysiwyg" >
                      <p className="pfs2">Certified AWS, Google, and Azure experts are ready
                        to consult, migrate, and engineer. Avenga offers a wide scope of cloud-based services for those seeking velocity, stability, and security.</p>
                    </div> 
                     <div className="buttons-grid" >
                      <a href="https://www.avenga.com/our-expertise/cloud-services/"
                        className="ai-btn ai-btn--circle" title="Explore Cloud" >
                        Explore Cloud
                        </a>
                    </div>
                  </div>
                </div>
                <div id="panel-648036a38628d401417169" className={showTab===2?"tabs__panel is-active ":"tabs__panel"} role="tabpanel" data-accordion-item="" >
                  <img width="450" height="620" src="https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Mykhailo-Lehinchenko.png"
                    className="tab__image object-fit-contain object-fit-bottom d-none d-m-block" alt="" decoding="async" loading="lazy"
                    srcset="https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Mykhailo-Lehinchenko.png 450w,
               https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Mykhailo-Lehinchenko-218x300.png 218w"
                    sizes="(max-width: 450px) 100vw, 450px" />
                  <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false"
                    aria-label="Automation">
                    <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      </g>
                    </svg>
                                  </button>

                  <div className="tab__content tab__content--has-image" style={{ height: '430px' }}>
                    <div className="tab__buttons-container js-buttons-slider">
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter" target="_self"
                        href="https://www.avenga.com/our-expertise/devops/">
                        DevOps services                      </a>
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter" target="_self"
                        href="https://www.avenga.com/our-expertise/quality-assurance-automation-services/">
                        AQA services                      </a>
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter" target="_self"
                        href="https://www.avenga.com/our-expertise/rpa/">
                        RPA services                      </a>
                    </div>

                    <div className="tab__text wysiwyg">
                      <p className="pfs2">Render your products and services immune to business disruptions. Beat competition by automating delivery pipelines, testing, and manual processes to scale opportunities and eliminate threats on the go.</p>
                    </div>



                    <div className="buttons-grid">

                      <a href="https://www.avenga.com/our-expertise/automation-services/"
                        className="ai-btn ai-btn--circle" title="Explore Automation">
                        Explore Automation                        </a>


                    </div>

                  </div>
                </div>
                <div id="panel-648036a386509974032461" className={showTab===3?"tabs__panel is-active":"tabs__panel"} role="tabpanel" data-accordion-item="" >
                  <img width="450" height="620"
                    src="https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Valentyn-Zubenko.png"
                    className="tab__image object-fit-contain object-fit-bottom d-none d-m-block" alt=""
                    decoding="async" loading="lazy"
                    srcset="https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Valentyn-Zubenko.png 450w,
               https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Valentyn-Zubenko-218x300.png 218w"
                    sizes="(max-width: 450px) 100vw, 450px" />
                  <button className="accordion-toggle d-m-none js-accordion-toggle"
                    type="button" aria-expanded="false" aria-label="Data and AI">
                    <svg className="accordion-toggle__icon" width="24" height="24"
                      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </svg>              </button>

                  <div className="tab__content tab__content--has-image" style={{ height: '430px' }}>
                    <div className="tab__buttons-container js-buttons-slider">
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter"
                        target="_self" href="https://www.avenga.com/our-expertise/data-consulting/">
                        Data consulting                      </a>
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter"
                        target="_self" href="https://www.avenga.com/our-expertise/business-intelligence-solutions/">
                        Business intelligence                      </a>
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter"
                        target="_self" href="https://www.avenga.com/our-expertise/data-engineering/">
                        Data engineering                      </a>
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter"
                        target="_self" href="https://www.avenga.com/our-expertise/big-data/">
                        Big data services                      </a>
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter"
                        target="_self" href="https://www.avenga.com/our-expertise/ai-services/">
                        ML and AI services                      </a>
                    </div>

                    <div className="tab__text wysiwyg">
                      <p className="pfs2">Improve decision-making, enhance business flexibility,
                        and tap into predictable planning by mastering the power of data.
                        Avenga helps businesses worldwide gather, process, visualize,
                        and apply data in a manner that makes it relevant for the company’s success.</p>
                    </div>



                    <div className="buttons-grid">

                      <a href="https://www.avenga.com/our-expertise/data-services/"
                        className="ai-btn ai-btn--circle"
                         title="Explore Data and AI">
                        Explore Data and AI                        </a>


                    </div>

                  </div>
                </div>
                <div id="panel-648036a3867a5707739493" className={showTab===4?"tabs__panel is-active":"tabs__panel"} role="tabpanel" data-accordion-item="" >
                  <img width="450" height="620" src="https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Shumilov-Oleksandr.png"
                    className="tab__image object-fit-contain object-fit-bottom d-none d-m-block" alt="" decoding="async"
                    loading="lazy"
                    srcset="https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Shumilov-Oleksandr.png 450w,
                 https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Shumilov-Oleksandr-218x300.png 218w"
                    sizes="(max-width: 450px) 100vw, 450px" />
                  <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false"
                    aria-label="Salesforce">
                    <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </svg>              </button>

                  <div className="tab__content tab__content--has-image" style={{ height: '430px' }}>
                    <div className="tab__buttons-container js-buttons-slider">
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter"
                        target="_self" href="https://www.avenga.com/our-expertise/salesforce-consulting-services/">
                        Salesforce consulting                      </a>
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter"
                        target="_self" href="https://www.avenga.com/our-expertise/salesforce-development/">
                        Salesforce app development                      </a>
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter"
                        target="_self" href="https://www.avenga.com/our-expertise/salesforce-implementation/">
                        Salesforce implementation and customization                      </a>
                    </div>

                    <div className="tab__text wysiwyg">
                      <p className="pfs2">Nurture customer loyalty by offering a buyer’s
                        journey that your competitors cannot deliver. As a certified Salesforce partner,
                        Avenga deploys custom-tailored Salesforce solutions for those seeking to sell and communicate
                        with customers in a productive way.</p>
                    </div>



                    <div className="buttons-grid">

                      <a href="https://www.avenga.com/our-expertise/salesforce-services/"
                        className="ai-btn ai-btn--circle" title="Explore Salesforce">
                        Explore Salesforce                        </a>


                    </div>

                  </div>
                </div>
                <div id="panel-648036a3869ff846876083" className={showTab===5?"tabs__panel is-active":"tabs__panel"} role="tabpanel" data-accordion-item="" >
                  <img width="450" height="620"
                    src="https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Gregory-Hasyn.png"
                    className="tab__image object-fit-contain object-fit-bottom d-none d-m-block" alt=""
                    decoding="async" loading="lazy"
                    srcset="https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Gregory-Hasyn.png 450w, 
               https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Gregory-Hasyn-218x300.png 218w"
                    sizes="(max-width: 450px) 100vw, 450px" />
                  <button className="accordion-toggle d-m-none js-accordion-toggle"
                    type="button" aria-expanded="false" aria-label="Microsoft">
                    <svg className="accordion-toggle__icon" width="24" height="24"
                      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </svg>              </button>

                  <div className="tab__content tab__content--has-image" style={{ height: '430px' }}>
                    <div className="tab__buttons-container js-buttons-slider">
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter"
                        target="_self" href="https://www.avenga.com/our-expertise/microsoft-365-services/">
                        Microsoft 365                      </a>
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter"
                        target="_self" href="https://www.avenga.com/our-expertise/sharepoint/">
                        SharePoint                      </a>
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--orange-lighter"
                        target="_self" href="https://www.avenga.com/our-expertise/power-platform/">
                        Microsoft power platform                      </a>
                    </div>

                    <div className="tab__text wysiwyg">
                      <p className="pfs2">Avenga designs and implements Microsoft solutions that streamline teams’
                        productivity, coherence, and synergy. Ensure the maximum level of goal-oriented
                        cooperation along your management vertical with the help of Microsoft 365, SharePoint
                        Intranet, and Power Platform.</p>
                    </div>
                    <div className="buttons-grid">
                      <a href="https://www.avenga.com/our-expertise/microsoft-development/"
                        className="ai-btn ai-btn--circle" title="Explore Microsoft">
                        Explore Microsoft                        </a>


                    </div>

                  </div>
                </div>
                <div id="panel-648036a386c66041087650" className={showTab===6?"tabs__panel is-active ":"tabs__panel"} role="tabpanel" data-accordion-item="" >
                  <img width="450" height="620" src="https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Ivan-Kurza.png"
                    className="tab__image object-fit-contain object-fit-bottom d-none d-m-block" alt="" decoding="async"
                    loading="lazy"
                    srcset="https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Ivan-Kurza.png 450w,
                https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Ivan-Kurza-218x300.png 218w"
                    sizes="(max-width: 450px) 100vw, 450px" />
                  <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false"
                    aria-label="Blockchain">
                    <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      </g>
                    </svg>              </button>

                  <div className="tab__content tab__content--has-image" style={{ height: '430px' }}>

                    <div className="tab__text wysiwyg">
                      <p className="pfs2">Dive deep into a new realm of digital security with blockchain technology.
                        Experienced blockchain developers at Avenga create decentralized solutions and apps for our clients to ensure enhanced traceability and the security of transactions and data.</p>
                    </div>
                    <div className="buttons-grid">

                      <a href="https://www.avenga.com/our-expertise/blockchain/" className="ai-btn ai-btn--circle"
                        title="Explore Blockchain ">
                        Explore Blockchain                         </a>


                    </div>

                  </div>
                </div>
              </div>

              <div className="tabs__nav d-none d-m-block" role="tablist">
                <div className="tabs__nav-item text-right">
                  <a className= {showTab===1?"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab clickevent is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab "}
                   onClick={()=>handletab(1)} href="#panel-648036a386005074492147" role="tab">
                    Cloud </a>
                </div>
                <div className="tabs__nav-item text-right">
                        <a className={showTab===2?"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab clickevent is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab "}
                     onClick={()=>handletab(2)} href="#panel-648036a38628d401417169" role="tab">
                    Automation              </a>
                </div>
                <div className="tabs__nav-item text-right">
                  <a className={showTab===3?"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab clickevent is-active ": "tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab "} 
                                      onClick={()=>handletab(3)} href="#panel-648036a386509974032461" role="tab">
                    Data and AI              </a>
                </div>
                <div className="tabs__nav-item text-right">
                  <a className={showTab===4?"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab clickevent is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab"}  
                                onClick={()=>handletab(4)}       href="#panel-648036a3867a5707739493" role="tab">
                    Salesforce              </a>
                </div>
                <div className="tabs__nav-item text-right">
                  <a className= {showTab===5?"tabs__nav-button tabs__nav-button--left tabs__nav-button--black js-tab clickevent is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--black js-tab"}
                                      onClick={()=>handletab(5)} href="#panel-648036a3869ff846876083" role="tab">
                    Microsoft              </a>
                </div>
                <div className="tabs__nav-item text-right">
                  <a className={showTab===6?"tabs__nav-button tabs__nav-button--left tabs__nav-button--black js-tab clickevent is-active ":"tabs__nav-button tabs__nav-button--left tabs__nav-button--black js-tab"} 
                                      onClick={()=>handletab(6)} href="#panel-648036a386c66041087650" role="tab">
                    Blockchain              </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>

  )
}

export default Technology
