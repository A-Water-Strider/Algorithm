function solution(players, callings) {
    const newPlayers = new Map();
    players.forEach((player, idx) => {newPlayers.set(player, idx)})
    
    callings.forEach((calling) => {
        let index = newPlayers.get(calling);
        [players[index - 1], players[index]] = [players[index], players[index - 1]]
        
        newPlayers.set(calling, index - 1);
        newPlayers.set(players[index], index);
    }
    )
    return players;
}