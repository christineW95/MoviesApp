import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../theme/Colors'
const CustomButton = (props) => {
    return (
        <TouchableOpacity {...props}>
            <Text style={{ color: Colors.white, textDecorationStyle: 'double', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}
export default CustomButton;