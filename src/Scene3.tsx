import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion"
import { Gradient } from "./Gradient";
import { Opus } from './Opus';
import { QuoteText } from './QuoteText';

const CIRCLE_SIZE = 500;
const ALBUM_SIZE = 400;

export const Scene3 : React.FC<{
    topSongName: string;
    topSongArtist: string;
}> = ({topSongName, topSongArtist}) => {
    const frame = useCurrentFrame();
    const { width, height, fps } = useVideoConfig();
    const progress = spring({
        frame,
        fps,
        config: {
            damping: 200,
        }
    });
    const scale = interpolate( progress, [0, 1], [4, 1]);

    const UPSTART = 40;

    const upAnimation = spring({
        frame: frame - UPSTART,
        fps,
        config: {
            damping: 200,
        }
    })
    // const scale = interpolate( progress, [0, 1], [4, 1]);
    const contentTranslation = interpolate(upAnimation, [0, 1], [0, -100]);

    const textOpacity = (() => {
        if (frame < UPSTART) {
            return interpolate( progress, [0.9, 1], [0, 1] )
        }
        return interpolate(upAnimation, [0, 1], [1, 0])
    })();

    const artistTextOpacity = spring({
        frame: frame - UPSTART - 33,
        fps,
        config: {
            mass: 0.7
        }
    })
    const bottomTextOpacity = spring({
        frame: frame - UPSTART - 15,
        fps,
        config: {
            mass: 0.4
        }
    })

    const album_opacity = interpolate( progress, [0.7, 1], [0, 1] )
    const album_scale = interpolate( progress, [0, 1], [0, 1]);

    return (
        <>

            <AbsoluteFill style={{
                backgroundColor: '#4e00f9'
                }}
            >
                <AbsoluteFill style={{
                    transform: `translateY(${contentTranslation}px)`
                }}>
                <div
                    style={{
                        position: 'absolute',
                        top: 350,
                        left: width / 2 - CIRCLE_SIZE / 2,
                        width: CIRCLE_SIZE,
                        opacity: textOpacity
                    }}>
                    <QuoteText></QuoteText>
                    </div>
                    <div
                        style={{
                            fontFamily: 'Roboto, sans-serif',
                            color: 'white',
                            fontSize: '2rem',
                            fontWeight: '400',
                            textAlign: 'center',
                            width: '100%',
                            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
                            position: 'absolute',
                            top: 1020,
                            paddingRight: 'auto',
                            paddingLeft: 'auto',
                            opacity: artistTextOpacity,
                        }}
                    >
                        {topSongArtist}
                    </div>
                    <div
                        style={{
                            fontFamily: 'Roboto, sans-serif',
                            color: 'white',
                            fontSize: '2.5rem',
                            fontWeight: '400',
                            textAlign: 'center',
                            // maxWidth: '70%',
                            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
                            position: 'absolute',
                            top: 1100,
                            paddingRight: 'auto',
                            paddingLeft: 'auto',
                            opacity: bottomTextOpacity,
                        }}
                    >
                        Your top song of the year is {topSongName}
                    </div>

                
      
                <div style={{
                    width: `${CIRCLE_SIZE}px`,
                    height: `${CIRCLE_SIZE}px`,
                    borderRadius: `${(CIRCLE_SIZE / 2)}px`,
                    overflow: 'hidden',
                    position: 'absolute',
                    left: width / 2 - CIRCLE_SIZE / 2,
                    top: height / 2 - CIRCLE_SIZE / 2 + 100,
                    opacity: progress,
                    transform: `scale(${(scale)})`,
                }}>
                    <Gradient height={CIRCLE_SIZE} />
                    
                </div>
                <div style={{
                    position: 'absolute',
                    left: width / 2 - ALBUM_SIZE / 2,
                    top: height / 2 - ALBUM_SIZE / 2 + 100,
                    transform: `scale(${(album_scale)})`,
                    opacity: album_opacity,
                }}>

                    <Opus 
                        style={{
                            height: ALBUM_SIZE,
                            width: ALBUM_SIZE,
                            position: 'absolute',
                            left: width / 2 - ALBUM_SIZE / 2,
                            top: height / 2 - ALBUM_SIZE / 2 + 100,
                            
                        }}
                    />

                </div>
                
                </AbsoluteFill>
            </AbsoluteFill>

        </>
    )
}