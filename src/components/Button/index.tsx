import React, {FC, ReactElement, useRef} from 'react';
import {Icon} from 'react-native-eva-icons';

// React Native
import {TouchableOpacity} from 'react-native';

// Components
import Text from '../_stylized/Text';

// Styled Components
import {Box} from './styles';

type ButtonType = {
  icon: string;
  text: string;
};

const Button: FC<ButtonType> = ({icon, text}: ButtonType): ReactElement => {
  const iconEl = useRef<Icon>();

  const onIconPress = () => {
    console.log('Press');
  };

  return (
    <TouchableOpacity onPress={onIconPress}>
      <Box>
        <Icon
          fill="white"
          animation="pulse"
          name={icon}
          width={25}
          height={25}
        />
        <Text color="white" type="button">
          {text}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
