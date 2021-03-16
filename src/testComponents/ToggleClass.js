import styled from 'styled-components';
import {Controller, Scene} from "react-scrollmagic";

const ClassToggleStyled = styled.div`
  .section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .test {
	  transition: width 0.3s ease-out;
	  width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 !important;
    
    &.yellow {
      background-color: yellow;
    }
  }

  .zap {
    width: 100%;
  }
  
  .docker-logo {
    margin-bottom: 100px;
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 1s;
    
    h4 {
      position: absolute;
      width: 200px;
      margin-left: 500px
    }
    
    .circle {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .docker {
      position: absolute;
      width: 60px;
      height: 60px;
    }
  }
  
  .fade-in {
    opacity: 1;
  }
  
  .slide-left {
    transform: translateX(200px);
  }
  
  .return {
    transform: translateX(0px);
  }
`;

function ToggleClass() {
  return (
      <ClassToggleStyled>
        <section className="section">
          <h1>Just a content</h1>
        </section>

        <div id="trigger">
        </div>
        <Controller>
          <Scene duration={200} classToggle="zap" triggerElement="#trigger" indicators={true}>
            {(progress, event) => (
                <div className="test">Pin Test {event.type} {progress}</div>
            )}
          </Scene>

          <Scene classToggle={['.test', 'yellow']} indicators={true}>
            <div>Toggle other class</div>
          </Scene>
        </Controller>

        <section className="section">
          <h1>Just a content</h1>
        </section>

        <Controller>
          <Scene duration={170} classToggle="fade-in" indicators={true}>
            <div className="docker-logo">
              <span className="circle">
                <svg width="100%" height="100%" viewBox="0 0 209 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                        <circle cx="104.326" cy="104.24" r="80.2396" fill="#0048FF"/>
                        <circle cx="104.326" cy="104.24" r="77.2396" stroke="white" strokeWidth="6"/>
                    </g>
                    <defs>
                        <filter id="filter0_d" x="0.0859375" y="0" width="208.479" height="208.479" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="12"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.743055 0 0 0 0 0.876666 0 0 0 0 1 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                    </defs>
                </svg>
              </span>
              <span className="docker">
                <svg width="100%" height="100%" viewBox="0 0 96 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M95.088 31.6484C90.5754 37.1447 81.7332 36.7155 81.7332 36.7155C76.28 60.2088 43.3471 72.1658 20.4816 66.2919C-2.38155 60.42 0.76361 33.1496 0.76361 33.1496H67.6797C73.2019 33.1496 73.6226 31.4715 73.6226 31.4715C68.7281 19.864 76.2802 13.6407 76.2802 13.6407C82.1541 14.6913 83.6209 24.7585 83.6209 24.7585C88.442 23.8936 92.314 24.9225 94.6825 25.9126C94.9197 27.7957 95.0579 29.7091 95.088 31.6484Z" fill="white"/>
                  <path d="M17.2669 22.5215H7.89648V31.0517H17.2669V22.5215Z" fill="white"/>
                  <path d="M29.0404 22.5215H19.6699V31.0517H29.0404V22.5215Z" fill="white"/>
                  <path d="M64.3646 22.5215H54.9941V31.0517H64.3646V22.5215Z" fill="white"/>
                  <path d="M52.5892 22.5215H43.2188V31.0517H52.5892V22.5215Z" fill="white"/>
                  <path d="M52.5892 0.706665H43.2188V9.2369H52.5892V0.706665Z" fill="white"/>
                  <path d="M40.8138 22.5215H31.4434V31.0517H40.8138V22.5215Z" fill="white"/>
                  <path d="M29.0404 11.6132H19.6699V20.1434H29.0404V11.6132Z" fill="white"/>
                  <path d="M52.5892 11.6132H43.2188V20.1434H52.5892V11.6132Z" fill="white"/>
                    <path d="M40.8138 11.6132H31.4434V20.1434H40.8138V11.6132Z" fill="white"/>
                </svg>
              </span>
              <h4>Just fade-in</h4>
            </div>
          </Scene>

          <Scene duration={170} classToggle="return" indicators={true}>
            <div className="docker-logo slide-left fade-in">
              <span className="circle">
                <svg width="100%" height="100%" viewBox="0 0 209 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                        <circle cx="104.326" cy="104.24" r="80.2396" fill="#0048FF"/>
                        <circle cx="104.326" cy="104.24" r="77.2396" stroke="white" strokeWidth="6"/>
                    </g>
                    <defs>
                        <filter id="filter0_d" x="0.0859375" y="0" width="208.479" height="208.479" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="12"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.743055 0 0 0 0 0.876666 0 0 0 0 1 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                    </defs>
                </svg>
              </span>
              <span className="docker">
                <svg width="100%" height="100%" viewBox="0 0 96 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M95.088 31.6484C90.5754 37.1447 81.7332 36.7155 81.7332 36.7155C76.28 60.2088 43.3471 72.1658 20.4816 66.2919C-2.38155 60.42 0.76361 33.1496 0.76361 33.1496H67.6797C73.2019 33.1496 73.6226 31.4715 73.6226 31.4715C68.7281 19.864 76.2802 13.6407 76.2802 13.6407C82.1541 14.6913 83.6209 24.7585 83.6209 24.7585C88.442 23.8936 92.314 24.9225 94.6825 25.9126C94.9197 27.7957 95.0579 29.7091 95.088 31.6484Z" fill="white"/>
                  <path d="M17.2669 22.5215H7.89648V31.0517H17.2669V22.5215Z" fill="white"/>
                  <path d="M29.0404 22.5215H19.6699V31.0517H29.0404V22.5215Z" fill="white"/>
                  <path d="M64.3646 22.5215H54.9941V31.0517H64.3646V22.5215Z" fill="white"/>
                  <path d="M52.5892 22.5215H43.2188V31.0517H52.5892V22.5215Z" fill="white"/>
                  <path d="M52.5892 0.706665H43.2188V9.2369H52.5892V0.706665Z" fill="white"/>
                  <path d="M40.8138 22.5215H31.4434V31.0517H40.8138V22.5215Z" fill="white"/>
                  <path d="M29.0404 11.6132H19.6699V20.1434H29.0404V11.6132Z" fill="white"/>
                  <path d="M52.5892 11.6132H43.2188V20.1434H52.5892V11.6132Z" fill="white"/>
                    <path d="M40.8138 11.6132H31.4434V20.1434H40.8138V11.6132Z" fill="white"/>
                </svg>
              </span>
              <h4>Just a slide</h4>
            </div>
          </Scene>


        </Controller>

        <section className="section">
          <h1>Just a content</h1>
        </section>
      </ClassToggleStyled>
  );
}

export default ToggleClass;
