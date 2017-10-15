/**
 *
 * @namespace faker.airport
 */
var Airport = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * name
   *
   * @method faker.airport.name
   */
  self.name = function () {
    return faker.random.arrayElement(faker.definitions.airport.name);
  };

  self.name.schema = {
    "description": "Generates an international airport.",
    "sampleResults": ["Ford", "Jeep", "Tesla"]
  };


  /**
   * model
   *
   * @method faker.airport.model
   */
  self.model = function () {
    return faker.random.arrayElement(faker.definitions.airport.model);
  };

  self.model.schema = {
    "description": "Generates a airport model.",
    "sampleResults": ["Explorer", "Camry", "Ranchero"]
  };
};

module["exports"] = Vehicle;
