import React from "react"
import Image from "react-image-gallery"

const PictureSlide = () => {
    const images = [
        {original: "https://instagram.fmci1-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/160328121_417638179333866_7855534061065282229_n.jpg?tp=1&_nc_ht=instagram.fmci1-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=HGZjx4yZgfwAX-rUuWf&oh=114c7dc22d72a54ec8215e6304ddc5bd&oe=6077D280",
        thumbnail: 'hhttps://instagram.fmci1-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/160328121_417638179333866_7855534061065282229_n.jpg?tp=1&_nc_ht=instagram.fmci1-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=HGZjx4yZgfwAX-rUuWf&oh=114c7dc22d72a54ec8215e6304ddc5bd&oe=6077D280'}, {
            original: "https://instagram.fmci1-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/158238092_832561460974847_6549469592369428155_n.jpg?tp=1&_nc_ht=instagram.fmci1-3.fna.fbcdn.net&_nc_cat=111&_nc_ohc=CBuvUqRjUXAAX-W5WT5&oh=b3f0606e2a2acd6145ed7b19df1dd5aa&oe=6075C41D"
        }
    ]
    return (
        <div><h4>Gear given to players who enter the league</h4>
        <div className="picture-slider"><Image sizes="150" items={images} autoPlay={true} startIndex={images.id}/>
            </div></div>
    )
}

export default PictureSlide;