import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import renderMarkdown from '../utils/renderMarkdown';
import Card from './Card';
import Title from './Title';
import SubTitleLink from './SubTitleLink';
import Breadcrumbs from './Breadcrumbs';

const experiences = [
  {
    id: 'exp09',
    title: 'Software Developer: Systems Analyst Senior',
    place: 'Asheville, NC',
    latitude: -82.548876,
    longitude: 35.595564,
    organization: 'The City of Asheville',
    organization_link: 'http://www.ashevillenc.gov/',
    start: 'Jan, 2016',
    end: 'Mar, 2017',
    logo: null,
    accomplishments: [
      'Assisted in recovery efforts following a catastrophic failure of core IT GIS infrastructure by rapidly redeploying critical applications',
      'Implemented an  upgrade of the entire GIS infrastructure for the City of Asheville',
      'Rapidly developed a replacement to a mission-critical web service using Node, Express, and Heroku, check it out [here](http://www.mapwnc.org/)',
      'Developed a simple real-time AngularJS application called [Where\'s Parking](http://www.ashevillenc.gov/departments/parking/find_parking.htm) to display up to the minute parking information to the public for the City of Asheville',
      'Diagnosed and resolved GIS and database issues for departments across the City of Asheville',
      'Worked with team members to develop a new data architecture of the City of Asheville',
      'Worked with team members to develop a new version of the City of Asheville\'s [SimpliCity](http://simplicity.ashevillenc.gov/#/search) web app using React, Redux, and GraphQL',
    ],
  },
  {
    id: 'exp08',
    title: 'Civic Programmer: Systems Analyst II',
    place: 'Asheville, NC',
    latitude: -82.548876,
    longitude: 35.595564,
    organization: 'The City of Asheville',
    organization_link: 'http://www.ashevillenc.gov/',
    start: 'Jul, 2014',
    end: 'Jan, 2016',
    logo: null,
    accomplishments:[
      'Developed an innovative web application called [SimpliCity](http://simplicity.ashevillenc.gov/#/search) using iterative usability tests which simplified the way that citizens and city employees accessed data provided by the City of Asheville: utilizing AngularJS, Node.js, PostgreSQL/PostGIS, ArcGIS REST API, AWS EC2, and Github Pages',
      'Designed and developed an award winning intranet called OneAsheville for the City of Asheville using Wordpress creating a custom, responsive theme, custom post types, and several small AngularJS applications',
      'Designed and deployed a dashboard web app to disseminate information on the City’s graffiti removal program within 2 weeks of starting of the job',
      'Delivered technological advice, assistance, and information products while serving on cross-functional, interdepartmental teams',
      'Provided expertise to diagnose and resolve issues related to GIS and enterprise application operations and upgrades',
    ],
  },
  {
    id: 'exp07',
    title: 'Software Engineer',
    place: 'Asheville, NC',
    latitude: -82.554188,
    longitude: 35.486468,
    organization: 'Locus Technologies',
    organization_link: 'http://locustec.com/',
    start: 'Aug, 2013',
    end: 'Jul, 2014',
    logo: null,
    accomplishments: [
      'Rewrote an existing Flex and Cold Fusion web application with AngularJS and J2EE REST API',
      'Collaborated with a small team designing the new web application’s software architecture',
      'Developed a client side single page CRUD application using the Angular JS featuring: a database configurable UI, nested routing, reusable components, central HTTP request handling, form validation.',
      'Designed a responsive UI/UX using SASS Bootstrap 3 using a mobile first design approach',
      'Designed data structures for RESTful APIs; including forms, grids, and dashboard entities',
      'Improved an existing database design to better facilitate data management, retrieval, and scalability',
      'Using a GIS API I had previously written as a contractor with Locus, wrote a web mapping application using AngularJS',
    ],
  },
  {
    id: 'exp06',
    title: 'Contractor',
    place: 'Asheville, NC',
    latitude: -82.554188,
    longitude: 35.486468,
    organization: 'Locus Technologies',
    organization_link: 'http://locustec.com/',
    start: 'Apr, 2013',
    end: 'Aug, 2013',
    logo: null,
    accomplishments: [
      'Wrote a customized GIS API for the Google Maps JavaScript V3 API with an interactive layer list, a legend for toggling layer visibility and styling labels, methods for creating markers, polylines, and polygons from GeoJSON, methods for adding WMS and Image Overlays to Google Maps, methods for performing interactive spatial queries, such as finding: locations within radius of a point on the map, locations within a radius of an address, and locations within a polygon drawn on the map, measuring distance and areas, displaying location details, and printing live maps.',
      'Used the API above to build Google Maps web applications for Locus Technologies’ EIM Platform and Los Alamos National Laboratories Intellus website',
      'Used JQuery/JQueryUI to build the UI to perform application logic and  AJAX HTTP requests to a Cold Fusion backend connected to Microsoft SQL Server databases',
    ],
  },
  {
    id: 'exp05',
    title: 'Research-Teaching Assistant',
    place: 'Boone, NC',
    latitude: -81.678829,
    longitude: 36.212527,
    organization: 'Appalachian State University',
    organization_link: 'http://www.appstate.edu/',
    start: 'Aug, 2011',
    end: 'May, 2013',
    logo: null,
    accomplishments: [
      'Managed a water quality monitoring program in the Upper South Fork of New River, NC',
      'Maintained a database of over 400,000 water quality measurements',
      'Collected and statistically analyzed stream water samples and measurements (using SPSS)',
      'Instructed labs in GIS, Python & VBA programming, ArcHydro, HEC-RAS,  environmental science',
    ],
  },
  {
    id: 'exp04',
    title: 'Service Technician (Gutter Monkey)',
    place: 'Asheville, NC',
    latitude: -82.593201,
    longitude: 35.576005,
    organization: 'Higher Ground Rainwater Systems',
    organization_link: 'http://hg-rainwater.com/',
    start: 'Jan, 2011',
    end: 'Aug, 2011',
    logo: null,
    accomplishments: [
      'Cleaned a lot of roofs and gutters',
    ],
  },
  {
    id: 'exp03',
    title: 'Staff and Router Setter',
    place: 'Asheville, NC',
    latitude: -82.555972,
    longitude: 35.594748,
    organization: 'Climbmax Climbing Center',
    organization_link: 'http://www.climbmaxnc.com/',
    start: 'Mar, 2009',
    end: 'Aug, 2011',
    accomplishments: [
      'Helped with general gym operations',
      'Set climbing routes',
      'Instructed belay and climbing classes',
      'Had a great time!',
    ],
  },
  {
    id: 'exp02',
    title: 'Clerk',
    place: 'Pisgah Forest, NC',
    latitude: -82.703822,
    longitude: 35.273314,
    organization: 'Carlyle General Store',
    organization_link: null,
    start: 'Jan, 2007',
    end: 'Aug, 2008',
    accomplishments: [
      'Managed inventory',
      'Provided customer service',
      'Helped out my dad',
    ],
  },
  {
    id: 'exp01',
    title: 'Logistics Coordinator',
    place: 'Al Asad, Iraq',
    latitude: 10.34983,
    longitude: 43.621509,
    organization: 'Kellog Brown and Root- LOGCAP III',
    organization_link: 'https://www.kbr.com/',
    start: 'Oct, 2005',
    end: 'Nov, 2006',
    accomplishments: [
      'Assisted US Army and Marines with Movement Control Team operations',
      'Managed a database tracking the location and status of vehicle platforms in the area of operations',
      'Monitored and eliminated the backlog of transportation assets',
      'Received inbound cargo and notified consignees of cargo arrival to ensure timely pickup of cargo',
      'Manifested and staged outbound convoys',
    ],
  },
  {
    id: 'exp00',
    title: 'Transportation Management Coordinator',
    place: 'Livorno, Italy',
    latitude: 10.34983,
    longitude: 43.621509,
    organization: 'US Army',
    organization_link: 'https://www.kbr.com/',
    start: 'Sep, 2001',
    end: 'Sep, 2005',
    accomplishments: [
      'Conducted in operations in Italy, Bulgaria, Romania, Kosovo, Macedonia (FYROM), Turkey, Kuwait, and Iraq for a Movement Control Team',
      'Executed technical expertise under a range of conditions, including combat zones, conducting truck, rail, and air transport operations',
      'Used US Army computer programs to plan the movement of units and maintain in-transit visibility',
      'Created rail and truck builds, and prepared diplomatic clearances & customs documentation',
    ],
  },
];

