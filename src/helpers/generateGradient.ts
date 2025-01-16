const COLORS = [
  "hsl(10deg, 56%, 91%)",
  "hsl(0deg, 59%, 88%)",
  "hsl(316deg, 72%, 86%)",
  "hsl(267deg, 84%, 81%)",
  "hsl(343deg, 81%, 75%)",
  "hsl(350deg, 65%, 77%)",
  "hsl(23deg, 92%, 75%)",
  "hsl(41deg, 86%, 83%)",
  "hsl(115deg, 54%, 76%)",
  "hsl(170deg, 57%, 73%)",
  "hsl(189deg, 71%, 73%)",
  "hsl(199deg, 76%, 69%)",
  "hsl(217deg, 92%, 76%)",
  "hsl(232deg, 97%, 85%)",
];

export default function () {
  const shuffledColors = COLORS.map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);

  const randomNumOfLayers = Math.floor(Math.random() * 9) + 1;
  const meshGradients = [];

  for (let i = 0; i < randomNumOfLayers; i++) {
    const start = Math.floor(Math.random() * 100);
    const end = Math.floor(Math.random() * 100);

    meshGradients.push(
      `radial-gradient(at ${Number(start)}% ${Number(end)}%, ${shuffledColors[i]} 0px, transparent 50%)`,
    );
  }

  return meshGradients.join(", ");
}
