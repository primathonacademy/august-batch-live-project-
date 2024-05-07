import { PRODUCT_DATA } from "../../constants/product-design-data";

const ProductCard = () => {
    return (
        <>
            {PRODUCT_DATA.map((item, i) => {
                return (
                    <div
                        key={`index-${i}`}
                        className="w-full rounded-lg bg-gray-75 backdrop-blur-2xl md:mt-8 xl:mt-32">
                        <img
                            src={item.imgSrc}
                            alt="maiven tests page image"
                            className="w-full lg:w-80 xl:w-full rounded-tl-lg rounded-tr-lg"
                        />
                        <h3 className="text-2xl p-12 sm:px-56 md:p-6 lg:p-10 xl:px-20 2xl:px-28 3xl:px-36 3xl:py-16">
                            {item.caption}
                        </h3>
                    </div>
                );
            })}
        </>
    );
};

export default ProductCard;