import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "../../../home/components/events/styles.css";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

type IndividualContainerProps = {
	para: string;
	name: string;
	image: string;
};

type Props = {
	data: IndividualContainerProps[];
};

export const Detail = (props: Props) => {
	const swiperRef = useRef<SwiperRef>(null);

	const [set, setset] = useState(5);

	useEffect(() => {
		if (window.innerWidth < 1300) {
			setset(4);
		}
		if (window.innerWidth < 1000) {
			setset(3);
		}
		if (window.innerWidth < 600) {
			setset(2);
		}
	}, []);

	const slideLeft = () => {
		if (swiperRef.current?.swiper) {
			swiperRef.current.swiper.slidePrev();
		}
	};
	slideLeft();

	return (
		<div className={styles.Swiperwrapper}>
			<div className={styles.LeftMask}></div>
			<Swiper
				slidesPerView={set}
				className="StoriesContainer"
				grabCursor={true}
				spaceBetween={20}
				loop={true}
				pagination={{
					clickable: true,
					el: ".custom-pagination-container",
				}}
				modules={[Pagination, Autoplay]}
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
				}}
				ref={swiperRef}
				
			>
				{props.data.map(({ para, name, image }) => {
					return (
						<SwiperSlide className={styles.SwiperSlide}>
							<div className={styles.IndividualContainer}>
								<img src={image} alt={name} />
								<div className={styles.Details}>
									<h2 className="colorText">{name}</h2>
									<p>{para}</p>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
				<div className="custom-pagination-container"></div>
			</Swiper>
			<div className={styles.RightMask}></div>
		</div>
	);
};
