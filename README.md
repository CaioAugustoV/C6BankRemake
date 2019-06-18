# C6 Bank Beta

## Abrir o projeto

Caso seja a primeira vez que você vá abrir o projeto, você precisa adicionar
no arquivo `MainActivity.java` que fica no caminho `android/src/main/java/com/NAME DO APP/MainActivity.java`.

```
  package com.c6bank;

  import com.facebook.react.ReactActivity;

  // Add sem o +
  + import com.facebook.react.ReactActivityDelegate;
  + import com.facebook.react.ReactRootView;
  + import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
  public class MainActivity extends ReactActivity {

      /**
      * Returns the name of the main component registered from JavaScript.
      * This is used to schedule rendering of the component.
      */
      @Override
      protected String getMainComponentName() {
          return "C6Bank";
      }
    
      // Add sem o +
      +  @Override
      +  protected ReactActivityDelegate createReactActivityDelegate() {
      +    return new ReactActivityDelegate(this, getMainComponentName()) {
      +      @Override
      +      protected ReactRootView createRootView() {
      +       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      +      }
      +    };
      +  }
  }

```

Após adicionar esse codigo, basta ir no terminal e rodar o comando `yarn` ou `npm install` para
baixar as dependencias do projeto.

Após o termino deste comando para rodar a aplicação basta rodar o comando `react-native run-android`
para android ou `react-native run-ios --CELULAR DE SUA ESCOLHA`.