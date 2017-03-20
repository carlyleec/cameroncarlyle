import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import renderMarkdown from '../utils/renderMarkdown';
import flatten from '../utils/flatten';
import Card from './Card';
import Title from './Title';
import SubTitleLink from './SubTitleLink';
import Breadcrumbs from './Breadcrumbs';

const schools = [
  {
    id: 'appstate',
    title: 'Appalachian State University',
    link: 'http://www.appstate.edu/',
    city: 'Boone',
    state: 'NC',
    latitude: -81.678829,
    longitude: 36.212527,
    degree_type: 'MA',
    degree: 'Geography',
    concentration: 'Geographic Information Science',
    graduation_month: 'May',
    graduation_year: 2013,
    coursework: [
      'Advanced GIS',
      'Web GIS & Database Design',
      'Digital Image Processing',
      'Python & C++ for GIS',
      'Principles of Geocomputation',
      'Seminar in GIS',
      'Advanced Quantitative and Qualitative Methods in Geography',
    ],
    markdown: 'I did a fair amount of field work in graduate school, but the majority of my time was spent in the GIS lab developing an algorithm to calculate the extent of riparian zones in Southern Appalachian headwater catchments. You can read about my thesis research here: [The Influence of Impervious Surface Location on Water\nQuality in the Headwater of the Southern Appalachian Mountains](http://libres.uncg.edu/ir/asu/f/Carlyle,%20E.%20Cameron_2013_Thesis.pdf)',
  },
  {
    id: 'unca',
    title: 'University of North Carolina, Asheville',
    link: 'https://www.unca.edu/',
    city: 'Asheville',
    state: 'NC',
    latitude: -82.565303,
    longitude: 35.616909,
    degree_type: 'BS',
    degree: 'Environmental Studies',
    concentration: 'Earth Science',
    graduation_month: 'May',
    graduation_year: 2010,
    coursework: [
      'Hydrogeology',
      'Mineralogy & Petrology',
      'Environmental Geology',
      'Soils',
      'Ecology and Field Biology',
      'Environmental Ethics',
      'Environmental Management',
      'Environmental Economics',
      'International Relations',
      'Economic Development',
      'Humanities',
      'Introduction to GIS'
    ],
    markdown: 'While my studies were focused on Environmental Science and Geology, I feel that the courses that I took in the Humanities have had the most lasting effect on how I think and my current world view.',
  },
  {
    id: 'abtech', 
    title: 'Asheville Buncombe Technical Community College',
    link: 'https://www.abtech.edu/',
    city: 'Asheville',
    state: 'NC',
    latitude: -82.555266,
    longitude: 35.570638,
    degree_type: '',
    degree: '',
    concentration: 'College Transfer',
    graduation_month: 'August',
    graduation_year: 2008,
    coursework: [
      'English & Literature',
      'Calculus',
      'Chemistry',
      'Physics',
      'Geology',
      'Introduction to GIS',
      'GIS Data Models',
      'Georeferencing and Mapping',
      'Micro & Macro Economics'
    ],
    markdown: '',
  },
];





const last2schools = schools.slice(0, 2);
const courses = flatten(schools.map(school => (school.coursework)));


const GraduationDate = styled.div`
  float: right;
  display: inline;
  color: #B0BEC5;
`;

const SchoolBlurb = styled.p`
  font-size: 1.3em;
  color: #607D8B;
  min-height: 200px;
  margin-top: 10px;
  vertical-align: center;
`;

const Course = styled.p`
  font-size: 1.5em;
  color: #78909C;
  vertical-align: middle;
  line-height: normal;
  display: inline-block;
`;

const SectionTitle = styled.h1`
  font-size: 3em;
  font-weight: 700;
  color: #FFF;
  text-align: center;
  margin-bottom: 30px;
`;

const School = ({ school }) => (
  <div className="col-md-6">
    <Card background="#FFF" padding="15px">
      <GraduationDate>{`${school.graduation_month.toUpperCase()}, ${school.graduation_year}`}</GraduationDate>
      <Title>{`${school.degree_type} ${school.degree}`}</Title>
      <SubTitleLink href={school.link} target="_blank">{ school.title }</SubTitleLink>
      <SchoolBlurb dangerouslySetInnerHTML={renderMarkdown(school.markdown)} />
    </Card>
  </div>
);

const Courses = () => (
  <div >
    {
      courses.map(course => (
        <div className="col-md-4">
          <Card background="#ECEFF1" padding="10px" style={{ lineHeight: '100px', textAlign: 'center', height: '120px' }}>
            <Course>{course}</Course>
          </Card>
        </div>
      ))
    }
  </div>
);


const Education = () => (
  <div className="container">
    <Breadcrumbs crumbs={['EDUCATION']}/>
    <SectionTitle>DEGREES</SectionTitle>
    {
      last2schools.map(school => (<School key={school.id} school={school} />))
    }
    <Link to="/experience">Experience</Link> |
    <Link to="/expertise">Expertise</Link>
  </div>
);

Education.propTypes = {};

export default Education;
