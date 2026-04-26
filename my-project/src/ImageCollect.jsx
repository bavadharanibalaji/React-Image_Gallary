import React from "react";

function ImageCollect(props){
    let image = props.image;

    return(
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-103 transition duration-300">
            <img src={image.url}
            alt={image.title}
            className="w-full h-64 sm:h-64  md:h-80 object-cover"/>
            <div className="p-4 text-black">
                <h2 className="text-lg font-semibold">{image.title}</h2>
                <p className="text-grey-600 text-sm">{image.description}</p>
            </div>

        </div>
    );

}

export default ImageCollect;