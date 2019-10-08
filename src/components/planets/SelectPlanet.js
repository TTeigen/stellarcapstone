

export const setPlanet = (solarSystem, name) => {
  const selectedPlanet = solarSystem.find(x=> x.englishName == name)
  return selectedPlanet
}