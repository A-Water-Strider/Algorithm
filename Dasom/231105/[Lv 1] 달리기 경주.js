function solution(players, callings) {
  const mapPlayers = new Map();

  players.forEach((item, index) => {
    mapPlayers.set(item, index);
  });

  callings.forEach((item, index) => {
    const callIndex = mapPlayers.get(item);
    const front = players[callIndex - 1];
    players[callIndex - 1] = item;
    players[callIndex] = front;

    mapPlayers.set(item, mapPlayers.get(item) - 1);
    mapPlayers.set(front, mapPlayers.get(front) + 1);
  });
  return players;
}
