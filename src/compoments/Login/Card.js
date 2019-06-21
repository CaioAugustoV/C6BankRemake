import React, { useState, useEffect } from 'react'
import Button from './Button'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import { AnimationCardBottom } from '../Animations'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const MaskDark = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  /* background: #000000a6; */
  z-index: ${props => props.zindex ? '1' : '-1'};
`;

const ContainerCard = styled.View`
  background: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: ${props => props.width};
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: absolute;
  bottom: 0;
  z-index: 2;
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
  return (
    <>
      <AnimationCardBottom start={props.start}>
        <ContainerCard width={widthScreen}>
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
            <Button border="#969696">
              <TextButtons color="#969696">ENTRAR COM OUTRA CONTA</TextButtons>
            </Button>
            <Button background="#fcd733" {...props}>
              <TextButtons color="#000">ENTRAR</TextButtons>
            </Button>
          </ContainerButtons>
        </ContainerCard>
      </AnimationCardBottom>
    </>
	)
}