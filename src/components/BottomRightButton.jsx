import arrowDown from '../assets/icons/progressbar-arrow-down.svg';

const BottomRightButton = () => {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div
                className="fixed z-50 bottom-6 right-6 md:h-32 md:w-32 hidden xl:block overflow-hidden cursor-pointer"
                onClick={scrollToBottom}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={arrowDown}
                        alt="arrow down image"
                        className="p-5 rounded-full"
                        style={{
                            width: '60px',
                            height: '60px',
                            background: 'linear-gradient(to bottom, blue 50%, white 50%)'
                        }}
                    />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 200 200">
                        <path
                            id="circlePath"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                            fill="none"
                        />
                        <text fontSize="10" className="text-lg opacity-90 tracking-wide">
                            <textPath xlinkHref="#circlePath" textAnchor="middle" startOffset="50%">
                                • HAVE A DREAM FOR BETTER WORLD • LET US MAKE IT REAL
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default BottomRightButton;
