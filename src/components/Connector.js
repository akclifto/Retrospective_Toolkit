import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

const customConfig = {
  dictionaries: [adjectives, animals, colors],
  length: 3,
  separator: "-",
};

const getUniqueName = () => uniqueNamesGenerator(customConfig);

export default getUniqueName;
