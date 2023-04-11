// Particle movement simulation using Lagrangian model
// Gulf of Guinea parameters
const currentSpeed = 0.4; // m/s
const currentDirection = "east";
const windSpeed = 5.6; // m/s
const tide = "average low and high tide";
const waterTemperature = 80; // Fahrenheit
const waterSalinity = 35.4; // ‰

// Particle properties
const particleSize = 0.001; // meters
const particleDensity = 1000; // kg/m^3

// Calculate particle movement
const particleSpeed = Math.sqrt(currentSpeed ** 2 + windSpeed ** 2); // resultant speed
const particleDirection = Math.atan2(windSpeed, currentSpeed) * (180 / Math.PI); // resultant direction in degrees

// Format the results
const formattedResults = `
Particle Movement:
- Particle Speed: ${particleSpeed.toFixed(2)} m/s
- Particle Direction: ${particleDirection.toFixed(2)} degrees ${currentDirection}
- Tide: ${tide}
- Water Temperature: ${waterTemperature} Fahrenheit
- Water Salinity: ${waterSalinity} ‰
`;

// Display the results
console.log(formattedResults);
