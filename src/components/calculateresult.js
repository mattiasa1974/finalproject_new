


countries: [ "Ryssland", "Sweden", "Germany" ]

export const calculateResult = (games) => {
this.state.countries.map((country) => {
  let playedGames = 0
  let wins = 0
  let draws = 0
  let losts = 0
  let totOwnScore = 0
  let totAgainstScore = 0
  let points = 0

  {this.props.games.map((countryTable) => {

    if (country === games.homeTeam) {
      playedGames += 1
      totOwnScore += games.homeScore
      totAgainstScore += games.awayScore
        if (games.homeScore > games.awayScore) {
          points += 3
          wins += 1
        } else if (games.homeScore === games.awayScore) {
          points += 1
          draws += 1
        } else {
          losts += 1
        }

    } else if ( country === games.awayTeam ) {
        playedGames += 1
        totOwnScore += games.awayScore
        totAgainstScore += games.homeScore
          if (games.awayScore > games.homeScore) {
            points += 3
            wins += 1
          } else if (games.homeScore === games.awayScore) {
            points += 1
            draws += 1
          } else {
            losts += 1
          }
      }
    })}

    return {country: country, playedGames: playedGames,
      wins: wins, draws: draws, losts: losts,
      totOwnScore: totOwnScore, totAgainstScore: totAgainstScore,
      points: points}

  })}
