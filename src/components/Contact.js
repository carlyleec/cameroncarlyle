import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import ImageCollection from './ImageCollection';

const logo120 = require('../images/logo-120.png');
const github = require('../images/github.png');
const instagram = require('../images/instagram.png');
const fb = require('../images/fb.png');
const twitter = require('../images/twitter.png');

const SocialImage = styled.img`
  height: 50px;
  width: 50px;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const ContactContent = styled.div`
  flex: 1 1;
`;

const EmailLink = styled.a`
  font-size: 2em;
  flex: 1 1;
  width: 100%;
  text-decoration: none;
  font-weight: 700;
  color: #03A9F4;
  text-align: center;
`;

const Name = styled.h1`
  text-align: center;
  color: #90A4AE;
`;

const Contact = () => (
  <Container>
    <ContactWrapper>
      <ContactContent>
        <Name>CAMERON CARLYLE</Name>
        <EmailLink href="mailto:carlyleec@gmail.com">carlyleec@gmail.com</EmailLink>
        <ImageCollection>
          <a target="_blank" href="https://github.com/carlyleec">
            <SocialImage alt="Github" src={github}></SocialImage>
          </a>
          <a target="_blank" href="https://www.instagram.com/_cameroncarlyle/">
            <SocialImage alt="Instagram" src={instagram}></SocialImage>
          </a>
          <a target="_blank" href="https://twitter.com/carlyleec">
            <SocialImage alt="Twitter" src={twitter}></SocialImage>
          </a>
          <a target="_blank" href="https://www.facebook.com/cameron.carlyle">
            <SocialImage alt="Facebook" src={fb}></SocialImage>
          </a>
        </ImageCollection>

      </ContactContent>
    </ContactWrapper>
  </Container>
);

Contact.propTypes = {};

export default Contact;
