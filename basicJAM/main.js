const listRepos = async (username) => {
   const repos = await fetch(
       `https://api.github.com/users/${username}/repos?type=owner`
   ).then(res => res.json())
   .catch(error => console.error(error))

    const markup = repos.map((repo) => {
        return `
        
        <li>
            <a href="${repo.html_url}">${repo.name}</a> 
            // Star Gazers ${repo.stargazers_count}
        </li>
        
        `
    }).join('')

    const content = document.getElementById('content');
    content.innerHTML = `<ul>${markup}</ul>`
}

listRepos('HawiCaesar')