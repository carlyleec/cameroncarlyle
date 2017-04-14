import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { openMarkdownModal } from './actions';


const OpenerWrapper = styled.div`
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 margin: 10px;
 flex: 0 1 100%;
 @media (min-width: 992px) {
   flex: 0 1;
 }

`;

const ModalOpenerImage = styled.img`
  width: 280px;
  height: 140px;
  flex-basis: auto;
  border: 2px solid #E0E0E0;
  border-radius: 4px;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14),
              0 1px 18px 0 rgba(0,0,0,0.12),
              0 3px 5px -1px rgba(0,0,0,0.3);
  &:hover{
    cursor: pointer;
    box-shadow: 0 10px 14px 0 rgba(0,0,0,0.14),
              0 1px 18px 0 rgba(0,0,0,0.12),
              0 8px 10px -1px rgba(0,0,0,0.3);
  }
`;

const Label = styled.p`
  color: #BDBDBD
  flex: 1 1 100%;
  min-width: 200px;
  text-align: center;
  @media (min-width: 992px) {
    flex: 0 1;
  }
`;


const Opener = props => (
  <OpenerWrapper>
    <ModalOpenerImage onClick={props.onClick} src={props.image} />
    <Label>{props.label}</Label>
  </OpenerWrapper>
);

Opener.propTypes = {
  onClick: React.PropTypes.func,
  image: React.PropTypes.string,
  label: React.PropTypes.string,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onClick: () => (
      dispatch(openMarkdownModal(ownProps.markdown))
    ),
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Opener);
