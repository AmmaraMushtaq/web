import React, { useState } from 'react'
import { Container, } from '@mui/material'
import '../Styles/services.css'

const StrategySer = () => {
  const [showTab,setShowTab]=useState(1)
  const handletab=(e)=>{
    setShowTab(e)

  }
  return (
    <>



      <Container sx={{ width: '100vw ', padding: "3%", backgroundColor: '#00c2ff' }}>
        <section class="vertical-tabs vertical-tabs--bg-blue vertical-tabs--white vertical-tabs--equal-height js-tabs-equal-height ai-section section--indents-large">
          <div class="ai-section__bg vertical-tabs__bg" ></div>
          <div className="ai-section__inner ai-section__container vertical-tabs__inner" >

            <h2 className="vertical-tabs__title hfs1" >Our Services</h2>

            <div className="tabs js-tabs" data-accordion="">

              <div className="tabs__content">
                <div id="panel-6486ec406c3c3951874318" className={showTab===1?"tabs__panel is-active":"tabs__panel"} role="tabpanel" data-accordion-item="">
                  <img width="450" height="620" src="https://www.avenga.com/wp-content/uploads/2022/12/Ivan-Kohut.png" className="tab__image object-fit-contain object-fit-bottom d-none d-m-block" alt="" decoding="async" loading="lazy" srcset="https://www.avenga.com/wp-content/uploads/2022/12/Ivan-Kohut.png 450w, https://www.avenga.com/wp-content/uploads/2022/12/Ivan-Kohut-218x300.png 218w" sizes="(max-width: 450px) 100vw, 450px" />
                  <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false" aria-label="Strategy">
                    <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </svg> 
                     </button>

                  <div className="tab__content tab__content--has-image" style={{ height: ' 430px' }}>
                    <div className="tab__buttons-container js-buttons-slider">
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/technology-consulting/" tabindex="-1" >
                        Technology consulting </a>
                        <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/digital-transformation/" tabindex="-1" >
                        Digital transformation  </a>
                        <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/research-development/" >
                        Research and development   </a>
                        <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/customer-experience/" tabindex="-1" >
                        Customer experience   </a>
                        </div>

                    <div className="tab__text wysiwyg">
                      <p className="pfs2">Avenga brings personalization to digitalization. Feasible, grounded in reality, and tied to the client’s business goals, our digital strategy services generate commercial value with custom-tailored digital transformation strategies.</p>
                    </div>

                    <div className="buttons-grid">
                      <a href="https://www.avenga.com/offering/strategy/" className="ai-btn ai-btn--circle" title="Explore strategy">
                        Explore strategy   </a>
                    </div>

                  </div>
                </div>
                <div id="panel-6486ec406c64f623978950" className={showTab===2?"tabs__panel is-active ":'tabs__panel'} role="tabpanel" data-accordion-item="" >
                  <img width="450" height="620" src="https://www.avenga.com/wp-content/uploads/2022/12/Pavlo-Domanskyy.png" className="tab__image object-fit-contain object-fit-bottom d-none d-m-block" alt="" decoding="async" loading="lazy" srcset="https://www.avenga.com/wp-content/uploads/2022/12/Pavlo-Domanskyy.png 450w, https://www.avenga.com/wp-content/uploads/2022/12/Pavlo-Domanskyy-218x300.png 218w" sizes="(max-width: 450px) 100vw, 450px" />
                  <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false" aria-label="Solution engineering">
                    <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </svg>              </button>

                  <div className="tab__content tab__content--has-image" style={{ height: '430px' }}>
                    <div className="tab__buttons-container js-buttons-slider">
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/custom-software-development/" tabindex="-1" >
                        Custom software development  </a>
                        <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/mobile-app-development/" tabindex="-1" >
                        Mobile development  </a>
                        <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/web-software-development/" >
                        Web development  </a>
                        <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/ui-ux/" tabindex="-1" >
                        UI/UX </a>
                        <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/qa-testing-services/" tabindex="-1" >
                        QA  </a>
                        <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/enterprise-software-development/" tabindex="-1" >
                        Enterprise software development  </a>
                        </div>

                    <div className="tab__text wysiwyg">
                      <p className="pfs2">Our clients choose Avenga because we deliver systematic solutions and not stand-alone bits of software. This business-driven approach to solution engineering lets us design, develop, and implement software that alleviates intricate business scenarios at the core.</p>
                    </div>
                    <div className="buttons-grid">
                      <a href="https://www.avenga.com/offering/solution-engineering/" className="ai-btn ai-btn--circle" title="Explore solution engineering">
                        Explore solution engineering   </a>

                    </div>
                  </div>
                </div>
                <div id="panel-6486ec406c881040326704" className={showTab===3?"tabs__panel is-active ":'tabs__panel'} role="tabpanel" data-accordion-item="" >
                  <img width="450" height="620" src="https://www.avenga.com/wp-content/uploads/2022/12/Andrii-Stashko-Ziablietsov-1.png" className="tab__image object-fit-contain object-fit-bottom d-none d-m-block" alt="Andrii Stashko-Ziablietsov" decoding="async" loading="lazy" srcset="https://www.avenga.com/wp-content/uploads/2022/12/Andrii-Stashko-Ziablietsov-1.png 450w, https://www.avenga.com/wp-content/uploads/2022/12/Andrii-Stashko-Ziablietsov-1-218x300.png 218w" sizes="(max-width: 450px) 100vw, 450px" />
                  <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false" aria-label="Maintenance and support">
                    <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </svg> </button>

                  <div className="tab__content tab__content--has-image" style={{ height: '430px' }}>
                    <div className="tab__buttons-container js-buttons-slider">
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/managed-services/" >
                        Application support</a>
                        <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/managed-services/" tabindex="-1" >
                        Infrastructure maintenance </a>
                        </div>

                    <div className="tab__text wysiwyg">
                      <p className="pfs2">Stability, scalability, and business continuity are what our managed services are all about. Avenga experts cover an extended suite of managed services from on-premise hosting in our data centers to globally scaled and cloud-based turn-key solutions.</p>
                    </div>
                    <div className="buttons-grid">
                      <a href="https://www.avenga.com/offering/managed-services/" className="ai-btn ai-btn--circle" title="Explore maintenance and support">
                        Explore maintenance and support  </a>

                    </div>

                  </div>
                </div>
                <div id="panel-6486ec406ca94052608869" className={showTab===4?"tabs__panel is-active ":"tabs__panel"} role="tabpanel" data-accordion-item="" >
                  <img width="450" height="620"
                    src="https://www.avenga.com/wp-content/uploads/2022/12/Paulina-Stochel.png" className="tab__image object-fit-contain object-fit-bottom d-none d-m-block" alt="" decoding="async" loading="lazy" srcset="https://www.avenga.com/wp-content/uploads/2022/12/Paulina-Stochel.png 450w, https://www.avenga.com/wp-content/uploads/2022/12/Paulina-Stochel-218x300.png 218w" sizes="(max-width: 450px) 100vw, 450px" />
                  <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false" aria-label="Staffing services">
                    <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </svg> 
                     </button>

                  <div className="tab__content tab__content--has-image" style={{ height: '430px' }}>
                    <div className="tab__buttons-container js-buttons-slider">
                      <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/dedicated-team/" tabindex="-1" >
                        Dedicated team  </a>
                        <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/staff-augmentation/" tabindex="-1" >
                        Staff augmentation  </a>
                        <a className="tab__button ai-btn ai-btn--xsmall ai-btn--primary-lighter" target="_self" href="https://www.avenga.com/offering/permanent-recruitment/" >
                        Permanent recruitment  </a></div>

                    <div className="tab__text wysiwyg">
                      <p className="pfs2">Fast and reliable staffing services delivered on your terms. Avenga transforms, complements or creates in-house teams from scratch. Get the expertise and experience needed on short notice, as we are ready to cover a recruitment project of any size.</p>
                    </div>
                    <div className="buttons-grid">
                      <a href="https://www.avenga.com/offering/staffing-services/" className="ai-btn ai-btn--circle" title="Explore staffing services">
                        Explore staffing services   </a>

                    </div>

                  </div>
                </div>
              </div>

              <div className="tabs__nav d-none d-m-block" role="tablist">
                <div className="tabs__nav-item text-right">
                  <a className= {showTab===1?"tabs__nav-button tabs__nav-button--left tabs__nav-button--whitejs-tab clickevent is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--whitejs-tab"}   
                     onClick={()=>handletab(1)} href="#panel-6486ec406c3c3951874318" role="tab">
                    Strategy              </a>
                </div>
                <div className="tabs__nav-item text-right">
                  <a className={showTab===2?"tabs__nav-button tabs__nav-button--left tabs__nav-button--whitejs-tab clickevent is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--whitejs-tab"}    
                      onClick={()=>handletab(2)} href="#panel-6486ec406c64f623978950" role="tab">
                    Solution engineering              </a>
                </div>
                <div className="tabs__nav-item text-right">
                  <a className={showTab===3?"tabs__nav-button tabs__nav-button--left tabs__nav-button--whitejs-tab clickevent is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--whitejs-tab"}  
                        onClick={()=>handletab(3)} href="#panel-6486ec406c881040326704" role="tab">
                    Maintenance and support              </a>
                </div>
                <div className="tabs__nav-item text-right">
                  <a className={showTab===4?"tabs__nav-button tabs__nav-button--left tabs__nav-button--whitejs-tab clickevent is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--whitejs-tab"}   
                     onClick={()=>handletab(4)} href="#panel-6486ec406ca94052608869" role="tab">
                    Staffing services              </a>
                </div>
              </div>

            </div>
          </div></section>

      </Container>



    </>
  )
}

export default StrategySer