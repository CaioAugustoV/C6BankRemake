import React, { useEffect } from 'react'
import Background from '../../assets/background-initial.png'
import styled from 'styled-components'
import { Dimensions, StatusBar } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Transition } from 'react-navigation-fluid-transitions'

const widthScreen = Dimensions.get('window').width;

const BackgroundImg = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  width: ${props => props.width};
`;

function index(props) {
  useEffect(() => {
    setTimeout(() => props.navigation.navigate('Login') ,2000)
  }, [])
  return (
    <>
      <StatusBar backgroundColor="#1f1f1f" barStyle="light-content" />
      <BackgroundImg source={Background} resizeMode='cover'>
        <Transition shared="logo">
          <Logo width={widthScreen / 2} resizeMode='contain' source={require('../../assets/logo-white.png')} />
        </Transition>
      </BackgroundImg>
    </>
  )
}

export default withNavigation(index)