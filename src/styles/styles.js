import styled, { keyframes } from 'styled-components';
import { breakpoints } from '../components/Media';
export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`,
    maxWidth: `1500px`
};

export const Paragraph = styled.p`
    margin: 50px 0;
    color: #696969;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 184.69%;
    letter-spacing: 0.03em;

    a {
        border-bottom: 2px solid transparent;
        transition: 0.3s;

        :hover {
            border-bottom: 2px solid black;
        }
    }
`;

export const Float = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const HeadingMain = styled.h1`
    font-weight: 400;
    font-size: 7vw;
    line-height: 120%;
    letter-spacing: -0.06em;
    margin-bottom: 10%;
    margin-top: 10%;

    @media (min-width: ${breakpoints.mobileMax}) {
        font-size: 60px;
        margin-bottom: 10%;
        margin-top: 10%;
    }

    .blue {
        color: #b4e0e8;
    }

    > span {
        display: inline-block;
        transform: translateY(30px);
        opacity: 0;
        animation: ${Float} 1s 0.2s forwards;
    }

    > span:nth-child(1) {
        animation-delay: 0s;
    }

    > span:nth-child(2) {
        animation-delay: 0.2s;
    }
    > span:nth-child(3) {
        animation-delay: 0.4s;
    }
`;

export const HeadingSec = styled(HeadingMain)`
    font-size: 33px;

    @media (min-width: ${breakpoints.mobileMax}) {
        font-size: 40px;
    }
`;
