import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImg = styled.img`
  display: block;
  width: calc(100% - ${(props) => props.colorWidth}px);
  height: calc(100% - ${(props) => props.colorWidth}px);
  box-sizing: border-box;
  border: ${(props) => props.margin}px solid;
  border-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: linear-gradient(90deg, ${(props) => props.colors.join(`, `)});
  border-radius: 50%;

  &:hover {
    background: linear-gradient(90deg, ${(props) => props.hoverColors.join(`, `)});
  }
`;

const ColoredUserPic = ({src, size, margin, backgroundColor, colors, hoverColors, colorWidth}) => {

  return (
    <ImageContainer size={size} colors={colors} hoverColors={hoverColors}>
      <StyledImg src={src} margin={margin} backgroundColor={backgroundColor} colorWidth={colorWidth}/>
    </ImageContainer>
  );
};

ColoredUserPic.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  margin: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  hoverColors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  colorWidth: PropTypes.number.isRequired,
};

export {ColoredUserPic};
