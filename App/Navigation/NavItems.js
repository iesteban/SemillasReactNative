// @flow

import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './Styles/NavItemsStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics } from '../Themes'

const openDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: true
  })
}

export default {
  backButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Icon name='angle-left'
          size={Metrics.icons.large}
          color={Colors.snow}
          style={styles.backButton}
        />
      </TouchableOpacity>
    )
  },

  hamburgerButton () {
    return (
      <TouchableOpacity onPress={openDrawer}>
        <Icon name='bars'
          size={Metrics.icons.small}
          color={Colors.cta}
          style={styles.hamburgerButton}
        />
      </TouchableOpacity>
    )
  },

  searchButton (callback: Function) {
    return (
      <TouchableOpacity onPress={callback}>
        <Icon name='search'
          size={Metrics.icons.small}
          color={Colors.cta}
          style={styles.searchButton}
        />
      </TouchableOpacity>
    )
  },

  filterButton (callback: Function) {
    return (
      <TouchableOpacity onPress={callback}>
        <Icon name='filter'
          size={Metrics.icons.small}
          color={Colors.cta}
          style={styles.searchButton}
        />
      </TouchableOpacity>
    )
  }

}
