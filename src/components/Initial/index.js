import React, { useEffect } from 'react'
import Background from '../../assets/background-initial.png'
import styled from 'styled-components'
import { Dimensions, StatusBar } from 'react-native'
import { withNavigation } from 'react-navigation'
import { AnimationLogoTop } from '../Animations'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const BackgroundImg = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

const Logo = styled.Image`
  width: ${widthScreen / 1.5};
	height: ${heightScreen / 6};
`;

function index(props) {
  useEffect(() => {
    setTimeout(() => props.navigation.navigate('Login'), 3500)
  }, [])
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="light-content" />
      <BackgroundImg source={Background} resizeMode='cover'>
      <AnimationLogoTop>
        <Logo resizeMode='contain' source={require('../../assets/logo-white.png')} />
      </AnimationLogoTop>
      </BackgroundImg>
    </>
  )
}

export default withNavigation(index)