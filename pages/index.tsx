import { Text } from "./components/Text";
import { Clock } from "./components/Clock";

const Text1 = () => <Text color={"blue"}>Text1</Text>;

const Text2 = () => <Text color={"red"}>Text2</Text>;

export default () => (
  <div>
    <Text1 />
    <Text2 />
    <Clock />
  </div>
);
