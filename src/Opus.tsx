import opus from './img/Opus.jpg'

const COVER_SIZE = 400;

export const Opus : React.FC = () => {
    return (

        <div style={{
            width: `${COVER_SIZE}px`,
            height: `${COVER_SIZE}px`,
        }}>

            <img 
                src={opus} 
                style={{
                    height: `${COVER_SIZE}px`,
                    width: `${COVER_SIZE}px`,
                    boxShadow: "0px 0px 8px #000",
                }}
            />

        </div>

    )
}