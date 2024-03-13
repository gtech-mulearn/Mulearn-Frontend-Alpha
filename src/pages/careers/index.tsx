import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Landing } from "./components/hero"

const Careers = () => {
	const [careers, setCareers] = useState<CareerData[]>([]);
	const [oldData, setOldData] = useState<CareerData[]>([]);

	useEffect(() => {
		const fetchCareers = async () => {
			try {
				const response = await axios.get<CareerData[]>(
					"https://opensheet.elk.sh/1Afdbru7Neywhh8S2f0ACv7NJBKvoLKrcFf0eajYpmOo/careersNew"
				);
				setCareers(response.data);
				const oldResponse = await axios.get<CareerData[]>(
					"https://opensheet.elk.sh/1Afdbru7Neywhh8S2f0ACv7NJBKvoLKrcFf0eajYpmOo/careersOld"
				);
				setOldData(oldResponse.data);
			} catch (error) {
				console.error(
					"There was an error fetching the career data:",
					error
				);
			}
		};

		fetchCareers();
	}, []);
	return (
		<div>
			<Landing />
			<h2>Career Opportunities</h2>
			{careers.length > 0 ? (
				<div className={styles.careersWrapper}>
					<ul>
						{careers.map((career, index) => (
							<li key={index}>
								<h3>{career.role}</h3>
								<p>{career.remuneration}</p>
								<p>{career.organization}</p>
								<p>{career.location}</p>
								<p>{career.lastdate}</p>
								<a
									href={career.applylink}
									target="_blank"
									rel="noreferrer"
								>
									<button>Apply</button>
								</a>
							</li>
						))}
					</ul>
					<h2>Old Career Opportunities</h2>
					<ul>
						{oldData.map((career, index) => (
							<li key={index}>
								<h3>µLearn Hiring Call</h3>
								<p>{career.date}</p>
								<p>{career.remuneration}</p>
								<p>{career.role}</p>
								<p>{career.location}</p>
							</li>
						))}
					</ul>
				</div>
			) : (
				<p>Loading careers...</p>
			)}
		</div>
	);
};

export default Careers;
