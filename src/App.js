import React from 'react';
import VideoRecorder from 'react-video-recorder';

const App = () => {
    return (
        <div className="flex w-full h-screen justify-center items-center bg-gray-800">
            <div className="flex w-96 h-96">
                <VideoRecorder
                    constraints={{
                        audio: false,
                        video: true,
                    }}
                    renderDisconnectedView={() => {
                        return <div className="flex text-white fond-bold text-4xl">Disconnected</div>;
                    }}
                />
            </div>
        </div>
    );
};

export default App;
