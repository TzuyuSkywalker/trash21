import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
  children: string;
  color?: 'primary' | 'secondary' | 'secondary-100' | 'secondary-200' | 'tertiary';
  variant?: 'contenido' | 'solo-texto';
  className?: string;
}

const CustomButton = ({
  children,
  color = 'primary',
  variant = 'contenido',
  className = '',
  onPress,
  onLongPress,
}: Props) => {
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    'secondary-100': 'bg-secondary-100',
    'secondary-200': 'bg-secondary-200',
    tertiary: 'bg-tertiary',
  }[color];

  const textColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    'secondary-100': 'text-secondary-100',
    'secondary-200': 'text-secondary-200',
    tertiary: 'text-tertiary',
  }[color];

  if (variant === 'solo-texto') {
    return (
      <Pressable
        className={`p-3 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text className={`text-center ${textColor} font-work-medium`}>
          {children}
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className="text-white text-center font-work-medium">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
