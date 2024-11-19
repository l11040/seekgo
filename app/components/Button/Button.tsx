import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {styles} from './Button.styles';
import {Colors} from '../../constants/Colors';

interface ButtonProps {
  title: string; // 버튼 텍스트
  onPress: () => void; // 버튼 클릭 이벤트
  disabled?: boolean; // 비활성화 여부
  loading?: boolean; // 로딩 스피너 표시 여부
  variant?: 'primary' | 'secondary' | 'outline'; // 버튼 스타일 종류
  size?: 'small' | 'medium' | 'large'; // 버튼 크기
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  disabled = false,
  loading = false,
  variant = 'primary',
  size = 'medium',
}) => {
  const buttonStyle = [
    style,
    styles.base,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color={Colors.Text.Primary} />
      ) : (
        <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
