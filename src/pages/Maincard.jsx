import React from "react";
const MainCard = ({image}) => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [tooltipVisible, setTooltipVisible] = React.useState(false);
    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

    return (
        <div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)}
            className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
        >
            <span className="absolute px-2 py-1 z-10 whitespace-nowrap text-sm rounded bg-white/20 border border-gray-200 backdrop-blur-[4px] text-gray-900 font-medium pointer-events-none"
                style={{
                    top: position.y + 10,
                    left: position.x + 10,
                    opacity: tooltipVisible ? 1 : 0,
                    transform: tooltipVisible ? 'scale(1)' : 'scale(0.6)',
                    transition: 'all 0.2s ease-out',
                }}
            >
                Author: Sir Elikana Mwangi
            </span>

            <a href="#">
                <img className="rounded-t-lg w-96 h-56 object-cover object-top" src={image} alt="" />
            </a>
            <div className="p-5">
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    );
};
export default MainCard