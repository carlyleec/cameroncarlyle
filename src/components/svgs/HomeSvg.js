import React from 'react';
import { browserHistory, Link } from 'react-router';


const handleClick = destination => (
  browserHistory.push(`/${destination}`)
);


const HomeSvg = () => (
  <div className="row">
    <svg width="100%" viewBox="0 0 559 346" version="1.1" preserveAspectRatio="xMidYMid meet">
      <g id="home-copy" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="desktop" transform="translate(-434.000000, -299.000000)">
          <g id="home" transform="translate(433.000000, 287.000000)">
            <text id="CAMERON-CARLYLE" fontFamily="Lato-Bold, Lato" fontSize="50" fontWeight="bold" letterSpacing="6.25" fill="#90A4AE">
              <tspan x="0.2125" y="49">CAMERON CARLYLE</tspan>
            </text>
            <g id="home-menu" transform="translate(12.000000, 59.000000)">
              <Link to="/education">
                <rect id="education-react" fill="#FFFFFF" x="256" y="176" width="148" height="31"></rect>
              </Link>
              <Link to="/experience">
                <rect id="experience-rect" fill="#FFFFFF" x="256" y="224" width="158" height="31"></rect>
              </Link>
              <Link to="/expertise" >
                <rect id="expertise-rect" fill="#FFFFFF" x="256" y="268" width="133" height="31"></rect>
              </Link>
              <Link to="/experience">
                <text id="XPERIENCE" fontFamily="Lato-Light, Lato" fontSize="24" fontWeight="300" letterSpacing="3" fill="#1976D2">
                  <tspan id="experience" x="257" y="247" opacity="0">XPERIENCE</tspan>
                </text>
              </Link>
              <Link to="/education">
                <text id="DUCATION" fontFamily="Lato-Light, Lato" fontSize="24" fontWeight="300" letterSpacing="3" fill="#1976D2">
                  <tspan id="education" x="256" y="199" opacity="0">DUCATION</tspan>
                </text>
              </Link>
              <Link to="/expertise" >
                <text id="XPERTISE" fontFamily="Lato-Light, Lato" fontSize="24" fontWeight="300" letterSpacing="3" fill="#1976D2">
                  <tspan id="expertise" x="258" y="294" opacity="0">XPERTISE</tspan>
                </text>
              </Link>
              <g id="Group-2">
                <text id="MENU" stroke="#90A4AE" fontFamily="Lato-Black, Lato" fontSize="155" fontWeight="700" letterSpacing="19.375" fillOpacity="0" fill="#FFFFFF">
                  <tspan x="0" y="153">MENU</tspan>
                </text>
                <text id="E" stroke="#90A4AE" fontFamily="Lato-Bold, Lato" fontSize="155" fontWeight="bold" letterSpacing="19.375" fill="#90A4AE">
                  <tspan id="e" x="167" y="293">E</tspan>
                </text>
                <text id="START-HERE" transform="translate(163.500000, 238.500000) rotate(-90.000000) translate(-163.500000, -238.500000) " fontFamily="Lato-Light, Lato" fontSize="16" fontWeight="300" letterSpacing="2" fill="#90A4AE">
                  <tspan id="starthere" opacity="0" x="108.54" y="245">START HERE</tspan>
                </text>
              </g>
            </g>
            <text id="DESIGN&amp;DEVELOPMENT" fontFamily="Lato-Bold, Lato" fontSize="20" fontWeight="bold" letterSpacing="17.9047604" fill="#90A4AE">
                <tspan x="10.1871568" y="80">DESIGN&amp;DEVELOPMENT</tspan>
              </text>
          </g>
        </g>
      </g>
      <animate xlinkHref="#education" attributeName="opacity" from="0" to="1" begin="1.5s" dur="0.5s" repeatCount="1" fill="freeze" />
      <animate xlinkHref="#education" attributeName="x" from="200" to="257" begin="1.5s" dur="0.5s" repeatCount="1" fill="freeze" calcMode="spline" keySplines="0 0 0.58 1" keyTimes="0;1" />
      <animate xlinkHref="#experience" attributeName="opacity" from="0" to="1" begin="1.5s" dur="0.75s" repeatCount="1" fill="freeze" />
      <animate xlinkHref="#experience" attributeName="x" from="200" to="257" begin="1.5s" dur="0.75s" repeatCount="1" fill="freeze" calcMode="spline" keySplines="0 0 0.58 1" keyTimes="0;1" />
      <animate xlinkHref="#expertise" attributeName="opacity" from="0" to="1" begin="1.5s" dur="1s" repeatCount="1" fill="freeze" />
      <animate xlinkHref="#expertise" attributeName="x" from="200" to="257" begin="1.5s" dur="1s" calcMode="spline" keySplines="0 0 0.58 1" keyTimes="0;1" repeatCount="1" fill="freeze" />
      <animate xlinkHref="#e" attributeName="y" from="153" to="294" begin="0.25s" dur="1.5s" repeatCount="1" fill="freeze" calcMode="spline" keySplines="0 0 0.58 1" keyTimes="0;1" />
      <animate xlinkHref="#starthere" attributeName="opacity" from="0" to="1" begin="2.25s" dur="1s" repeatCount="1" fill="freeze" />
    </svg>
  </div>);

HomeSvg.propTypes = {};

export default HomeSvg;
