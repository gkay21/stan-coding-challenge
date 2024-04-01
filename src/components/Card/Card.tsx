import React from "react";
import { styled } from "styled-components";

interface IProps extends ImageProps {
  title: string;
  overlayText?: string;
}

interface ImageProps {
  img: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  width: 150px;
`;

const ImageContainer = styled.div<ImageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  color: ${(props) => props.theme.palette.tertiary.contrastText};
  background: url(${(props) => props.img}),
    ${(props) => props.theme.palette.tertiary.main};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const OverlayText = styled.span`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
`;

const Title = styled.h2`
  margin-bottom: auto;
  padding-top: 5px;
  font-size: 0.7rem;
`;

const Card: React.FC<IProps> = ({ title, img, overlayText }: IProps) => {
  return (
    <Wrapper data-testid="card-wrapper">
      <ImageContainer img={img} data-testid="card-image">
        {overlayText && (
          <OverlayText data-testid="card-image-overlay">
            {overlayText}
          </OverlayText>
        )}
      </ImageContainer>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Card;
