import React, { useState, useEffect } from 'react'
import Background from '../../assets/girl.jpg'
import Button from './Button'
import Card from './Card'
import styled from 'styled-components'
import { Dimensions, StatusBar } from 'react-native'
import { AnimationLogoTop, FadeIn } from '../Animations'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const BackgroundImg = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.Image`
  width: ${widthScreen / 2};
	height: ${heightScreen / 6};
`;

const ContainerButtons = styled.View`
  margin: 15px 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const TextButtons = styled.Text`
  color: ${props => props.color};
  font-size: 16px;
`;

export default function index() {
  const [StartAnimationFadeIn, setStartAnimationFadeIn] = useState(false)
  const [StartAnimationCard, setStartAnimationCard] = useState(false)

  useEffect(() => {
    setTimeout(() => setStartAnimationFadeIn(true), 1200)
  }, [])

  function SetAnimationCards() {
    setStartAnimationCard(!StartAnimationCard)
  }
  return (
		<>
      <StatusBar translucent={true} backgroundColor={'#0e0e0eb5'} barStyle="light-content"/>
      <BackgroundImg source={Background} resizeMode='cover'>
        <AnimationLogoTop>
          <Logo resizeMode='contain' source={require('../../assets/logo-white.png')} />
        </AnimationLogoTop>
        <FadeIn start={StartAnimationFadeIn}>
          <ContainerButtons>
            <Button background="#fcd733" onPress={() => alert('Em breve')}>
              <TextButtons color="#000">JÁ TENHO CONVITE</TextButtons>
            </Button>
            <Button border="#e5e5e5" onPress={() => SetAnimationCards()}>
              <TextButtons color="#e5e5e5">JÁ TENHO CONTA</TextButtons>
            </Button>
          </ContainerButtons>
        </FadeIn>
        <Card onPress={() => SetAnimationCards()} start={StartAnimationCard}/>
      </BackgroundImg>
		</>
	)
}