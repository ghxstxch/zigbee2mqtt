import assert from "node:assert";
import bind from "bind-decorator";
import stringify from "json-stable-stringify-without-jsonify";
import type * as zhc from "zigbee-herdsman-converters";

import logger from "../util/logger";
import * as settings from "../util/settings";
import utils, {assertBinaryExpose, assertEnumExpose, assertNumericExpose, isBinaryExpose, isEnumExpose, isNumericExpose} from "../util/utils";
import Extension from "./extension";

// ... [rest of provided Biome-formatted code pasted above] ...

export default HomeAssistant;