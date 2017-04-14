import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { closeMarkdownModal } from './actions';

import renderMarkdown from '../../utils/renderMarkdown';


const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1000;
  display: ${props => (props.show ? 'block' : 'none')};
  background: #FFF;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px 20px 20px 20px;
  display: block;
  overflow: auto;
`;

const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 40px;
  width: 40px;
  width: 40px
  height: 40px;
  text-align: right;
  background: #FFF;
  font-size: 40px;
  color: #2196F3
  border: none;
  cursor: pointer;
  @media (min-width: 480px) {
    right: 60px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-basis: 0 1 90%;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  line-height: 2;
  width: 90%;
`;

const Content = styled.div`
  flex: 1 1 auto;
  margin: auto;
  width: 100%;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14),
              0 1px 18px 0 rgba(0,0,0,0.12),
              0 3px 5px -1px rgba(0,0,0,0.3);
  padding: 1em;
  font-size: 1em;
  height: 100%;
  @media (min-width: 480px) {
    flex: 0 1 80%;
    padding: 2em;
    font-size: 1.2em;
  }
`;


const MarkdownModal = props => (
  <ModalBackground show={props.open} >
    <ModalWrapper>
      <ContentWrapper>
        <Close aria-label="Close" onClick={props.onClick}>&times;</Close>
        <Content dangerouslySetInnerHTML={renderMarkdown(props.markdown)} />
      </ContentWrapper>
    </ModalWrapper>
  </ModalBackground>
);

MarkdownModal.propTypes = {
  onClick: React.PropTypes.func,
  markdown: React.PropTypes.string,
  open: React.PropTypes.bool,
};

const mapStateToProps = state => (
  {
    open: state.markdownModal.open,
    markdown: state.markdownModal.markdown,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onClick: () => {
      dispatch(closeMarkdownModal());
    },
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(MarkdownModal);
