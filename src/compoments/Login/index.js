import React from 'react'
import Background from '../../assets/girl.jpg'
import styled from 'styled-components'
import { Dimensions, StatusBar } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const BackgroundImg = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.Image`
  width: ${widthScreen / 2};
	height: ${heightScreen / 6};
	background: #000;
`;

export default function index() {
	return (
		<>
			<StatusBar hidden/>
      <BackgroundImg source={Background} resizeMode='cover'>
        <Transition shared="logo">
          <Logo resizeMode='contain' source={require('../../assets/logo-white.png')} />
        </Transition>
      </BackgroundImg>
		</>
	)
}
