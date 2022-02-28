import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const Gradient: React.FC<{
    height: number;
}> = ({height}) => {
    const frame = useCurrentFrame();
    // const {height} = useVideoConfig();
    const duration = 5 * 30;
    const offset = (height * 1.5) * ((frame % duration) / duration)
    return (
        <AbsoluteFill>
            <AbsoluteFill 
                style={{
                    height: height * 1.5,
                    left: -1,
                    background: 'linear-gradient(to bottom, #e76f51, #f4a261, #e9c46a, #2a9d8f, #264653, #e76f51)',
                    transform: `translateY(-${offset}px)`
                }}
            />
            <AbsoluteFill 
                style={{
                    height: height * 1.5,
                    top: (height * 1.5) - 3,
                    left: -1,
                    background: 'linear-gradient(to bottom, #e76f51, #f4a261, #e9c46a, #2a9d8f, #264653, #e76f51)',
                    transform: `translateY(-${offset}px)`
                }}
            />
        </AbsoluteFill>
    );
};