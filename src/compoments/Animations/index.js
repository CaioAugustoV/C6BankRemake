import React, { useState, useEffect } from 'react'
import { Animated, Dimensions } from 'react-native'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

export function FadeOut(props) {
  const [FadeAnim, setFadeAnim] = useState(new Animated.Value(1))

  useEffect(() => {
    if (props.start) {
      Animated.timing(
        FadeAnim,
        {
          toValue: 0,
          duration: props.duration ? props.duration : 1000,
        }
      ).start();
    }
  }, [props.start])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: FadeAnim,
        width: props.width ? props.width : '100%',
        alignItens: 'center',
        justifyContent: 'center',
      }}
    >
      {props.children}
    </Animated.View>
  )
}

export function FadeIn(props) {
  const [FadeAnim, setFadeAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    if(props.start){
      Animated.timing(
        FadeAnim,
        {
          toValue: 1,
          duration: props.duration ? props.duration : 1000,
        }
      ).start();
    }
  }, [props.start])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: FadeAnim,
        width: props.width ? props.width : '100%',
        alignItens: 'center',
        justifyContent: 'center',
      }}
    >
      {props.children}
    </Animated.View>
  )
}

export function AnimationLogoTop(props) {
  const [Frame, setFrame] = useState(new Animated.Value(heightScreen / 2 - heightScreen / 12))

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(
        Frame,
        {
          toValue: 40,
          duration: 1000,
        }
      ).start();
    }, 500)
  }, [])
  
  return (
    <Animated.View style={{
      ...props.style,
      position: 'absolute',
      top: Frame,
      alignItens: 'center',
      justifyContent: 'center',
    }}>
      {props.children}
    </Animated.View>
  )
}