const TimelineTitle = styled.h1`
  font-size: 4em;
  font-weight: 700;
  color: #607D8B;
  text-align: center;
`;

const Place = styled.a`
    cursor: pointer;
    color: #03A9F4;
    &:hover{
      color: #0288D1;
    }
`;

const DateRange = styled.div`
  float: right;
  display: inline;
  color: #B0BEC5;
`;

const OrganizationDisabled = styled.p`
  font-size: 1.5em;
  font-weight: 700;
`;

const Accomplishment = styled.div`
  background: ${props => (props.odd ? '#CFD8DC' : '#ECEFF1')};
  color: ${props => (props.odd ? '#607D8B' : '#78909C')};
  font-size: 1.2em;
  margin: 5px 0px;
  padding: 5px;
  vertical-align: middle;
  >p {
    margin: 0px;
  }
`;

const PresentBlurb = styled.p`
  font-size: 1.5em;
  color: #607D8B;
`;



const renderAccomplishments = (accomplishments) => {
  return (
      accomplishments.map((a, i) => (
        <Accomplishment key={i} odd={i % 2} dangerouslySetInnerHTML={renderMarkdown(a)} />
      ))
  );
};

const renderOrganization = (org, link) => {
  if (link === null) {
    return <OrganizationDisabled>{ `@ ${org}`}</OrganizationDisabled>;
  }
  return <SubTitleLink href={link} target="_blank" >{`@ ${org}`}</SubTitleLink>;
};

const Present = () => (
  <div className="col-md-8 col-md-offset-2 col-xs-12">
    <TimelineTitle>PRESENT</TimelineTitle>
    <Card background="#FFF" padding="25px">
      <PresentBlurb>My girlfriend and I are currently travelling and climbing around the Southwestern United States. Near the end of April, we will be calling Salt Lake City, Utah our new home, and will be looking for exciting oppurtunities in the area. In the spirt of transparency, open source, and open data, you can watch my public exit iterview with the City of Asheville, here.</PresentBlurb>
    </Card>
  </div>
);


const SingleExperience = ({ exp }) => (
  <div className="col-md-8 col-md-offset-2 col-xs-12">
    <TimelineTitle>{exp.end.toUpperCase()}</TimelineTitle>
    <Card background="#FFF" padding="15px"  >
      <Place>{exp.place}</Place>
      <DateRange>{`${exp.start.toUpperCase()}- ${exp.end.toUpperCase()}`}</DateRange>
      <Title>{exp.title}</Title>
      { renderOrganization(exp.organization, exp.organization_link) }
      <Card background="#FFF" padding="5px">
        { renderAccomplishments(exp.accomplishments) }
      </Card>
    </Card>
  </div>
);


const Experience = () => (
  <div className="container">
    <Breadcrumbs crumbs={['EXPERIENCE']} />
    <div className="row">
      <Present />
      {
        experiences.map(exp => (<SingleExperience key={exp.id} exp={exp} />))
      }
    </div>
  </div>
);

Experience.propTypes = {};

export default Experience;




