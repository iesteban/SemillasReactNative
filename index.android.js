// @flow

import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'
import { Sentry } from 'react-native-sentry';

Sentry.config('https://70a43f2d956b42db966bc72a7849db7a:ba4a4754671e4d3cb28bc4e02b6560de@sentry.io/210067').install();

AppRegistry.registerComponent('FaircoinDiscovery', () => App)
