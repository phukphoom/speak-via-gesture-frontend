const TranslatedDisplay = ({ translatedText }) => {
    const playSoundHandler = () => {
        console.log("playing Sound");
    };
    const reloadAppHandler = () => {
        window.location.reload();
    };

    return (
        <div className="flex flex-col w-full h-full bg-gray-400 p-2 rounded-sm">
            <div className="flex flex-row justify-between">
                <p className="text-lg font-bold">คำเเปล</p>
                <div>
                    <button
                        className="active:outline-none focus:outline-none"
                        onClick={playSoundHandler}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 7l8-5v20l-8-5v-10zm-6 10h4v-10h-4v10zm20.264-13.264l-1.497 1.497c1.847 1.783 2.983 4.157 2.983 6.767 0 2.61-1.135 4.984-2.983 6.766l1.498 1.498c2.305-2.153 3.735-5.055 3.735-8.264s-1.43-6.11-3.736-8.264zm-.489 8.264c0-2.084-.915-3.967-2.384-5.391l-1.503 1.503c1.011 1.049 1.637 2.401 1.637 3.888 0 1.488-.623 2.841-1.634 3.891l1.503 1.503c1.468-1.424 2.381-3.309 2.381-5.394z" />
                        </svg>
                    </button>

                    <button
                        className="ml-2 active:outline-none focus:outline-none"
                        onClick={reloadAppHandler}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z" />
                        </svg>
                    </button>
                </div>
            </div>
            <textarea
                className="w-full h-full mt-2 p-2 justify-between bg-white text-gray-500 rounded-sm focus:outline-none"
                value={translatedText}
                readOnly
            />
        </div>
    );
};

export default TranslatedDisplay;
