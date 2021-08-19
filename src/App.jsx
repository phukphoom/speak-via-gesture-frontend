import React, { useState } from 'react';

import { CameraRecorder, TranslatedDisplay } from './components';

const App = () => {
    const [translatedText, setTranslatedText] = useState('คำเเปล ...');

    return (
        <div className="flex w-full h-screen justify-center items-center">
            <div className="flex flex-col w-96">
                <div className="flex h-96">
                    <CameraRecorder
                        onTranslated={(sentence) => {
                            setTranslatedText(sentence);
                        }}
                    />
                </div>

                <div className="flex mt-4 h-56">
                    <TranslatedDisplay translatedText={translatedText} />
                </div>
            </div>
        </div>
    );
};

export default App;
