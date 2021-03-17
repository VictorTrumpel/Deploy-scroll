import {Tween, Timeline} from 'react-gsap';
import React from "react";


const BindingContainer = ({progress}) => (
    <Timeline
        progress={progress}
        paused
    >
      <div className="progress-list-deploy binding-container">
        <div className="sql-redis-line line">
          <svg width="128" height="47" viewBox="0 0 128 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{opacity: 0}} to={{opacity: 1}}>
              <path d="M61.957 0.352539V26.6745" stroke="#DDE4F5" strokeWidth="2" strokeDasharray="12 4"/>
              <path d="M1.67188 46.2038V26.6746H126.489V46.2038" stroke="#DDE4F5" strokeWidth="2" strokeDasharray="12 4"/>
            </Tween>
          </svg>
        </div>
        <div className="postre-redis-line line">
          <svg width="47" height="155" viewBox="0 0 47 155" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{opacity: 0}} to={{opacity: 1}}>
              <path d="M0.587891 1.13696H20.9662V153.125H0.587891" stroke="#DDE4F5" strokeWidth="2" strokeDasharray="12 4"/>
              <path d="M19.2676 77.5557H46.4387" stroke="#DDE4F5" strokeWidth="2" strokeDasharray="12 4"/>
            </Tween>
          </svg>
        </div>
        <div className="python-maria-line line">
          <svg>
            <svg width="74" height="47" viewBox="0 0 74 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Tween from={{opacity: 0}} to={{opacity: 1}}>
                <path d="M0.779297 1.0105H72.1034V46.8617" stroke="#DDE4F5" strokeWidth="2" strokeDasharray="12 4"/>
              </Tween>
            </svg>
          </svg>
        </div>
        <div className="node-container-line line">
          <svg width="257" height="125" viewBox="0 0 307 125" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{opacity: 0}} to={{opacity: 1}}>
              <path d="M35 38V46.25H37V38H35Z" fill="#DDE4F5"/>
              <path d="M245 46.25V38H243V46.25H245Z" fill="#DDE4F5"/>
              <path d="M37 51.75H35V61H42V59H37V51.75Z" fill="#DDE4F5"/>
              <path d="M245 61V51.75H243V59H238V61H245Z" fill="#DDE4F5"/>
              <path d="M46 61H58V59H46V61Z" fill="#DDE4F5"/>
              <path d="M62 61H74V59H62V61Z" fill="#DDE4F5"/>
              <path d="M78 61H90V59H78V61Z" fill="#DDE4F5"/>
              <path d="M94 61H106V59H94V61Z" fill="#DDE4F5"/>
              <path d="M110 61H122V59H110V61Z" fill="#DDE4F5"/>
              <path d="M126 61H138V59H126V61Z" fill="#DDE4F5"/>
              <path d="M142 61H154V59H142V61Z" fill="#DDE4F5"/>
              <path d="M158 61H170V59H158V61Z" fill="#DDE4F5"/>
              <path d="M174 61H186V59H174V61Z" fill="#DDE4F5"/>
              <path d="M192 61H202V59H190V65.25H192V61Z" fill="#DDE4F5"/>
              <path d="M206 61H218V59H206V61Z" fill="#DDE4F5"/>
              <path d="M222 61H234V59H222V61Z" fill="#DDE4F5"/>
              <path d="M190 68.75V79.25H192V68.75H190Z" fill="#DDE4F5"/>
              <path d="M190 82.75V88H192V82.75H190Z" fill="#DDE4F5"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 37.75V32H2V37.75H0ZM142 32V37.75H140V32H142ZM0 53.0833V41.5833H2V53.0833H0ZM142 41.5833V53.0833H140V41.5833H142ZM0 68.4167V56.9167H2V68.4167H0ZM142 56.9167V68.4167H140V56.9167H142ZM0 83.75V72.25H2V83.75H0ZM142 72.25V83.75H140V72.25H142ZM0 99.0833V87.5833H2V99.0833H0ZM142 87.5833V99.0833H140V87.5833H142ZM0 114.417V102.917H2V114.417H0ZM142 102.917V114.417H140V102.917H142ZM0 118.25H2V123H6.83333V125H0V118.25ZM142 118.25V125H135.167V123H140V118.25H142ZM22.3889 125H10.7222V123H22.3889V125ZM37.9444 125H26.2778V123H37.9444V125ZM53.5 125H41.8333V123H53.5V125ZM69.0556 125H57.3889V123H69.0556V125ZM84.6111 125H72.9444V123H84.6111V125ZM100.167 125H88.5V123H100.167V125ZM115.722 125H104.056V123H115.722V125ZM131.278 125H119.611V123H131.278V125Z" fill="#DDE4F5"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M287.5 2H283V0H287.5V2ZM299.5 2H290.5V0H299.5V2ZM307 2H302.5V0H307V2Z" fill="#DDE4F5"/>
            </Tween>
          </svg>
        </div>
      </div>
    </Timeline>
)

export default BindingContainer