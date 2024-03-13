import Marquee from "react-fast-marquee";
import styles from "./index.module.css";
import vinu from "./assets/vinu.jpeg";
import thomas from "./assets/thomas.jpeg";
import shaheen from "./assets/shaheen.jpeg";
import deepraj from "./assets/deepraj.jpeg";

export const Testimonials = () => {
	const data = [
		{
			para: "µLearn’s value, opportunities, and immersive challenges were unparalleled. With dedication, I became a Tech Evangelization Fellow at GTech. The diverse mentorship and unwavering support opened countless doors, transforming me and expanding my horizons. µLearn: a truly transformative experience!",
			name: "Vinu Balagopal A P",
			desig: "Fellow, Technology Evangelization",
			image: vinu,
		},
		{
			para: "At µLearn, collaboration is crucial. It all began when I proposed a collaboration on behalf of IEEE Travancore Hub. Now, two years later, I'm a Partner Engagement Fellow at µLearn. This journey has been a dream come true. The support, opportunities, and guidance I've received have shaped me into the person I am today. Being part of this community feels like being part of a family.",
			name: "Thomas Mathew",
			desig: "Fellow, Partner Engagement",
			image: thomas,
		},
		{
			para: "Being at µLearn was a unique and refreshing experience for me. With the freedom to execute our ideas and endless support, our team accomplished impressive projects and enhanced our interactive Discord server. It's truly an amazing community to be a part of.",
			name: "Shaheen Hyder K",
			desig: "Fellow, Operations and Development",
			image: shaheen,
		},
		{
			para: "Nothing matches the happiness of living with a bunch of badass people with a future mindset towards creating the best knowledge economy.",
			name: "Deepraj R",
			desig: "Fellow, Program Manager",
			image: deepraj,
		},
	];

	const marqParams = {
		autoFill: true,
		pauseOnHover: true,
		gradient: false,
		speed: 30,
		drag: true,
	};
	return (
		<div className={styles.MainWrap}>
			<h1>
				<span className="colorText">Speaking</span> µLearn
			</h1>
			<Marquee
				{...marqParams}
				style={{ width: "100vw" }}
				className={styles.Wrapper}
			>
				{data.map((item, index) => (
					<div key={index} className={styles.Individual}>
						<p>"{item.para}"</p>
						<div>
							<img
								src={item.image}
								alt="textimonials"
								loading="lazy"
							/>
							<div>
								<h4 className="colorText">{item.name}</h4>
								<span>{item.desig}</span>
							</div>
						</div>
					</div>
				))}
			</Marquee>
		</div>
	);
};
