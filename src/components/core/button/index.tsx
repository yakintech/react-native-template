import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import React from 'react'


export interface TSKBButtonProps {
    title: string;
    onPress?: () => void;
    color?: string;
    mode?: 'text' | 'outlined' | 'contained';
}

const TSKBButton: React.FC<TSKBButtonProps> = ({ title, onPress, color = "#6200ee", mode = "contained" }) => {
    return (
        <Button mode={mode} onPress={onPress} style={{ margin: 10, backgroundColor: color }}>
            {title}
        </Button>
    )
}

export default TSKBButton