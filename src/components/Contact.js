import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import ImageCollection from './ImageCollection';


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
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const EmailLink = styled.a`
  font-size: 2em;
  flex: 1 1 100%;
  text-decoration: none;
  font-weight: 700;
  color: #03A9F4;
  text-align: center;
  margin: auto;
`;

const Name = styled.h1`
  text-align: center;
  color: #90A4AE;
  flex: 1 1 100%;
`;

const ResumeLink = styled.a`
  font-size: 1em;
  flex: 1 1 100%;
  text-decoration: none;
  font-weight: 700;
  color: #03A9F4;
  margin: auto;
  text-align: center;
`;

const Contact = () => (
  <Container>
    <ContactWrapper>
      <ContactContent>
        <Name>CAMERON CARLYLE</Name>
        <EmailLink href="mailto:carlyleec@gmail.com">carlyleec@gmail.com</EmailLink>
        <ImageCollection>
          <a target="_blank" href="https://github.com/carlyleec">
            <SocialImage alt="Github" src="/assets/images/github_1492206232253.png"></SocialImage>
          </a>
          <a target="_blank" href="https://www.instagram.com/_cameroncarlyle/">
            <SocialImage alt="Instagram" src="assets/images/instagram_1492206330714.png"></SocialImage>
          </a>
          <a target="_blank" href="https://twitter.com/carlyleec">
            <SocialImage alt="Twitter" src="assets/images/twitter_1492206564080.png"></SocialImage>
          </a>
          <a target="_blank" href="https://www.facebook.com/cameron.carlyle">
            <SocialImage alt="Facebook" src="assets/images/fb_1492206437340.png"></SocialImage>
          </a>
        </ImageCollection>
        <ResumeLink target="_blank" href="/cameron-carlyle-resume.pdf">Download Resume</ResumeLink>
      </ContactContent>
    </ContactWrapper>
  </Container>
);

Contact.propTypes = {};

export default Contact;
