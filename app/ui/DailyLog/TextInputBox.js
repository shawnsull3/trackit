import React from 'react';
import { View } from 'react-native';
import TextInputHelper from '../../helpers/TextInputHelper';

const TextInputBox = ({ name, type, value, handleText, style, placeholder }) => {
    return (
      <View style={styles.notesContainer}>
        <TextInputHelper 
          name={notes} 
          type={type}
          value={value} 
          onChange={handleText} 
          style={style}
          placeholder={placeholder} 
        />
      </View>
    )   
}


export default TextInputBox;
