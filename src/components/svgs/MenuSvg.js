import React from 'react';
import { browserHistory, Link } from 'react-router';


const handleClick = destination => (
  browserHistory.push(`/${destination}`)
);


const MenuSvg = () => (
  <div className="row">
    <svg width="100%" viewBox="0 0 516 258" version="1.1" preserveAspectRatio="xMidYMid meet" >

    <g id="Bestest" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Desktop-HD" transform="translate(-453.000000, -383.000000)">
            <g id="home-menu" transform="translate(444.000000, 345.000000)">
                <Link to="/experience" className="clickable">
                <text id="XPERIENCE" fontFamily="Lato-Light, Lato" fontSize="24" fontWeight="300" letterSpacing="3" fill="#B3E5FC">
                    <tspan id="experience" opacity="0" x="0" y="248">XPERIENCE</tspan>
                </text>
                </Link>
                <Link to="/education" className="clickable">
                <text className="clickable" id="DUCATION" onClick={() => handleClick('education')} fontFamily="Lato-Light, Lato" fontSize="24" fontWeight="300" letterSpacing="3" fill="#B3E5FC">
                    <tspan id="education" opacity="0" className="clickable" x="0" y="200">DUCATION</tspan>
                </text>
                </Link>
                <Link to="/expertise" className="clickable">
                <text className="clickable" id="XPERTISE" fontFamily="Lato-Light, Lato" fontSize="24" fontWeight="300" letterSpacing="3" fill="#B3E5FC">
                    <tspan id="expertise" opacity="0" x="0" y="295">XPERTISE</tspan>
                </text>
                </Link>
                <g id="Group-2" fill="#FFFFFF">
                    <text id="MENU" stroke="#FFFFFF" fontFamily="Lato-Black, Lato" fontSize="155" fontWeight="700" letterSpacing="19.375" fillOpacity="0">
                        <tspan x="0" y="153">MENU</tspan>
                    </text>
                    <text id="E" stroke="#FFFFFF" fontFamily="Lato-Black, Lato" fontSize="155" fontWeight="bold" letterSpacing="19.375">
                        <tspan id="e" x="168" y="153">E</tspan>
                    </text>
                    <text id="START-HERE" transform="translate(164.500000, 239.500000) rotate(-90.000000) translate(-164.500000, -239.500000) " fontFamily="Lato-Light, Lato" fontSize="16" fontWeight="300" letterSpacing="2">
                        <tspan id="starthere" opacity="0" x="109.54" y="246">START HERE</tspan>
                    </text>
                </g>
            </g>
        </g>
    </g>
    <animate xlinkHref="#education" attributeName="opacity" from="0" to="1" begin="1.5s" dur="0.5s" repeatCount="1" fill="freeze" />
    <animate xlinkHref="#education" attributeName="x" from="200" to="257" begin="1.5s" dur="0.5s" repeatCount="1" fill="freeze" calcMode="spline" keySplines="0 0 0.58 1" keyTimes="0;1"/>
    <animate xlinkHref="#experience" attributeName="opacity" from="0" to="1" begin="1.5s" dur="0.75s" repeatCount="1" fill="freeze" />
    <animate xlinkHref="#experience" attributeName="x" from="200" to="257" begin="1.5s" dur="0.75s" repeatCount="1" fill="freeze" calcMode="spline" keySplines="0 0 0.58 1" keyTimes="0;1"/>
    <animate xlinkHref="#expertise" attributeName="opacity" from="0" to="1" begin="1.5s" dur="1s" repeatCount="1" fill="freeze" />
    <animate xlinkHref="#expertise" attributeName="x" from="200" to="257" begin="1.5s" dur="1s" calcMode="spline" keySplines="0 0 0.58 1" keyTimes="0;1" repeatCount="1" fill="freeze" />
    <animate xlinkHref="#e" attributeName="y" from="153" to="294" begin="0.25s" dur="1.5s" repeatCount="1" fill="freeze" calcMode="spline" keySplines="0 0 0.58 1" keyTimes="0;1" />
    <animate xlinkHref="#starthere" attributeName="opacity" from="0" to="1" begin="2.25s" dur="1s" repeatCount="1" fill="freeze" />

</svg>
  </div>
);

MenuSvg.propTypes = {};

export default MenuSvg;
