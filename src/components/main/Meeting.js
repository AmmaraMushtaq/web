
import React, { useState } from 'react'
import Calendar from 'react-calendar';

const Meeting = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date)
    }

  

    // function runAIHsContactFormEn() {
    //     hbspt.forms.create({
    //         region: "na1",
    //         portalId: "6672352",
    //         formId: "f83de081-f707-49c4-891c-f883ef9f6163"
    //     });

    return (
        <>
            <section class="contact-block contact-block--horizontal js-hubspot-form-section ai-section section--indents-large">
                <div class="ai-section__inner">
                    <div class="contact-block__grid">

                        <div class="contact-block__item contact-block__item--meeting">
                            <span class="contact-block__grid-separator pfs7">Or</span>
                            <div class="ai-container">
                                <div class="contact-block__item-inner">

                                    <div class="contact-block__item-coll">
                                        <div class="meeting-heading mb-last-0">
                                            <h4 class="meeting-title pfs3 mb-last-0">Book a meeting</h4>
                                            <p class="meeting-info meeting-info--zoom pfs8 mb-last-0">
                                                Zoom 30 min</p>
                                            <p class="meeting-info meeting-info--phone pfs8 mb-last-0">
                                                or call us<a href="tel:+18573023414" class="pfs7 meeting-link">+1 (857) 302-3414</a>
                                            </p>
                                        </div>

                                        <div class="contact-block__calendar">
                                            <div data-url="https://meetings.hubspot.com/yuliia-hnatyk" class="calendar-container js-calendar">
                                                {/* <div><div class="react-calendar">
                                              <div class="react-calendar__navigation">
                                                    <button aria-label="" class="react-calendar__navigation__arrow react-calendar__navigation__prev2-button" disabled="" type="button">
                                                        «</button><button aria-label="" class="react-calendar__navigation__arrow react-calendar__navigation__prev-button" disabled="" type="button">
                                                        ‹</button><button aria-label="" class="react-calendar__navigation__label" disabled="" type="button" style={{ flexGrow: 1 }}>
                                                        <span class="react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from">June</span></button>
                                                    <button aria-label="" class="react-calendar__navigation__arrow react-calendar__navigation__next-button" type="button">
                                                        ›</button><button aria-label="" class="react-calendar__navigation__arrow react-calendar__navigation__next2-button" disabled="" type="button">
                                                        »</button></div> */}
                                                {/*  <div class="react-calendar__viewContainer">
                                                    <div class="react-calendar__month-view ">
                                                        <div style={{ display: 'flex', alignitems: 'flex-end' }}>
                                                         <div style={{ flexGrow: 1, width: '100%' }}> */}
                                                <Calendar onChange={onChange} value={date} />
                                                {console.log(date)}
                                                {date.toString}


                                               
                                                {/* <div class="react-calendar__month-view__weekdays" style={{ display: 'flex' }}>
                                                                    <div class="react-calendar__month-view__weekdays__weekday react-calendar__month-view__weekdays__weekday--weekend" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}>
                                                                        <abbr aria-label="Sunday" title="Sunday">S</abbr></div>
                                                                    <div class="react-calendar__month-view__weekdays__weekday" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}>
                                                                        <abbr aria-label="Monday" title="Monday">M</abbr>
                                                                    </div><div class="react-calendar__month-view__weekdays__weekday" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}>
                                                                        <abbr aria-label="Tuesday" title="Tuesday">T</abbr>
                                                                    </div>
                                                                    <div class="react-calendar__month-view__weekdays__weekday" style={{ flex: ' 0 0 14.2857%', overflow: 'hidden' }}>
                                                                        <abbr aria-label="Wednesday" title="Wednesday">W</abbr>
                                                                    </div>
                                                                    <div class="react-calendar__month-view__weekdays__weekday" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}>
                                                                        <abbr aria-label="Thursday" title="Thursday">T</abbr>
                                                                    </div>
                                                                    <div class="react-calendar__month-view__weekdays__weekday" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}>
                                                                        <abbr aria-label="Friday" title="Friday">F</abbr></div>
                                                                    <div class="react-calendar__month-view__weekdays__weekday react-calendar__month-view__weekdays__weekday--weekend" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}>
                                                                        <abbr aria-label="Saturday" title="Saturday">S</abbr>
                                                                    </div>
                                                                </div> */}
                                                {/* <div class="react-calendar__month-view__days" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" disabled="" type="button" style={{ flex: ' 0 0 14.2857%', overflow: 'hidden', marginLeft: ' 57.1429%' }}>
                                                                        <abbr aria-label="June 1, 2023">1</abbr>
                                                                    </button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" disabled="" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 2, 2023">2</abbr>
                                                                    </button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend" disabled="" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}>
                                                                        <abbr aria-label="June 3, 2023">3</abbr>
                                                                    </button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend" disabled="" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}>
                                                                        <abbr aria-label="June 4, 2023">4</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" disabled="" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}>
                                                                        <abbr aria-label="June 5, 2023">5</abbr></button><button class="react-calendar__tile react-calendar__month-view__days__day" disabled="" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}>
                                                                        <abbr aria-label="June 6, 2023">6</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__tile--now react-calendar__tile--active react-calendar__tile--range react-calendar__tile--rangeStart react-calendar__tile--rangeEnd react-calendar__tile--rangeBothEnds react-calendar__month-view__days__day"
                                                                        type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 7, 2023">7</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 8, 2023">8</abbr>
                                                                    </button><button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}>
                                                                        <abbr aria-label="June 9, 2023">9</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}>
                                                                    <abbr aria-label="June 10, 2023">10</abbr></button><button class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}>
                                                                    <abbr aria-label="June 11, 2023">11</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 12, 2023">12</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 13, 2023">13</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 14, 2023">14</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 15, 2023">15</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 16, 2023">16</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 17, 2023">17</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 18, 2023">18</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 19, 2023">19</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 20, 2023">20</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 21, 2023">21</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 22, 2023">22</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 23, 2023">23</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 24, 2023">24</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 25, 2023">25</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 26, 2023">26</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 27, 2023">27</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 28, 2023">28</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 29, 2023">29</abbr></button>
                                                                    <button class="react-calendar__tile react-calendar__month-view__days__day" type="button" style={{ flex: '0 0 14.2857%', overflow: 'hidden' }}><abbr aria-label="June 30, 2023">30</abbr></button>
                                                                </div> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="contact-block__item contact-block__item--form" >
                            <div class="ai-container">
                                <div class="contact-block__item-inner">

                                    <div class="contact-block__item-coll">
                                        <div class="contact-block__wysiwyg wysiwyg mb-last-0" ><p class="pfs3" >Start a conversation</p>
                                            <p class="pfs2" >We’d like to hear from you. Use the contact form below and we’ll get back to you shortly.</p>
                                        </div>
                                        <div class="contact-block__form-wrap"><script data-hubspot-rendered="true">

                                        </script><div id="hbspt-form-2e0c4328-b2a6-4b36-9ae6-3b0d85515efb" class="hbspt-form" data-hs-forms-root="true"><form id="hsForm_f83de081-f707-49c4-891c-f883ef9f6163" method="POST" accept-charset="UTF-8" enctype="multipart/form-data" novalidate=""
                                            action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/6672352/f83de081-f707-49c4-891c-f883ef9f6163" class="hs-form-private hsForm_f83de081-f707-49c4-891c-f883ef9f6163 hs-form-f83de081-f707-49c4-891c-f883ef9f6163 hs-form-f83de081-f707-49c4-891c-f883ef9f6163_2e0c4328-b2a6-4b36-9ae6-3b0d85515efb hs-form stacked"
                                            target="target_iframe_f83de081-f707-49c4-891c-f883ef9f6163" data-instance-id="2e0c4328-b2a6-4b36-9ae6-3b0d85515efb" data-form-id="f83de081-f707-49c4-891c-f883ef9f6163" data-portal-id="6672352">
                                            <div class="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field">
                                                <label id="label-firstname-f83de081-f707-49c4-891c-f883ef9f6163" class="" placeholder="Enter your Full name" for="firstname-f83de081-f707-49c4-891c-f883ef9f6163"><span>Full name</span></label>
                                                <legend class="hs-field-desc" style={{ display: 'none' }}></legend><div class="input">
                                                    <input id="firstname-f83de081-f707-49c4-891c-f883ef9f6163" name="firstname" placeholder="Full name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="" />
                                                </div></div><div class="hs_email hs-email hs-fieldtype-text field hs-form-field"><label id="label-email-f83de081-f707-49c4-891c-f883ef9f6163" class="" placeholder="Enter your Email address" for="email-f83de081-f707-49c4-891c-f883ef9f6163">
                                                    <span>Email address</span><span class="hs-form-required">*
                                                    </span></label><legend class="hs-field-desc" style={{ display: 'none' }}></legend><div class="input">
                                                    <input id="email-f83de081-f707-49c4-891c-f883ef9f6163" name="email" required="" placeholder="Email address" type="email" class="hs-input" inputmode="email" autocomplete="email" value="" />
                                                </div></div><div class="hs_message hs-message hs-fieldtype-textarea field hs-form-field"><label id="label-message-f83de081-f707-49c4-891c-f883ef9f6163" class="" placeholder="Enter your Message" for="message-f83de081-f707-49c4-891c-f883ef9f6163">
                                                    <span>Message</span><span class="hs-form-required">*
                                                    </span></label><legend class="hs-field-desc" style={{ display: 'none' }}></legend><div class="input"><textarea id="message-f83de081-f707-49c4-891c-f883ef9f6163" class="hs-input hs-fieldtype-textarea" name="message" required="" placeholder="Message" rows="1"></textarea></div></div>
                                            <div class="hs_recent_conversion_type hs-recent_conversion_type hs-fieldtype-radio field hs-form-field is-active" style={{ display: 'none' }}>
                                                <label id="label-recent_conversion_type-f83de081-f707-49c4-891c-f883ef9f6163" class="" placeholder="Enter your Recent conversion type" for="recent_conversion_type-f83de081-f707-49c4-891c-f883ef9f6163"><span>Recent conversion type</span></label><legend class="hs-field-desc"
                                                    style={{ display: 'none' }}></legend><div class="input">
                                                    <input name="recent_conversion_type" class="hs-input" type="'hidden'" value="Contacted us" />
                                                </div></div><div class="legal-consent-container"><div><div class="hs-dependent-field"><div class="hs_LEGAL_CONSENT.subscription_type_8300435 hs-LEGAL_CONSENT.subscription_type_8300435 hs-fieldtype-booleancheckbox field hs-form-field">
                                                    <legend class="hs-field-desc" style={{ display: 'none' }}>
                                                    </legend><div class="input"><ul class="inputs-list" required=""><li class="hs-form-booleancheckbox"><label for="LEGAL_CONSENT.subscription_type_8300435-f83de081-f707-49c4-891c-f883ef9f6163" class="hs-form-booleancheckbox-display">
                                                        <input id="LEGAL_CONSENT.subscription_type_8300435-f83de081-f707-49c4-891c-f883ef9f6163" class="hs-input" type="checkbox" name="LEGAL_CONSENT.subscription_type_8300435" value="true" />
                                                        <span><p>Yes, I have read and agree to the <a href="https://www.avenga.com/privacy-policy/" target="_blank" rel="noopener">Data Privacy</a> and
                                                            <a href="https://www.avenga.com/legal-notice/" target="_blank" rel="noopener">Legal Notice.</a>
                                                        </p><span class="hs-form-required">*</span>
                                                        </span></label>

                                                    </li></ul></div></div></div>
                                                    <legend class="hs-field-desc checkbox-desc" style={{ display: 'none' }}></legend></div>
                                                <div class="hs-richtext"><p> </p></div></div><div class="hs_recaptcha hs-recaptcha field hs-form-field">



                                            </div>

                                        </form></div>
                                            <script async="" defer="" onload="runAIHsContactFormEn()" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Meeting