import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import formatteStringCel from './formatteStringCel';

interface TextInputMaskCel extends TextInputProps {
    setValue: (value: string) => void
    onChangeTextWithoutMask?: (value: string) => void
}

const TextInputMaskCel = ({setValue, value, onChangeTextWithoutMask,...props}:TextInputMaskCel) => {
    return <TextInput
            {...props}
            onChangeText={(valueChange) => {
                const {valueFormatted, valueJustNumber} = formatteStringCel(valueChange,value)
                
                if(onChangeTextWithoutMask)onChangeTextWithoutMask(valueJustNumber)
                
                setValue(valueFormatted)
            }}
            value={value}
            testID="heightInput"
        />;
}

export default TextInputMaskCel;