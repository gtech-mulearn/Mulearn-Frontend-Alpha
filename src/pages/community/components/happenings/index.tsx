import { Events } from "../../../home/components/events";
import styles from "./index.module.css";
import * as Tabs from "@radix-ui/react-tabs";

export const Happenings = () => {
	return (
		<div className={styles.Wrapper}>
			<h1>
				<span className="colorText">Happenings</span> at µLearn
			</h1>

			<Tabs.Root defaultValue="tab1" orientation="vertical">
				<Tabs.List aria-label="tabs" className={styles.TabsList}>
					<Tabs.Trigger className={styles.Tabs} value="tab1">
						One
					</Tabs.Trigger>
					<Tabs.Trigger className={styles.Tabs} value="tab2">
						Two
					</Tabs.Trigger>
					<Tabs.Trigger className={styles.Tabs} value="tab3">
						Three
					</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="tab1">
					<Events />
				</Tabs.Content>
				<Tabs.Content value="tab2">test1</Tabs.Content>
				<Tabs.Content value="tab3">test2</Tabs.Content>
			</Tabs.Root>
		</div>
	);
};
