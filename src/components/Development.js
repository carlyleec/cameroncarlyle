import React from 'react';


const hydrasquidImg = require('../images/hydrasquid.png');
const reactImg = require('../images/react.png');
const angularImg = require('../images/angular.png');
const vueImg = require('../images/vue.png');
const emberImg = require('../images/ember.png');
const staticImg = require('../images/static.png');
const graphqlImg = require('../images/graphql.png');
const expressImg = require('../images/express.png');
const firebaseImg = require('../images/firebase.png');

const multiLineString = `
  function() {
    x = something;
  }
  const str = 'this is a string';
  const this = (x, y) => (
    return x++
  ) 
`;


const str = multiLineString.toString();
console.log(str);

const Development = () => (
  <div className="row" style={{marginTop: '30px'}}>
    <div className="col-xs-12">
      <h2 style={{ color: '#fff', fontWeight: '100' }}>Portfolio Overview</h2>
      <hr/>
    </div>
    <div className="col-md-10 card">
      <div className="col-md-5" style={{ background: '#455A64', padding: '10px', borderRadius: '4px' }}>
        <img role="presentation" className="img-responsive center-block" src={hydrasquidImg} />
      </div>
      <div className="col-md-7">
        <h3 style={{ fontWeight: '200' }}></h3>
        <p style={{ fontWeight: '200' }}><span className="lead">Like something straight out of mythology, </span>this site has is a muti-headed monster of frontend frameworks with tenticles reaching back to multiple datasources.
        In short, I'm using this site to try out new frameworks and learn new things by replicating site with different technologies on 
        both the frontend and the backend.
        the </p>
        <div className="col-xs-12">
          <h5>On the surface ... </h5>
          <div className="mini-card" style={{ width: '70px', display: 'inline-block', margin: '10px' }}>
            <img className="img-floating text-center" src={reactImg} alt="react icon" />
            <p className="text-center" style={{ margin: '0px' }}>React</p>
          </div>
          <div className="mini-card" style={{ width: '70px', display: 'inline-block', margin: '10px' }}>
            <img className="img-floating text-center" src={angularImg} alt="angular icon" />
            <p className="text-center" style={{ margin: '0px' }}>Angular</p>
          </div>
          <div className="mini-card" style={{ width: '70px', display: 'inline-block', margin: '10px' }}>
            <img className="img-floating text-center" src={vueImg} alt="vue icon" />
            <p className="text-center" style={{ margin: '0px' }}>Vue</p>
          </div>
          <div className="mini-card" style={{ width: '70px', display: 'inline-block', margin: '10px' }}>
            <img className="img-floating text-center" src={emberImg} alt="ember icon" />
            <p className="text-center" style={{ margin: '0px' }}>Ember</p>
          </div>
          <h5>Data in the depths ... </h5>
          <img className="img-floating text-center" src={staticImg} alt="static icon" />
          <img className="img-floating text-center" src={graphqlImg} alt="graphql icon" />
          <img className="img-floating text-center" src={expressImg} alt="express icon" />
          <img className="img-floating text-center" src={firebaseImg} alt="express icon" />
        </div>
        
      </div>
    </div>
    
    <div className="col-md-2">
      SimpliCity
    </div>
  </div>
);

Development.propTypes = {};

export default Development;
