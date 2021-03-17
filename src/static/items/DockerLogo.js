import React from 'react';

const DockerLogo = React.forwardRef((props, ref) => (
    <div ref={ref} className="docker-logo">
      <svg width="100%" height="100%" viewBox="0 0 237 237" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <circle cx="118.5" cy="118.5" r="94.5" fill="#0048FF"/>
          <circle cx="118.5" cy="118.5" r="91.5" stroke="white" strokeWidth="6"/>
        </g>
        <path d="M174.754 118.405C169.439 124.895 159.025 124.388 159.025 124.388C152.603 152.127 113.817 166.244 86.888 159.309C59.9615 152.376 63.6656 120.178 63.6656 120.178H142.474C148.978 120.178 149.473 118.196 149.473 118.196C143.709 104.491 152.603 97.1436 152.603 97.1436C159.521 98.384 161.248 110.27 161.248 110.27C166.926 109.249 171.487 110.464 174.276 111.633C174.555 113.856 174.718 116.115 174.754 118.405Z" fill="white"/>
        <path d="M83.1003 107.629H72.0645V117.701H83.1003V107.629Z" fill="white"/>
        <path d="M96.9684 107.629H85.9326V117.701H96.9684V107.629Z" fill="white"/>
        <path d="M138.569 107.629H127.533V117.701H138.569V107.629Z" fill="white"/>
        <path d="M124.703 107.629H113.667V117.701H124.703V107.629Z" fill="white"/>
        <path d="M124.703 81.8721H113.667V91.9437H124.703V81.8721Z" fill="white"/>
        <path d="M110.835 107.629H99.7988V117.701H110.835V107.629Z" fill="white"/>
        <path d="M96.9684 94.7495H85.9326V104.821H96.9684V94.7495Z" fill="white"/>
        <path d="M124.703 94.7495H113.667V104.821H124.703V94.7495Z" fill="white"/>
        <path d="M110.835 94.7495H99.7988V104.821H110.835V94.7495Z" fill="white"/>
        <defs>
          <filter id="filter0_d" x="0" y="0" width="237" height="237" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
    </div>
));

export default DockerLogo;