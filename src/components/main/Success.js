import React, { Component } from 'react'
import { Box, Container, styled, Paper, Card, CardMedia, CardContent, Typography } from '@mui/material'
import '../Styles/success.css'
import '../Styles/carreer.css'
import VideoPlayer from 'react-video-js-player';
import song from '../vedio/v1.mp4'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Success = () => {
  const videoSrc = song;
  const Poster = "https://www.avenga.com/wp-content/uploads/2022/12/Paulina-Stochel.png"
  return (
    <>
    

        <Container maxWidth="lg" sx={{ width: "100vw", height: 'auto' }}>
          <Box sx={{}}>
          <section class="case-cards ai-section js-animation js-animation-start-80 case-cards--white section--indents-large is-animate" >
            <div className="ai-container" >
              <div className="case-cards__text-content" >

                <h2 className="case-cards__title hfs1" >Success Stories</h2>

                <div className="case-cards__text"><p className="pfs2" >Unique business situations administered by personalized technology suite solutions are why industry and market leaders trust Avenga with their digital endeavors. A pragmatic and customer-centered approach is behind each of these success stories.</p>
                </div>

              </div>

              <div className="case-cards__grid-items js-case-cards-slider" >
                <article className="case-card case-card--blue" >
                <div className="case-card__inner" data-popup-item="">
                  <div className="case-card__video-container">

                    <div className="case-card__video-background" >
                      <img width="958" height="461" src="https://www.avenga.com/wp-content/uploads/2022/12/UMA-Case-1.png"
                        className="video-background__image object-fit-cover" alt="" decoding="async" loading="lazy"
                        srcset="https://www.avenga.com/wp-content/uploads/2022/12/UMA-Case-1.png 958w,
                    https://www.avenga.com/wp-content/uploads/2022/12/UMA-Case-1-300x144.png 300w, 
                    https://www.avenga.com/wp-content/uploads/2022/12/UMA-Case-1-768x370.png 768w"
                     sizes="(max-width: 958px) 100vw, 958px" />                </div>

                    <button className="case-card__video-button js-ai-popup play-btn" data-url="https://youtu.be/47e-oBQBtx0" aria-label="Press to play a video" tabindex="-1">
                      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 25C0 11.2 11.2 0 25 0C38.8 0 50 11.2 50 25C50 38.8 38.8 50 25 50C11.2 50 0 38.8 0 25ZM22 15.25C21.175 14.625 20 15.225 20 16.25V33.75C20 34.775 21.175 35.375 22 34.75L33.675 26C34.35 25.5 34.35 24.5 33.675 24L22 15.25Z" fill="#00C2FF"></path>
                      </svg>                  </button>

                  </div>


                  <div className="case-card__content case-card__content--white" >

                    <a className="case-card__button ai-btn ai-btn--xsmall ai-btn--white text-truncate-1" href="https://www.avenga.com/our-expertise/ai-services/" target="_self" tabindex="-1" >
                      ML &amp; AI                    </a>

                    <a className="case-card__content-link" href="https://www.avenga.com/success/uma-conversational-ai-assistant/" target="_self" tabindex="-1">

                      <h3 className="text-truncate-2 case-card__content-title hfs7" data-video-title="" >UMA, an AI-powered assistant</h3>

                      <p className="text-truncate-4 case-card__content-description pfs6" data-video-info="">Avenga’s team co-developed a unique UMA platform, which is a privacy-first digital assistant for enterprises that transforms an office into a smart workplace with AI and business intelligence.</p>

                    </a>

                  </div>

                </div>
              </article><article className="case-card case-card--azure" >
                  <div className="case-card__inner" data-popup-item="">
                    <div className="case-card__video-container">

                      <div className="case-card__video-background" >
                        <img width="955" height="461" src="https://www.avenga.com/wp-content/uploads/2022/12/a360-case-1.png"
                          className="video-background__image object-fit-cover" alt="" decoding="async" loading="lazy"
                          srcset="https://www.avenga.com/wp-content/uploads/2022/12/a360-case-1.png 955w, 
                   https://www.avenga.com/wp-content/uploads/2022/12/a360-case-1-300x168.png 300w, 
                   https://www.avenga.com/wp-content/uploads/2022/12/a360-case-1-768x431.png 768w"
                    sizes="(max-width: 955px) 100vw, 955px" />                </div>

                      <button className="case-card__video-button js-ai-popup play-btn" data-url="https://www.youtube.com/watch?v=fmnknso9T48&amp;ab_channel=Avenga" aria-label="Press to play a video" tabindex="0">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 25C0 11.2 11.2 0 25 0C38.8 0 50 11.2 50 25C50 38.8 38.8 50 25 50C11.2 50 0 38.8 0 25ZM22 15.25C21.175 14.625 20 15.225 20 16.25V33.75C20 34.775 21.175 35.375 22 34.75L33.675 26C34.35 25.5 34.35 24.5 33.675 24L22 15.25Z" fill="#00C2FF"></path>
                        </svg>                  </button>

                    </div>


                    <div className="case-card__content case-card__content--black" >

                      <a className="case-card__button ai-btn ai-btn--xsmall ai-btn--white text-truncate-1" href="https://www.avenga.com/our-expertise/cloud-services/" target="_self" tabindex="0" >
                        Cloud solution engineering                    </a>

                      <a className="case-card__content-link" href="https://www.avenga.com/success/custom-cloud-solution-architecture-design/" target="_self" tabindex="0">

                        <h3 className="text-truncate-2 case-card__content-title hfs7" data-video-title="" >Cloud solution architecture design</h3>

                        <p className="text-truncate-4 case-card__content-description pfs6" data-video-info="">Avenga’s partnership with a360inc resulted in industry-level architecture documentation for a new extended case management system, including architectural views, technology trade-off, POC results, and a detailed multi-year implementation plan.</p>

                      </a>

                    </div>

                  </div>
                </article><article className="case-card case-card--blue">
                  <div className="case-card__inner" data-popup-item="">
                    <div className="case-card__video-container">

                      <div className="case-card__video-background" >
                        <img width="959" height="461" src="https://www.avenga.com/wp-content/uploads/2022/12/BEC-case-1.png"
                          className="video-background__image object-fit-cover" alt="" decoding="async" loading="lazy"
                          srcset="https://www.avenga.com/wp-content/uploads/2022/12/BEC-case-1.png 959w,
                    https://www.avenga.com/wp-content/uploads/2022/12/BEC-case-1-300x169.png 300w,
                     https://www.avenga.com/wp-content/uploads/2022/12/BEC-case-1-768x432.png 768w" sizes="(max-width: 959px) 100vw, 959px" />                </div>

                      <button className="case-card__video-button js-ai-popup play-btn" data-url="https://www.youtube.com/watch?v=VxvQjX-k9L0&amp;ab_channel=Avenga" aria-label="Press to play a video" tabindex="-1">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 25C0 11.2 11.2 0 25 0C38.8 0 50 11.2 50 25C50 38.8 38.8 50 25 50C11.2 50 0 38.8 0 25ZM22 15.25C21.175 14.625 20 15.225 20 16.25V33.75C20 34.775 21.175 35.375 22 34.75L33.675 26C34.35 25.5 34.35 24.5 33.675 24L22 15.25Z" fill="#00C2FF"></path>
                        </svg>                  </button>

                    </div>


                    <div className="case-card__content case-card__content--white" >

                      <a className="case-card__button ai-btn ai-btn--xsmall ai-btn--white text-truncate-1" href="https://www.avenga.com/offering/staffing-services/" target="_self" tabindex="-1" >
                        Staff augmentation                    </a>


                      <h3 className="text-truncate-2 case-card__content-title hfs7" data-video-title="">Staff augmentation for a financial company</h3>

                      <p className="text-truncate-4 case-card__content-description pfs6" data-video-info="">“In BEC, we create financial solutions for 20-30% of the Danish bank customers. There was a huge talent gap as the demand for IT professionals was immense. Avenga has proved to be a very strong partner helping us to implement our staff augmentation strategy”, shares Troels Ottesen, Head of BEC Poland.</p>


                    </div>

                  </div>
                </article></div>

              <div className="case-cards__more-button-container" >
                <a href="https://www.avenga.com/success/" target="_self" className="ai-btn ai-btn--circle ai-btn--medium ai-btn--short-arrow ">
                  More stories from clients      </a>
              </div>

            </div>
            </section>
          </Box>
        </Container>
   

    </>
  )
}

export default Success