const superheroToken = '2027180347704847'

const baseUrl = `https://superheroapi.com/api.php//${superheroToken}`

const superHeroButton = document.getElementById('superHeroButton')

const heroImageDiv = document.getElementById('heroImage')

const searchButton = document.getElementById('searchButton')

const searchInput= document.getElementById('searchInput')

const getSuperHero = (id, name) => {
  fetch(`${baseUrl}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json.powerstats)
      getStatsHTML(json)
      const name = `<h2>${json.name}</h2>`
      const intelligence = `<p>Intelligence:${json.powerstats.intelligence}</p>`
      const strength = `<p>Strength:${json.powerstats.strength}</p>`
      heroImageDiv.innerHTML = `${name}  <img src='${json.image.url}' height=200 width=200/> ${intelligence} ${strength}`
    })
}

const getStatsHTML = (character) => {
  for (stat in character.powerstats) {
    console.log(stat)
  }
}

const getSearchSuperHero = (name) => {
  // console.log(searchInput.value)
  fetch(`${baseUrl}/search/${name}`)
  .then(response => response.json())
  .then(json => {
    const hero = json.results[0]
    // console.log(hero)
    heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=200 width=200/>`
  })
}

const randomHero = () => {
  const numberOfHeroes = 731
  return Math.ceil(Math.random() * 731)
}
superHeroButton.onclick = () => getSuperHero(randomHero())

searchButton.onclick = () => getSearchSuperHero(searchInput.value)

