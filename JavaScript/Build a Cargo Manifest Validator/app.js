/**
 * normalizeUnits
 * Converts the weight of a manifest to kilograms if it's in pounds.
 * Returns a new object without mutating the original manifest.
 */
function normalizeUnits(manifest) {
  const newManifest = { ...manifest };

  if (newManifest.unit === "lb") {
    // Convert pounds to kilograms and round to two decimals
    newManifest.weight = Math.round(newManifest.weight * 0.45 * 100) / 100;
    newManifest.unit = "kg";
  }

  return newManifest;
}

/**
 * validateManifest
 * Checks for missing or invalid properties in a manifest.
 * Returns a new object with errors or an empty object if valid.
 */
function validateManifest(manifest) {
  const errors = {};
  const fields = ["containerId", "destination", "weight", "unit", "hazmat"];

  fields.forEach((field) => {
    if (!(field in manifest)) {
      errors[field] = "Missing";
      return;
    }

    const value = manifest[field];

    switch (field) {
      case "containerId":
        if (!Number.isInteger(value) || value <= 0) {
          errors[field] = "Invalid";
        }
        break;

      case "destination":
        if (typeof value !== "string" || value.trim().length === 0) {
          errors[field] = "Invalid";
        }
        break;

      case "weight":
        if (typeof value !== "number" || Number.isNaN(value) || value <= 0) {
          errors[field] = "Invalid";
        }
        break;

      case "unit":
        if (value !== "kg" && value !== "lb") {
          errors[field] = "Invalid";
        }
        break;

      case "hazmat":
        if (typeof value !== "boolean") {
          errors[field] = "Invalid";
        }
        break;
    }
  });

  return errors;
}

/**
 * processManifest
 * Logs validation results and normalized weight if valid.
 */
function processManifest(manifest) {
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}

// =====================
// Example usage
// =====================

// Valid manifest
processManifest({
  containerId: 55,
  destination: "Carmel",
  weight: 400,
  unit: "lb",
  hazmat: false
});
// Logs:
// Validation success: 55
// Total weight: 180 kg

// Invalid manifest
processManifest({
  containerId: -88,
  destination: "Soledad",
  weight: NaN
});
// Logs:
// Validation error: -88
// { containerId: 'Invalid', destination: 'Missing', weight: 'Invalid', unit: 'Missing', hazmat: 'Missing' }