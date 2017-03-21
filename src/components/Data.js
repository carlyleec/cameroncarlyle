import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Title from './Title';

const postgres = require('../images/postgres.png');
const mysql = require('../images/mysql.png');
const mssql = require('../images/mssqlserver.png');
const mongo = require('../images/mongo.png');
const postgis = require('../images/postgis.png');
const esri = require('../images/esri.png');
const qgis = require('../images/qgis.png');
const mapbox = require('../images/mapbox.png');
const leaflet = require('../images/leaflet.png');
const fme = require('../images/fme.png');
const talend = require('../images/talend.png');
const node = require('../images/node.png');
const python = require('../images/python.png');
const aws = require('../images/aws.png');
const heroku = require('../images/heroku.png');
const d3 = require('../images/d3.png');
const chart = require('../images/chart.png');

const Overview = styled.p``;

const Blurb = styled.p`

`;

const CircleImage = styled.img`
  height: 100px;
  border-radius: 50%;
  padding: 0px;
  margin: 10px;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 
              0 1px 18px 0 rgba(0,0,0,0.12), 
              0 3px 5px -1px rgba(0,0,0,0.3);
`;




const Data = () => (
  <div className="container">
    <Title>DATA</Title>
    <Overview>
       Data plays a central role to almost every project I've worked on: storing and maintaining data in databases, anlaysing and visualizing data using statistics or Geographic Information Systems (GIS), crafting a user experience that engage with the data, or building data infrastructures that define how data is used by an organizaton.
    </Overview>
    <Card padding="10px">
      <Title>DATABASES</Title>
      <Blurb>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora odio aut sint nisi, eveniet rem esse pariatur sed asperiores alias incidunt corporis ducimus ullam impedit illum sit architecto dignissimos temporibus!</Blurb>
      <CircleImage src={postgres} alt="" />
      <CircleImage src={mysql} alt="" />
      <CircleImage src={mssql} alt="" />
      <CircleImage src={mongo} alt="" />
    </Card>
    <Card padding="10px">
      <Title>DATA INFRASTRUCTURE</Title>
      <Blurb>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora odio aut sint nisi, eveniet rem esse pariatur sed asperiores alias incidunt corporis ducimus ullam impedit illum sit architecto dignissimos temporibus!</Blurb>
      <CircleImage src={fme} alt="" />
      <CircleImage src={talend} alt="" />
      <CircleImage src={aws} alt="" />
      <CircleImage src={heroku} alt="" />
      <CircleImage src={node} alt="" />
      <CircleImage src={python} alt="" />
    </Card>
    <Card padding="10px">
      <Title>ENTERPRISE GIS</Title>
      <Blurb>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora odio aut sint nisi, eveniet rem esse pariatur sed asperiores alias incidunt corporis ducimus ullam impedit illum sit architecto dignissimos temporibus!</Blurb>
      <Blurb>PostGIS, ArcGIS for Server, ArcSDE</Blurb>
      <CircleImage src={postgis} alt="" />
      <CircleImage src={esri} alt="" />
    </Card>
    <Card padding="10px">
      <Title>GIS ANALYSIS</Title>
      <Blurb>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora odio aut sint nisi, eveniet rem esse pariatur sed asperiores alias incidunt corporis ducimus ullam impedit illum sit architecto dignissimos temporibus!</Blurb>
      <Blurb>PostGIS, ArcMAP, QGIS</Blurb>
      <CircleImage src={postgis} alt="" />
      <CircleImage src={esri} alt="" />
      <CircleImage src={qgis} alt="" />
      <CircleImage src={mapbox} alt="" />
    </Card>
    <Card padding="10px">
      <Title>Web Mapping</Title>
      <Blurb>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora odio aut sint nisi, eveniet rem esse pariatur sed asperiores alias incidunt corporis ducimus ullam impedit illum sit architecto dignissimos temporibus!</Blurb>
      <Blurb>MapBox, Leaflet, Google Maps, ESRI</Blurb>
      <CircleImage src={mapbox} alt="" />
      <CircleImage src={leaflet} alt="" />
      <CircleImage src={esri} alt="" />
    </Card>
    <Card padding="10px">
      <Title>Visualizaton</Title>
      <Blurb>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora odio aut sint nisi, eveniet rem esse pariatur sed asperiores alias incidunt corporis ducimus ullam impedit illum sit architecto dignissimos temporibus!</Blurb>
      <Blurb>D3, Chart.js</Blurb>
      <CircleImage src={d3} alt="" />
      <CircleImage src={chart} alt="" />
    </Card>
  </div>
);

Data.propTypes = {};

export default Data;
