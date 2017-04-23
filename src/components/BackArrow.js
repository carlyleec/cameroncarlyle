import React from 'react';
import styled from 'styled-components';
import { browserHistory } from 'react-router';

const BackArrowButton = styled.button`
  border: none;
  background: none;
  vertical-align: middle;
  cursor: pointer;
  outline: none;
`;


const BackArrow = props => (
  <BackArrowButton onClick={browserHistory.goBack}>
    <svg width={props.size} height={props.size} viewBox="0 0 120 120" version="1.1">
      <g id="graphics" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="back-arrow" fill="#2196F3">
          <path d="M13.136273,55.8967356 C12.6161591,56.2602716 12.1687667,56.7204914 11.8197687,57.2513825 C10.2642089,58.823669 10.2733515,61.3444193 11.8325357,62.9036035 L59.2004729,110.271541 C60.7613965,111.832464 63.3024293,111.834656 64.8683392,110.268746 L66.2687458,108.868339 C67.8399112,107.297174 67.835907,104.764839 66.2715407,103.200473 L28.0710678,65 L107.002676,65 C109.20047,65 111,63.204768 111,60.990237 L111,59.009763 C111,56.7877996 109.210337,55 107.002676,55 L28.1751442,55 L66.2715407,16.9036035 C67.8324643,15.3426799 67.8346556,12.8016471 66.2687458,11.2357372 L64.8683392,9.83533061 C63.2971738,8.26416522 60.7648391,8.26816944 59.2004729,9.83253573 L13.136273,55.8967356 Z" id="Combined-Shape"></path>
        </g>
      </g>
    </svg>
  </BackArrowButton>
);

BackArrow.propTypes = {
  size: React.PropTypes.string,
};

export default BackArrow;
