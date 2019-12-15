import React, { useState, useEffect } from 'react'
import Button from './Button'
import Card from './Card'
import styled from 'styled-components'
import { Dimensions, StatusBar, Animated } from 'react-native'
import { FadeIn } from '../Animations'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const Background = styled(Animated.Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: ${widthScreen};
	height: ${heightScreen};
`;

const Logo = styled.Image`
  position: absolute;
  top: 50px;
  width: ${widthScreen / 1.5};
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

export default function Login(props) {
  const [StartAnimationButton, setStartAnimationButton] = useState(false)
  const [StartAnimationCard, setStartAnimationCard] = useState(false)
  const FadeAnim = new Animated.Value(0);

  useEffect(() => {

    Animated.timing(FadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    setTimeout(() => setStartAnimationButton(true), 1500);
    setTimeout(() => setStartAnimationCard(true), 2200);
  }, [])

  return (
		<>
      <StatusBar translucent={true} backgroundColor={'#0e0e0eb5'} barStyle="light-content"/>
      <Container>
        <Background 
          resizeMode='cover' 
          source={require('../../assets/girl.jpg')} 
          style={{
            opacity: FadeAnim,
          }}
        />
        <Logo resizeMode='contain' source={require('../../assets/logo-white.png')} />
        <FadeIn start={StartAnimationButton}>
          <ContainerButtons>
            <Button background="#fcd733" onPress={() => alert('Em breve')}>
              <TextButtons color="#000">ABRIR CONTA</TextButtons>
            </Button>
            <Button border="#e5e5e5" onPress={() => setStartAnimationCard(true)}>
              <TextButtons color="#e5e5e5">JÁ TENHO CONTA</TextButtons>
            </Button>
          </ContainerButtons>
        </FadeIn>
      </Container>
      <Card start={StartAnimationCard} close={() => setStartAnimationCard(false)}/>
		</>
	)
}