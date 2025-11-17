import merge from "lodash.merge";
import YAML from "js-yaml";
import path from "path";
import fs from "fs";

function loadYaml(file: string) {
  return YAML.load(fs.readFileSync(path.join(__dirname, "swagger", file), "utf8"));
}

const base = loadYaml("base.yaml");
const auth = loadYaml("auth.yaml");
const wallet = loadYaml("wallet.yaml");

export const swaggerSpec = merge({}, base, auth, wallet);
