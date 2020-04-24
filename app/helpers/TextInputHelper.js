import React from 'react'
import { TextInput } from 'react-native';

const TextInputHelper = ({ value, name, type, onChange, style, placeholder }) => {
    return (
      <TextInput
        value={value}
        multiline={true}
        style={style}
        placeholder={placeholder}
        onChangeText={text => onChange({ name, type, text })}
      />
    );
};

export default TextInputHelper; 
