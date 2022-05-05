export function useNumber() {
  const getRandom = () => {
    return Math.random();
  };
  return { getRandom };
}
