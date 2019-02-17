/** @format */

import { AppRegistry } from "react-native";
import makeApp from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => makeApp);
