import VideoRecorder from 'react-video-recorder';

import DisconnectedView from './DisconnectedView';
import ErrorView from './ErrorView';
import LoadingView from './LoadingView';
import UnsupportView from './UnsupportedView';

import { API_URL } from '../../config';

const CameraRecorder = ({ onTranslated }) => {
    return (
        <VideoRecorder
            constraints={{
                audio: false,
                video: true,
            }}
            isFlipped={false}
            isOnInitially={true}
            countdownTime={0}
            renderDisconnectedView={DisconnectedView}
            renderErrorView={ErrorView}
            renderLoadingView={LoadingView}
            renderUnsupportView={UnsupportView}
            onRecordingComplete={async (videoBlob) => {
                const file = new File([videoBlob], 'video.mp4');
                const formData = new FormData();
                formData.append('video', file);

                const res = await fetch(`${API_URL}/upload`, {
                    method: 'POST',
                    body: formData,
                });
                const json = await res.json();

                onTranslated(json.text);
            }}
        />
    );
};

export default CameraRecorder;
