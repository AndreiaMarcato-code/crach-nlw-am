const LinksSocialMedia = {
  github: 'AndreiaMarcato-code',
  instagram: 'andreia_cm7',
  facebook: 'andreia.asia',
  twitter: '',
  youtube: ''
}

/*function changeSocialMediaLinks() {
  document.getElementById('userName').textContent = 'Aurora'
} //só cria, mas para executar tem de colocar a informação abaixo */

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    // alert(li.children[0].href)

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
