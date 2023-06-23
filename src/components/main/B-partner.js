import React,{useState,useEffect} from 'react'
import { Container, Box, } from '@mui/material'

import '../../App.css'
const BPartner = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <>
            
             <section className="globe-section ai-section section--indents-large" >
   
               <div className="ai-section__inner" >

                 <div className="ai-container" >
                   <div className="globe-section__grid" >
                          <div className="globe-section__item globe-section__item--title" >
                            <h2 className="globe-section__title hfs1" >Avenga — partner for your business</h2>
                        </div>

                     <div className="globe-section__item globe-section__item--top-right-content wysiwyg-editor" >
                            <p className="pfs3" >Experienced leadership</p>
                            <p className="pfs3" >Blend of cultures</p>
                            <p className="pfs3" >Designed for sustainability</p>
                            <p className="pfs3" >Committed to the highest quality</p>
                        </div>

                         <div className="globe-section__item globe-section__item--globe">
                            <div id="globe-area" 
                            data-locations="[{&quot;location&quot;:&quot;Germany&quot;,&quot;name&quot;:&quot;Germany&quot;,&quot;\u0441ontinent&quot;:&quot;Europe&quot;,&quot;professionals&quot;:&quot;3450+&quot;,&quot;clients&quot;:&quot;300+&quot;,&quot;flagUrl&quot;:&quot;https:\/\/www.avenga.com\/wp-content\/themes\/custom-theme\/dist\/images\/icons\/icon-flag-germany.svg&quot;,&quot;coordinates&quot;:{&quot;x&quot;:0.7,&quot;y&quot;:-1.15},&quot;meshName&quot;:&quot;Earth_mesh-Europe&quot;},{&quot;location&quot;:&quot;Ukraine&quot;,&quot;name&quot;:&quot;Ukraine&quot;,&quot;\u0441ontinent&quot;:&quot;Europe&quot;,&quot;professionals&quot;:&quot;3450+&quot;,&quot;clients&quot;:&quot;300+&quot;,&quot;flagUrl&quot;:&quot;https:\/\/www.avenga.com\/wp-content\/themes\/custom-theme\/dist\/images\/icons\/icon-flag-ukraine.svg&quot;,&quot;coordinates&quot;:{&quot;x&quot;:0.8,&quot;y&quot;:-1.5},&quot;meshName&quot;:&quot;Earth_mesh-Europe&quot;},{&quot;location&quot;:&quot;Poland&quot;,&quot;name&quot;:&quot;Poland&quot;,&quot;\u0441ontinent&quot;:&quot;Europe&quot;,&quot;professionals&quot;:&quot;3450+&quot;,&quot;clients&quot;:&quot;300+&quot;,&quot;flagUrl&quot;:&quot;https:\/\/www.avenga.com\/wp-content\/themes\/custom-theme\/dist\/images\/icons\/icon-flag-poland.svg&quot;,&quot;coordinates&quot;:{&quot;x&quot;:0.8,&quot;y&quot;:-1.35},&quot;meshName&quot;:&quot;Earth_mesh-Europe&quot;},{&quot;location&quot;:&quot;Portugal&quot;,&quot;name&quot;:&quot;Portugal&quot;,&quot;\u0441ontinent&quot;:&quot;Europe&quot;,&quot;professionals&quot;:&quot;3450+&quot;,&quot;clients&quot;:&quot;300+&quot;,&quot;flagUrl&quot;:&quot;https:\/\/www.avenga.com\/wp-content\/themes\/custom-theme\/dist\/images\/icons\/icon-flag-portugal.svg&quot;,&quot;coordinates&quot;:{&quot;x&quot;:0.71,&quot;y&quot;:-0.85},&quot;meshName&quot;:&quot;Earth_mesh-Europe&quot;},{&quot;location&quot;:&quot;Malta&quot;,&quot;name&quot;:&quot;Malta&quot;,&quot;\u0441ontinent&quot;:&quot;Europe&quot;,&quot;professionals&quot;:&quot;3450+&quot;,&quot;clients&quot;:&quot;300+&quot;,&quot;flagUrl&quot;:&quot;https:\/
                            \/www.avenga.com\/wp-content\/themes\/custom-theme\/dist\/images\/icons\/icon-flag-malta.svg&quot;,&quot;coordinates&quot;:{&quot;x&quot;:0.61,&quot;y&quot;:-1.15},&quot;meshName&quot;:&quot;Earth_mesh-Europe&quot;},{&quot;location&quot;:&quot;USA&quot;,&quot;name&quot;:&quot;USA&quot;,&quot;\u0441ontinent&quot;:&quot;Americas&quot;,&quot;professionals&quot;:&quot;800+&quot;,&quot;clients&quot;:&quot;100+&quot;,&quot;flagUrl&quot;:&quot;https:\/\/www.avenga.com\/wp-content\/themes\/custom-theme\/dist\/images\/icons\/icon-flag-usa.svg&quot;,&quot;coordinates&quot;:{&quot;x&quot;:0.5,&quot;y&quot;:0.5},&quot;meshName&quot;:&quot;Earth_mesh-usa&quot;},{&quot;location&quot;:&quot;Argentina&quot;,&quot;name&quot;:&quot;Argentina&quot;,&quot;\u0441ontinent&quot;:&quot;Americas&quot;,&quot;professionals&quot;:&quot;800+&quot;,&quot;clients&quot;:&quot;100+&quot;,&quot;flagUrl&quot;:&quot;https:\/\/www.avenga.com\/wp-content\/themes\/custom-theme\/dist\/images\/icons\/icon-flag-argentina.svg&quot;,&quot;coordinates&quot;:{&quot;x&quot;:-0.66,&quot;y&quot;:0.23},&quot;meshName&quot;:&quot;Earth_mesh-usa&quot;},{&quot;location&quot;:&quot;Malaysia&quot;,&quot;name&quot;:&quot;Malaysia&quot;,&quot;\u0441ontinent&quot;:&quot;Asia&quot;,&quot;professionals&quot;:&quot;50+&quot;,&quot;clients&quot;:&quot;10+&quot;,&quot;flagUrl&quot;:&quot;https:\/\/www.avenga.com\/wp-content\/themes\/custom-theme\/dist\/images\/icons\/icon-flag-malaysia.svg&quot;,&quot;coordinates&quot;:{&quot;x&quot;:0.11,&quot;y&quot;:-2.87},&quot;meshName&quot;:&quot;Earth_mesh-Malaysia&quot;}]" data-locations-btn="{&quot;title&quot;:&quot;Find partner&quot;,&quot;url&quot;:&quot;https:\/\/www.avenga.com\/contact-avenga\/&quot;,&quot;target&quot;:&quot;&quot;}" data-land-mesh-name="Earth_mesh-land" 
                            data-model-link="https://www.avenga.com/wp-content/themes/custom-theme/dist/models/globe.json"
                             data-professionals-translate="Professionals" data-clients-translate="Clients" className="is-initialized">
                           <div className="globe-area">
                            <div className="location-button-list" style={{gap: '50px'}}>
                            <button className="location-button location-button-active" style={{marginLeft: '50px'}}>
                            <img height="16" width="20" src="https://www.avenga.com/wp-content/themes/custom-theme/dist/images/icons/icon-flag-germany.svg" alt=""/> 
                        Germany</button><button className="location-button" style={{marginleft: '33.3333px'}}>
                                <img height="16" width="20" src="https://www.avenga.com/wp-content/themes/custom-theme/dist/images/icons/icon-flag-ukraine.svg" alt=""/>
                                 Ukraine</button>
                                 <button className="location-button" style={{marginLeft: '16.6667px'}}>
                                    <img height="16" width="20" src="https://www.avenga.com/wp-content/themes/custom-theme/dist/images/icons/icon-flag-poland.svg" alt=""/> Poland</button>
                                    <button className="location-button" style={{marginLeft:' 0px'}}>
                                    <img height="16" width="20" src="https://www.avenga.com/wp-content/themes/custom-theme/dist/images/icons/icon-flag-portugal.svg" alt=""/> 
                                    Portugal</button>
                                    <button className="location-button" style={{marginleft: '0px'}}>
                                        <img height="16" width="20" src="https://www.avenga.com/wp-content/themes/custom-theme/dist/images/icons/icon-flag-malta.svg" alt=""/>
                                         Malta</button>
                                         <button className="location-button" style={{marginleft:' 16.6667px'}}>
                                            <img height="16" width="20" src="https://www.avenga.com/wp-content/themes/custom-theme/dist/images/icons/icon-flag-usa.svg" alt=""/>
                                             USA</button>
                                             <button className="location-button" style={{marginLeft: '33.3333px'}}>
                                                <img height="16" width="20" src="https://www.avenga.com/wp-content/themes/custom-theme/dist/images/icons/icon-flag-argentina.svg" alt=""/> 
                                                Argentina</button>
                                                <button className="location-button" style={{marginLeft: '50px'}}>
                                                <img height="16" width="20" src="https://www.avenga.com/wp-content/themes/custom-theme/dist/images/icons/icon-flag-malaysia.svg" alt=""/>
                                                 Malaysia</button></div>
                                                 <div className="globe-orbit">
                                                    <div className="globe">
                                                        <canvas data-engine="three.js r145" width="545" height="545" style={{display: 'block', width: '606px' ,height: '606px'}}>
                                                    </canvas></div>
                                                    <div className="globe-satellite" style={{transitionDuration: '1000ms ',transform: 'rotate(0.803178)'}}></div>
                                                    <div className="globe-cover">
                                                        </div><a className="ai-btn ai-btn--small globe-link" href="https://www.avenga.com/contact-avenga/">Find partner</a></div>
                                                        <div className="location-description" >
                                                            <div className="location-description-title hfs2">Europe</div>
                                                        <div className="location-description-content"><div>
                                                            <div className="location-description-text-small pfs6">Professionals</div>
                                                        <div className="location-description-text-big hfs3">3450+</div></div>
                                                    <div><div className="location-description-text-small pfs6">Clients</div>
                                                    <div className="location-description-text-big hfs3">300+</div></div></div></div></div></div>
                        </div>
                       
                        <div className="globe-section__item globe-section__item--facts">
                            <div className="facts-grid">
                                <div className="fact">
                                    <p className="fact__title hfs1">4300+</p>
                                    <p className="fact__subtitle pfs3">professionals</p>
                                </div>
                                <div className="fact">
                                    <p className="fact__title hfs1">410+</p>
                                    <p className="fact__subtitle pfs3">happy clients</p>
                                </div>
                                <div className="fact">
                                    <p className="fact__title hfs1">20+</p>
                                    <p className="fact__subtitle pfs3">years of experience</p>
                                </div>
                            </div>
                        </div>
                        {isMobile ? (
                        <div className="globe-section__item"> 
                            <div className="logos-grid logo-grid--mobile-slider js-logos-slider-mobile  ">
                           
                                <div className="logos-grid__item logos-grid__slide__image object-fit-contain colored-highlight " data-slide="">
                                    <img width="225" height="100" src="https://www.avenga.com/wp-content/uploads/2023/01/UN-Global-compact-1.png"
                                     className="logos-grid__image object-fit-contain colored-highlight" alt="UN Global compact" decoding="async" loading="lazy" />                                        
                                     </div>
                                <div className="logos-grid__item logos-grid__slide__image object-fit-contain colored-highlight" data-slide="">
                                    <img width="225" height="100" src="https://www.avenga.com/wp-content/uploads/2023/01/Bronze-stevie-winner.png" 
                                    className="logos-grid__image object-fit-contain colored-highlight" alt="Bronze stevie winner" decoding="async" loading="lazy" />                                           
                                     </div>
                                <div className="logos-grid__item logos-grid__slide__image object-fit-contain colored-highlight" data-slide="">
                                    <img width="225" height="100" src="https://www.avenga.com/wp-content/uploads/2023/01/New-Clutch-2022.png" 
                                    className="logos-grid__image object-fit-contain colored-highlight" alt="New Clutch 2022" decoding="async" loading="lazy" />                                            
                                    </div>
                                <div className="logos-grid__item logos-grid__slide__image object-fit-contain colored-highlight" data-slide="">
                                    <img width="225" height="100" src="https://www.avenga.com/wp-content/uploads/2023/01/Clutch-global-2020.png" 
                                    className="logos-grid__image object-fit-contain colored-highlight" alt="Clutch global 2020" decoding="async" loading="lazy" />                                            
                                    </div>
                                <div className="logos-grid__item logos-grid__slide__image object-fit-contain colored-highlight" data-slide="">
                                    <img width="225" height="100" src="https://www.avenga.com/wp-content/uploads/2023/01/IAOP-Global-outsourcing.png" 
                                    className="logos-grid__image object-fit-contain colored-highlight" alt="IAOP Global outsourcing" decoding="async" loading="lazy" />                                            
                                    </div>
                                <div className="logos-grid__item logos-grid__slide__image object-fit-contain colored-highlight" data-slide="">
                                    <img width="225" height="100" src="https://www.avenga.com/wp-content/uploads/2023/01/Inc.5000.png" 
                                    className="logos-grid__image object-fit-contain colored-highlight" alt="Inc.5000" decoding="async" loading="lazy" />                                            
                                    </div>
                            </div>
                            <div className="logos-grid__item logos-grid__item--btn">
                                    <a href="https://www.avenga.com/about/" title="About Avenga" className="ai-btn ai-btn--circle">
                                        About Avenga                    </a> 
                                </div> 
                            </div>
                            ):(
                                 <div className="globe-section__item"> 
                           <div className="logos-grid logo-grid--mobile-slider js-logos-slider-mobile">
                           
                         <div className="logos-grid__item logos-grid__slide" data-slide="">
                             <img width="225" height="100" src="https://www.avenga.com/wp-content/uploads/2023/01/UN-Global-compact-1.png" className="logos-grid__image object-fit-contain colored-highlight" alt="UN Global compact" decoding="async" loading="lazy" />                                        
                              </div>
                         <div className="logos-grid__item logos-grid__slide" data-slide="">
                             <img width="225" height="100" src="https://www.avenga.com/wp-content/uploads/2023/01/Bronze-stevie-winner.png" className="logos-grid__image object-fit-contain colored-highlight" alt="Bronze stevie winner" decoding="async" loading="lazy" />                                           
                              </div>
                         <div className="logos-grid__item logos-grid__slide" data-slide="">
                             <img width="225" height="100" src="https://www.avenga.com/wp-content/uploads/2023/01/New-Clutch-2022.png" className="logos-grid__image object-fit-contain colored-highlight" alt="New Clutch 2022" decoding="async" loading="lazy" />                                            
                             </div>
                         <div className="logos-grid__item logos-grid__slide" data-slide="">
                             <img width="225" height="100" src="https://www.avenga.com/wp-content/uploads/2023/01/Clutch-global-2020.png" className="logos-grid__image object-fit-contain colored-highlight" alt="Clutch global 2020" decoding="async" loading="lazy" />                                            
                             </div>
                         <div className="logos-grid__item logos-grid__slide" data-slide="">
                             <img width="225" height="100" src="https://www.avenga.com/wp-content/uploads/2023/01/IAOP-Global-outsourcing.png" className="logos-grid__image object-fit-contain colored-highlight" alt="IAOP Global outsourcing" decoding="async" loading="lazy" />                                            
                             </div>
                         <div className="logos-grid__item logos-grid__slide" data-slide="">
                             <img width="225" height="100" src="https://www.avenga.com/wp-content/uploads/2023/01/Inc.5000.png" className="logos-grid__image object-fit-contain colored-highlight" alt="Inc.5000" decoding="async" loading="lazy" />                                            
                             </div> <div className="logos-grid__item logos-grid__item--btn">
                             <a href="https://www.avenga.com/about/" title="About Avenga" className="ai-btn ai-btn--circle">
                                 About Avenga                    </a> 
                         </div>

                         
                     </div></div>
                         )}
                         
                        </div>
                    </div>
                </div>

      
  </section> 
        </>
    )
}

export default BPartner