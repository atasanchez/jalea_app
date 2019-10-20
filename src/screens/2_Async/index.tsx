import React, {FC, ReactElement} from 'react';

// React Native
import {SafeAreaView, Text} from 'react-native';

const AsyncScreen: FC<{}> = (): ReactElement => (
  <SafeAreaView>
    <Text>Async Screen</Text>
  </SafeAreaView>
);

export default AsyncScreen;
