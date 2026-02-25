import MainCard from "../pages/Maincard";
const Card = ({ title, description,image }) => {
    return (
        <div className="group max-w-sm h-64 mx-auto [perspective:1000px] cursor-pointer">
            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-md bg-white border border-gray-200">
                    <div className="text-center">
                        <h2 className="text-xl font-bold">{title}</h2>
                        <p className="text-sm mt-2">{description}</p>
                    </div>
                </div>
        
                {/* Back Side */}
                <div className="absolute z-10 w-full h-full [backface-visibility:hidden]  [transform:rotateY(180deg)]">
                   <MainCard image={image}/>
                </div>
            </div>
        </div>
    );
};
export default Card