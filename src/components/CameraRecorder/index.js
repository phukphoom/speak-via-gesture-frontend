import VideoRecorder from 'react-video-recorder';

import ActionsView from './ActionsView';
import DisconnectedView from './DisconnectedView';
import ErrorView from './ErrorView';
import LoadingView from './LoadingView';
import UnsupportView from './UnsupportedView';
import VideoInputView from './VideoInputView';

const CameraRecorder = () => {
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
        />
    );
};

export default CameraRecorder;
