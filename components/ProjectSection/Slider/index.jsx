import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Zoom, Autoplay,EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom"
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";


function Sliders({ images, data, imagesm}) {
    
    return (
        <>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                
                spaceBetween={20}
                zoom={true}
                modules={[Autoplay,Pagination, Zoom]}
                className="dark:bg-negron !hidden tablet:!block"
            >
                {
                    data != undefined ? (images.map((s) => <SwiperSlide data-hash={(s)} key={s} zoom='true'><Image src={`/assets${s}`} width="1280" height="720" alt='swipeimage' className="transitionshort"/></SwiperSlide>)) : null
                }
            </Swiper>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                zoom={true}
                modules={[Pagination, Autoplay, Zoom]}
                className="dark:bg-negron tablet:!hidden"
            >
                {
                    data != undefined ? (imagesm.map((s) => <SwiperSlide data-hash={(s)} key={s} zoom='true'><Image src={`/assets${s}`} width="1024" height="1280" alt='swipeimage' className="transitionshort" /></SwiperSlide>)) : null
                }
            </Swiper>
        </>
    )
}

export default Sliders