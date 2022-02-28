import { Composition } from 'remotion';
import { Gradient } from './Gradient';
import { Scene3 } from './Scene3';

export const RemotionVideo: React.FC = () => {
    return (
        <>
            <Composition 
                id="Gradient" 
                component={Gradient} 
                width={720} 
                height={1280} 
                durationInFrames={150} 
                fps={30}
            />
            <Composition 
                id="Scene" 
                component={Scene3} 
                width={720} 
                height={1280} 
                durationInFrames={150} 
                fps={30}
                defaultProps={{
                    topSongName: "Sunset at Café Mambo",
                    topSongArtist: "Eric Prydz",
                }}
            />
        </>
    );
};
