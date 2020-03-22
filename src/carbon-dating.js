const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const t =  0.693 / HALF_LIFE_PERIOD; 

module.exports = function dateSample(sampleActivity) {
  let activity = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string' || isNaN(activity) || activity <= 0 || activity > 15) return false;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / activity) /t);
  return result;
};