import React, { useEffect } from 'react'
import Background from '../../assets/background-initial.png'
import styled from 'styled-components'
import { Dimensions, StatusBar } from 'react-native'
import { withNavigation } from 'react-navigation'

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
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="light-content" />
      <BackgroundImg source={Background} resizeMode='cover'>
        <Logo width={widthScreen / 1.5} resizeMode='contain' source={require('../../assets/logo-white.png')} />
      </BackgroundImg>
    </>
  )
}

export default withNavigation(index)