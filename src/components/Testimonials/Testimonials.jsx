import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    const transX = useRef(0);

    const slideForward = () => {
        if (transX.current > -50) {
            transX.current -= 25;
            slider.current.style.transform = `translateX(${transX.current}%)`;
        }
    }

    const slideBackward = () => {
        if(transX.current < 0) {
            transX.current += 25
            slider.current.style.transform = `translateX(${transX.current}%)`
        }
    }

    return (
        <div className='testimonials'>
            <img
                src={next_icon}
                alt="next icon" 
                className='next-btn'
                onClick={slideForward} 
            />
            <img
                src={back_icon}
                alt="back icon"
                className='back-btn'
                onClick={slideBackward}
            />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="user icon" />
                                <div>
                                    <h3>Jessica Pearson</h3>
                                    <span>Pearson and Partners, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at University was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="user icon" />
                                <div>
                                    <h3>Jose Miguel Antonio</h3>
                                    <span>iProspect, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at University was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="user icon" />
                                <div>
                                    <h3>Candice (Candy) Jackson</h3>
                                    <span>American Express, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at University was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="user icon" />
                                <div>
                                    <h3>William Baker</h3>
                                    <span>Agora Gallery, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at University was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
