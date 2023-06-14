import React,{useState} from 'react'
import {Container,Box} from '@mui/material'
import '../Styles/bpartner.css'
import ReactPlayer from 'react-player'

const Values = () => {
  const [showTab ,setShowTab]= useState(1)
  const handletab=(e)=>{
    setShowTab(e)
  }
  return (
    <>

      <Container maxWidth='lg' sx={{ width: '100vw ', padding: "3%" }}>
      <Box sx={{}}>
      <section class="globe-section ai-section section--indents-large" >
      <div class="ai-section__inner" >

<div class="ai-container">
  <div class="globe-section__grid">
        <div className="ai-section__inner ai-section__container vertical-tabs__inner" >

          <h2 className="vertical-tabs__title hfs1" >Values</h2>

          <div className="tabs js-tabs" data-accordion="">

            <div className="tabs__content">
              <div id="panel-647e7709402fe941274270" className={showTab===1?"tabs__panel is-active":"tabs__panel"} role="tabpanel" data-accordion-item="">

                <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false" aria-label="Leadership">
                  <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </svg>   
                    </button>

                <div className="tab__content" style={{ height: '598px' }}>

                  <div className="tab__text wysiwyg">
                    <p className="pfs2" >Leadership is ubiquitous at every level in Avenga. We don’t believe in superiors. We believe in leaders who also happen to be brilliant experts.</p>
                    <p><a className="ai-btn ai-btn--circle" href="https://www.avenga.com/about/leadership-team/">Explore Leadership</a></p>
                  </div>
                  <div className="video-item-wrap mb-last-0">
                  {/* <ReactPlayer light=   url="https://youtu.be/7SzTUotDNH4"/> */}
                 

                    <div className="video-item mb-last-0">
                     <img width="768" height="398" src="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg" 
                      className="video-item__poster object-fit-cover" alt="" decoding="async" loading="lazy" 
                      srcset="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg 768w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-300x156.jpg 300w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1024x531.jpg 1024w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1536x796.jpg 1536w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1.jpg 1813w" sizes="(max-width: 768px) 100vw, 768px" />           
                       <button className="js-ai-popup play-btn" aria-label="Play Video" data-url="https://youtu.be/7SzTUotDNH4">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 25C0 11.2 11.2 0 25 0C38.8 0 50 11.2 50 25C50 38.8 38.8 50 25 50C11.2 50 0 38.8 0 25ZM22 15.25C21.175 14.625 20 15.225 20 16.25V33.75C20 34.775 21.175 35.375 22 34.75L33.675 26C34.35 25.5 34.35 24.5 33.675 24L22 15.25Z" fill="#00C2FF"></path>
                        </svg>     
                         </button> 
                    </div> 
                  </div> 



                </div>
              </div>
              <div id="panel-647e770940d6a120729470" className={showTab===2?"tabs__panel is-active":"tabs__panel"} role="tabpanel" data-accordion-item="" >

                <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false" aria-label="Shippability">
                  <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </svg>              </button>

                <div className="tab__content" style={{ height: '598px' }}>

                  <div className="tab__text wysiwyg">
                    <p className="pfs2">We have a clear vision of how project roadmaps should be translated into results that are nurtured by years of experience.</p>
                  </div>

                  <div className="video-item-wrap mb-last-0">
                    <div className="video-item mb-last-0">
                      <img width="768" height="398" src="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg" className="video-item__poster object-fit-cover" alt="" decoding="async" loading="lazy" srcset="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg 768w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-300x156.jpg 300w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1024x531.jpg 1024w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1536x796.jpg 1536w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1.jpg 1813w" sizes="(max-width: 768px) 100vw, 768px" />          
                       <button className="js-ai-popup play-btn" aria-label="Play Video" data-url="https://youtu.be/7SzTUotDNH4">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 25C0 11.2 11.2 0 25 0C38.8 0 50 11.2 50 25C50 38.8 38.8 50 25 50C11.2 50 0 38.8 0 25ZM22 15.25C21.175 14.625 20 15.225 20 16.25V33.75C20 34.775 21.175 35.375 22 34.75L33.675 26C34.35 25.5 34.35 24.5 33.675 24L22 15.25Z" fill="#00C2FF"></path>
                        </svg>      </button>
                    </div>
                  </div>



                </div>
              </div>
              <div id="panel-647e770941123533699589" className={showTab===3?"tabs__panel is-active":'tabs__panel'} role="tabpanel" data-accordion-item="" >

                <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false" aria-label="Sustainability">
                  <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </svg>              </button>

                <div className="tab__content" style={{ height: '598px' }}>

                  <div className="tab__text wysiwyg">
                    <p className="pfs2">Guided by the UN goals of sustainable development, Avenga contributes to the global sustainability effort by giving people opportunities to work, learn, grow and change the world for the better.</p>
                    <p><a className="ai-btn ai-btn--circle" href="https://www.avenga.com/sustainability/">Explore Sustainability</a></p>
                  </div>

                  <div className="video-item-wrap mb-last-0">
                    <div className="video-item mb-last-0">
                      <img width="768" height="398" src="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg" className="video-item__poster object-fit-cover" alt="" decoding="async" loading="lazy" srcset="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg 768w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-300x156.jpg 300w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1024x531.jpg 1024w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1536x796.jpg 1536w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1.jpg 1813w" sizes="(max-width: 768px) 100vw, 768px" />            <button className="js-ai-popup play-btn" aria-label="Play Video" data-url="https://youtu.be/7SzTUotDNH4">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 25C0 11.2 11.2 0 25 0C38.8 0 50 11.2 50 25C50 38.8 38.8 50 25 50C11.2 50 0 38.8 0 25ZM22 15.25C21.175 14.625 20 15.225 20 16.25V33.75C20 34.775 21.175 35.375 22 34.75L33.675 26C34.35 25.5 34.35 24.5 33.675 24L22 15.25Z" fill="#00C2FF"></path>
                        </svg>      </button>
                    </div>
                  </div>



                </div>
              </div>
              <div id="panel-647e770941447249948491" className={showTab===4?"tabs__panel is-active":"tabs__panel"} role="tabpanel" data-accordion-item="" >

                <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false" aria-label="Quality">
                  <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </svg>              </button>

                <div className="tab__content" style={{ height: '598px' }}>

                  <div className="tab__text wysiwyg">
                    <p className="pfs2">At Avenga, we make sure that quality goes hand-in-hand with velocity without the former being hindered.</p>
                  </div>

                  <div className="video-item-wrap mb-last-0">
                    <div className="video-item mb-last-0">
                     <img width="768" height="398" src="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg" className="video-item__poster object-fit-cover" alt="" decoding="async" loading="lazy" srcset="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg 768w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-300x156.jpg 300w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1024x531.jpg 1024w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1536x796.jpg 1536w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1.jpg 1813w" sizes="(max-width: 768px) 100vw, 768px" />  
                               <button className="js-ai-popup play-btn" aria-label="Play Video" data-url="https://youtu.be/7SzTUotDNH4">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 25C0 11.2 11.2 0 25 0C38.8 0 50 11.2 50 25C50 38.8 38.8 50 25 50C11.2 50 0 38.8 0 25ZM22 15.25C21.175 14.625 20 15.225 20 16.25V33.75C20 34.775 21.175 35.375 22 34.75L33.675 26C34.35 25.5 34.35 24.5 33.675 24L22 15.25Z" fill="#00C2FF"></path>
                        </svg>      </button>
                    </div>
                  </div> 



                </div>
              </div>
              <div id="panel-647e770941796647253551" className={showTab===5?"tabs__panel is-active":"tabs__panel "} role="tabpanel" data-accordion-item="" >

                <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false" aria-label="Responsibility">
                  <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </svg>              </button>

                <div className="tab__content" style={{ height: '598px' }}>

                  <div className="tab__text wysiwyg">
                    <p className="pfs2">Empowering businesses to grow and prosper, we are guided by the principles of social responsibility</p>
                  </div>

                  <div className="video-item-wrap mb-last-0">
                    <div className="video-item mb-last-0">
                      <img width="768" height="398" src="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg" className="video-item__poster object-fit-cover" alt="" decoding="async" loading="lazy" srcset="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg 768w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-300x156.jpg 300w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1024x531.jpg 1024w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1536x796.jpg 1536w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1.jpg 1813w" sizes="(max-width: 768px) 100vw, 768px" />            <button className="js-ai-popup play-btn" aria-label="Play Video" data-url="https://youtu.be/7SzTUotDNH4">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 25C0 11.2 11.2 0 25 0C38.8 0 50 11.2 50 25C50 38.8 38.8 50 25 50C11.2 50 0 38.8 0 25ZM22 15.25C21.175 14.625 20 15.225 20 16.25V33.75C20 34.775 21.175 35.375 22 34.75L33.675 26C34.35 25.5 34.35 24.5 33.675 24L22 15.25Z" fill="#00C2FF"></path>
                        </svg>      </button>
                    </div>
                  </div>



                </div>
              </div>
              <div id="panel-647e770941b0f089841594" className={showTab===6?"tabs__panel is-active" :"tabs__panel"}role="tabpanel" data-accordion-item="" >

                <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false" aria-label="Trust ">
                  <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </svg>              </button>

                <div className="tab__content" style={{ height: '598px',width:'500px' }}>

                  <div className="tab__text wysiwyg">
                    <p className="pfs2">At Avenga, we trust each other and this trust is reflected in our 350+ loyal customers. Trust doesn’t come by default and we understand that.</p>
                  </div>

                  <div className="video-item-wrap mb-last-0">
                    <div className="video-item mb-last-0">
                      <img width="768" height="398" src="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg" className="video-item__poster object-fit-cover" alt="" decoding="async" loading="lazy" srcset="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg 768w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-300x156.jpg 300w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1024x531.jpg 1024w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1536x796.jpg 1536w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1.jpg 1813w" sizes="(max-width: 768px) 100vw, 768px" />            <button className="js-ai-popup play-btn" aria-label="Play Video" data-url="https://youtu.be/7SzTUotDNH4">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 25C0 11.2 11.2 0 25 0C38.8 0 50 11.2 50 25C50 38.8 38.8 50 25 50C11.2 50 0 38.8 0 25ZM22 15.25C21.175 14.625 20 15.225 20 16.25V33.75C20 34.775 21.175 35.375 22 34.75L33.675 26C34.35 25.5 34.35 24.5 33.675 24L22 15.25Z" fill="#00C2FF"></path>
                        </svg>      </button>
                    </div>
                  </div>



                </div>
              </div>
              <div id="panel-647e770941eca341156295" className={showTab===7?"tabs__panel is-active" :"tabs__panel"} role="tabpanel" data-accordion-item="" >

                <button className="accordion-toggle d-m-none js-accordion-toggle" type="button" aria-expanded="false" aria-label="Improvement">
                  <svg className="accordion-toggle__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M4 8L12 16L20 8" stroke="#0E0F11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </svg>              </button>

                <div className="tab__content" style={{ height: '598px' }}>

                  <div className="tab__text wysiwyg">
                    <p className="pfs2">There is no such thing as perfection. There is always room for improvement and we are on the constant hunt so as to become an even better tech partner for our clients.</p>
                  </div>

                  <div className="video-item-wrap mb-last-0">
                    <div className="video-item mb-last-0">
                      <img width="768" height="398" src="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg" className="video-item__poster object-fit-cover" alt="" decoding="async" loading="lazy" srcset="https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-768x398.jpg 768w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-300x156.jpg 300w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1024x531.jpg 1024w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1-1536x796.jpg 1536w, https://www.avenga.com/wp-content/uploads/2022/12/Video-Adamchyk1.jpg 1813w" sizes="(max-width: 768px) 100vw, 768px" />
                      <button className="js-ai-popup play-btn" aria-label="Play Video" data-url="https://youtu.be/7SzTUotDNH4">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 25C0 11.2 11.2 0 25 0C38.8 0 50 11.2 50 25C50 38.8 38.8 50 25 50C11.2 50 0 38.8 0 25ZM22 15.25C21.175 14.625 20 15.225 20 16.25V33.75C20 34.775 21.175 35.375 22 34.75L33.675 26C34.35 25.5 34.35 24.5 33.675 24L22 15.25Z" fill="#00C2FF"></path>
                        </svg>      </button>
                    </div>
                  </div>



                </div>
              </div>
            </div>

            <div className="tabs__nav d-none d-m-block" role="tablist">
              <div className="tabs__nav-item text-right">
                <a className={showTab===1?"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab clickevent is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab"}
                 onClick={()=>handletab(1)} href="#panel-647e7709402fe941274270" role="tab">
                  Leadership              </a>
              </div>
              <div className="tabs__nav-item text-right">
                <a className={showTab===2?"tabs__nav-button tabs__nav-button--left tabs__nav-button--black js-tab clickevent  is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab"}
                  onClick={()=>handletab(2)} href="#panel-647e770940d6a120729470" role="tab">
                  Shippability              </a>
              </div>
              <div className="tabs__nav-item text-right">
                <a className={showTab===3?"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab clickevent is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab"} 
                onClick={()=>handletab(3)} href="#panel-647e770941123533699589" role="tab">
                  Sustainability              </a>
              </div>
              <div className="tabs__nav-item text-right">
                <a className={showTab===4?"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab clickevent is-active ":"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab"}
                 onClick={()=>handletab(4)} href="#panel-647e770941447249948491" role="tab">
                  Quality              </a>
              </div>
              <div className="tabs__nav-item text-right">
                <a className={showTab===5?"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab clickevent is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab"}
                 onClick={()=>handletab(5)} href="#panel-647e770941796647253551" role="tab">
                  Responsibility              </a>
              </div>
              <div className="tabs__nav-item text-right">
                <a className={showTab===6?"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab clickevent is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab"}
                onClick={()=>handletab(6)} href="#panel-647e770941b0f089841594" role="tab">
                  Trust               </a>
              </div>
              <div className="tabs__nav-item text-right">
                <a className={showTab===7?"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab clickevent is-active":"tabs__nav-button tabs__nav-button--left tabs__nav-button--blackjs-tab"} 
               onClick={()=>handletab(7)} href="#panel-647e770941eca341156295" role="tab">
                  Improvement              </a>
              </div>
            </div>

          </div>
        </div>
        </div>
        </div></div>
        </section>
        </Box>
      </Container>
    </>
  )
}

export default Values