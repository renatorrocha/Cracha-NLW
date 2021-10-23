const linksSocialMedia = {
  github: 'renatorrocha',
  youtube: 'channel/UCVet9rAE5lUscwP6SlrZ5AQ',
  facebook: 'renatinho.bakugan2002',
  instagram: 'reneto.rocha',
  twitter: 'meupaielesbico',
  linkedin: 'in/renato-rocha-72a247213/'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileinfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileinfos()