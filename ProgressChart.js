import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle, Text } from 'react-native-svg';

export default function({ size, 
                          strokeWidth, 
                          progressPercent,
                          bgColor, /* Background Circle */
                          pgColor, /* Progress Circle */
                          textSize, 
                          textColor,
                        }) {
    const radius = (size - strokeWidth) / 2;
    const circum = radius * 2 * Math.PI;
    const svgProgress = 100 - progressPercent;
    

    return (
        <Svg width={size} height={size}>
          {/* Background Circle */}
          <Circle 
            stroke={bgColor ? bgColor : "#f2f2f2"}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            {...{strokeWidth}}
          />
          
          {/* Progress Circle */}
          <Circle 
            stroke={pgColor ? pgColor : "#3b5998"}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDasharray={`${circum} ${circum}`}
            strokeDashoffset={radius * Math.PI * 2 * (svgProgress/100)}
            strokeLinecap="round"
            transform={`rotate(-90, ${size/2}, ${size/2})`}
            {...{strokeWidth}}
          />
  
          {/* Text */}
          <Text
            fontSize={textSize ? textSize : "10"}
            x={size / 2}
            y={size / 2 - (textSize || 14)}
            textAnchor="middle"
            fill={textColor ? textColor : "#333333"}
          >
            {progressPercent.toString()+"%"}
          </Text>
          <Text
            fontSize={textSize ? textSize : "10"}
            x={size / 2}
            y={size / 2}
            textAnchor="middle"
            fill={textColor ? textColor : "#333333"}
          >
            complete
          </Text>
        </Svg>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
});
