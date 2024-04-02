import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/screens/Home';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationProvider {...eva} theme={eva.dark}>
        <SafeAreaView style={{flex: 1}}>
          <Home />
        </SafeAreaView>
      </ApplicationProvider>
    </QueryClientProvider>
  );
}

export default App;
