import { Detail } from "./detail";
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
            What’s new
          </Tabs.Trigger>
          <Tabs.Trigger className={styles.Tabs} value="tab2">
            Weekly Events
          </Tabs.Trigger>
          <Tabs.Trigger className={styles.Tabs} value="tab3">
            Past Events
          </Tabs.Trigger>
          <Tabs.Trigger className={styles.Tabs} value="tab4">
            Calendar
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          <Detail />
        </Tabs.Content>
        <Tabs.Content value="tab2">
          {" "}
          <Detail />
        </Tabs.Content>
        <Tabs.Content value="tab3">
          {" "}
          <Detail />
        </Tabs.Content>
        <Tabs.Content value="tab4">
          {" "}
          <Detail />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};
