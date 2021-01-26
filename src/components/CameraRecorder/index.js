import VideoRecorder from "react-video-recorder";

import ActionsView from "./ActionsView";
import DisconnectedView from "./DisconnectedView";
import ErrorView from "./ErrorView";
import LoadingView from "./LoadingView";
import UnsupportView from "./UnsupportedView";
import VideoInputView from "./VideoInputView";

const CameraRecorder = ({ setText }) => {
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
                const file = new File([videoBlob], "video.mp4");
                const formData = new FormData();
                formData.append("video", file);

                const res = await fetch(`http://161.246.6.44/upload`, {
                    method: "POST",
                    body: formData,
                });
                const json = await res.json();
                setText(json.text);
            }}
        />
    );
};

export default CameraRecorder;
