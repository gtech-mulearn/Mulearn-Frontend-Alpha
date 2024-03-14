import { useState, useEffect } from "react";
import styles from "./index.module.css";
import desktopVid from "./desktop.mp4"; // Video for non-mobile devices
import mobileVid from "./mobile.mp4"; // Video for mobile devices

const Hero = () => {
	// State to track whether the screen is considered 'mobile' based on its width
	const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

	useEffect(() => {
		// Function to update 'isMobile' state based on window width
		const handleResize = () => {
			setIsMobile(window.innerWidth < 600);
		};

		// Add 'resize' event listener to window
		window.addEventListener("resize", handleResize);

		// Cleanup function to remove event listener when component unmounts
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty dependency array means this effect runs once on mount and cleanup runs on unmount

	return (
		<div className={styles.Wrapper}>
			<div className={styles.Header}>
				<h1>
					Micro Learning, Macro Impacts{" "}
					<span>
						<p>with endless</p>&nbsp;<div>collaboration</div>
					</span>
				</h1>
				<p>Your Hero’s Journey starts here!</p>
			</div>
			<video
				autoPlay
				muted
				playsInline
				loop
				className={`${styles.heroAsset} ${styles.deskVideo}`}
				poster="https://ondc.org/assets/theme/images/video_img.jpg"
			>
				{/* Dynamically set video source based on 'isMobile' state */}
				<source
					src={isMobile ? mobileVid : desktopVid}
					type="video/mp4"
				/>
			</video>
		</div>
	);
};

export default Hero;
