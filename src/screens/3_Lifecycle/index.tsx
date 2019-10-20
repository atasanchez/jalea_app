import React, {FC, ReactElement} from 'react';

// React Native
import {SafeAreaView, Text} from 'react-native';

const LifecycleScreen: FC<{}> = (): ReactElement => (
  <SafeAreaView>
    <Text>Lifecycle Screen</Text>
  </SafeAreaView>
);

export default LifecycleScreen;
