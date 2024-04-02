import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Home from './src/screens/Home/Home';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import {Colors} from './src/theme/Colors';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <View style={{flex: 1, backgroundColor: Colors.White}}>
          <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 0.95}}>
              <NavigationContainer>
                <MainStack />
              </NavigationContainer>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 0.05,
                backgroundColor: Colors.White,
              }}>
              <Text style={{fontWeight: '600'}}>
                Data provided by Marvel. © 2014 Marvel
              </Text>
            </View>
          </SafeAreaView>
        </View>
      </ApplicationProvider>
    </QueryClientProvider>
  );
}

export default App;
