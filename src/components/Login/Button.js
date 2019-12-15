import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const ContaninerButton = styled.TouchableOpacity`
  width: ${props => props.width};
  background: ${props => props.backgroundColor};
  border-radius: 1000px;
  padding: 12px 10px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${props => props.borderColor};
  margin: 6px 0;
`;

export default function Button(props) {
  const { background, border } = props;
  return (
		<>
      <ContaninerButton 
        backgroundColor={background ? background : 'transparent'} 
        borderColor={border ? border : 'transparent'} 
        width={widthScreen / 1.1}
        {...props}
      >
        {props.children}
      </ContaninerButton>
		</>
	)
}