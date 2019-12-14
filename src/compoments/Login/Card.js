import React, { useState, useEffect } from 'react'
import Button from './Button'
import styled from 'styled-components'
import { Dimensions, Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const MaskDark = styled(Animated.View)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000000b3;
  z-index: 1;
`;

const ContainerCard = styled(Animated.View)`
  background: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: ${props => props.width};
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: absolute;
  bottom: 0;
  z-index: 3;
`;

const UserName = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #e5e5e5;
  align-items: center;
  justify-content: center;
  margin: 10px 0 30px 0;
`;

const UserNameText = styled.Text`
  font-size: 14px;
  color: #8b8b8b;
`;

const TextDark = styled.Text`
  color: #363636;
  font-size: ${props => props.size}px;
`;

const TextGray = styled.Text`
  color: #969696;
  font-size: 16px;
  margin: 0 5px;
`;

const ContainerBank = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
`;

const ContainerAgencia = styled.View`
  flex-direction: row;
  margin: 0 5px;
  align-items: center;
  justify-content: center;
`;

const ContainerConta = styled.View`
  flex-direction: row;
  margin: 0 5px;
  align-items: center;
  justify-content: center;
`;

const ContainerButtons = styled.View`
  margin: 5px 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const TextButtons = styled.Text`
  color: ${props => props.color};
  font-size: 16px;
`;

export default function Card(props) {
  const [ChangeCards, setChangeCards] = useState('Login')
  const [CardOpen, setCardOpen] = useState(false)
  
  const translateY = new Animated.Value(500);
  
  let offset = 0;

  function SwitchPages(value){
    switch (value) {
      case 'Login':
        return <Login onPress={e => ChangeNamePages(e)}/>
    
      case 'Password':
        return <Password onPress={e => ChangeNamePages(e)}/>

      default:
        return <Login onPress={e => ChangeNamePages(e)}/>
    }
  }

  function ChangeNamePages(newCard) {
    setChangeCards(newCard)
  }

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true }
  )

  function onHandlerStateChanged(event){
    if(event.nativeEvent.oldState == State.ACTIVE){
      let oppend = false;

      const { translationY } = event.nativeEvent;

      offset += translationY;

      if(translationY >= 140){
        oppend = true;
        props.close();
      }
      
      Animated.timing(translateY, {
        toValue: oppend ? 500 : 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        offset = oppend ? 500 : 0;
        
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  useEffect(() => {
    if(props.start){
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [props.start])

  return (
    <>
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}
      >
        <ContainerCard width={widthScreen} style={{
          transform: [{
            translateY: translateY.interpolate({
              inputRange: [0, 500],
              outputRange: [0, 500],
              extrapolate: 'clamp'
            }), 
          }],
        }}>
          {SwitchPages(ChangeCards)}
        </ContainerCard>
      </PanGestureHandler>
      <MaskDark 
        style={{
          opacity: translateY.interpolate({
            inputRange: [0, 500],
            outputRange: [1, 0],
            extrapolate: 'clamp'
          }),
        }}
      />
    </>
	)
}

function Login(props) {

  function ChangeCard(){
    props.onPress('Password')
  }

  return(
    <>
      <UserName>
        <UserNameText>CV</UserNameText>
      </UserName>
      <TextDark size="26">Olá, Caio</TextDark>
      <ContainerBank>
        <ContainerAgencia>
          <TextGray>Agência</TextGray>
          <TextDark size="16">0001</TextDark>
        </ContainerAgencia>
        <ContainerConta>
          <TextGray>Conta</TextGray>
          <TextDark size="16">00000-0</TextDark>
        </ContainerConta>
      </ContainerBank>
      <ContainerButtons>
        <Button border="#969696" onPress={() => alert('Em breve')}>
          <TextButtons color="#969696">ENTRAR COM OUTRA CONTA</TextButtons>
        </Button>
        <Button background="#fcd733" onPress={() => ChangeCard()}>
          <TextButtons color="#000">ENTRAR</TextButtons>
        </Button>
      </ContainerButtons>
    </>
  )
}

function Password(props) {

  function ChangeCard(){
    props.onPress('Login')
  }

  return(
    <>
      <UserName>
        <UserNameText>CV</UserNameText>
      </UserName>
      <TextDark size="26">Olá, Caio</TextDark>
      <ContainerBank>
        <ContainerAgencia>
          <TextGray>Agência</TextGray>
          <TextDark size="16">0001</TextDark>
        </ContainerAgencia>
        <ContainerConta>
          <TextGray>Conta</TextGray>
          <TextDark size="16">00000-0</TextDark>
        </ContainerConta>
      </ContainerBank>
      <ContainerButtons>
        <Button border="#969696" onPress={() => alert('Em breve')}>
          <TextButtons color="#969696">OUTRA PAG</TextButtons>
        </Button>
        <Button background="#fcd733" onPress={() => ChangeCard()}>
          <TextButtons color="#000">ENTRAR</TextButtons>
        </Button>
      </ContainerButtons>
    </>
  )
}
