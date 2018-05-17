

const countries = ["Ryssland", "Egypten", "Uruguay"]

export const calculateResult = (games) => {
  const result = countries.map((country) => {
    let playedGames = 0
    let wins = 0
    let draws = 0
    let losts = 0
    let totOwnScore = 0
    let totAgainstScore = 0
    let points = 0

    games.map((game) => {
      if (country === game.homeTeam) {
        playedGames += 1
        totOwnScore += parseInt(game.homeScore)
        totAgainstScore += parseInt(game.awayScore)
          if (game.homeScore > game.awayScore) {
            points += 3
            wins += 1
          } else if (game.homeScore === game.awayScore) {
            points += 1
            draws += 1
          } else {
            losts += 1
          }
          console.log(game.playedGames)
      } else if ( country === game.awayTeam ) {
          playedGames += 1
          totOwnScore += parseInt(game.awayScore)
          totAgainstScore += parseInt(game.homeScore)
            if (game.awayScore > game.homeScore) {
              points += 3
              wins += 1
            } else if (game.homeScore === game.awayScore) {
              points += 1
              draws += 1
            } else {
              losts += 1
            }
        }
      })

      return {country: country, playedGames: playedGames,
        wins: wins, draws: draws, losts: losts,
        totOwnScore: totOwnScore, totAgainstScore: totAgainstScore,
        points: points}

    })
  console.log(result)
  return result
}
