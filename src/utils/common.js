export const randonNumber = (min, max) => {
  return min + Math.trunc(Math.random() * (max - min));
}