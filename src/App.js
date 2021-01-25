import React from "react";

import { CameraRecorder, TranslatedDisplay } from "./components";

const App = () => {
    const [text, setText] = React.useState("");

    return (
        <div className="flex w-full h-screen justify-center items-center bg-gray-800 fixed">
            <div className="flex flex-col w-96">
                <div className="flex h-96">
                    <CameraRecorder setText={setText} />
                </div>
                <div className="flex mt-4 h-56">
                    <TranslatedDisplay translatedText={text} />
                </div>
            </div>
        </div>
    );
};

export default App;
