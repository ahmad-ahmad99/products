import React from 'react';
import {Provider} from 'react-redux';

import './shared/styles/crema.less';
import {
  AppContextProvider,
  AppLayout,
  AppLocaleProvider,
  AppThemeProvider,
  AuthRoutes,
} from './@crema';
import configureStore from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import './@crema/services/index';
import JWTAuthAuthProvider from '@crema/services/auth/jwt-auth/JWTAuthProvider';
import {QueryClient, QueryClientProvider} from 'react-query';

export const store = configureStore();

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 0, // Set cacheTime to 0 to disable caching
        refetchInterval: false, // Disable automatic refetching
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <Provider store={store}>
          <AppThemeProvider>
            <AppLocaleProvider>
              <BrowserRouter>
                <JWTAuthAuthProvider>
                  <AuthRoutes>
                    <AppLayout />
                  </AuthRoutes>
                </JWTAuthAuthProvider>
              </BrowserRouter>
            </AppLocaleProvider>
          </AppThemeProvider>
        </Provider>
      </AppContextProvider>
    </QueryClientProvider>
  );
};

export default App;
