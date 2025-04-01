
// GitHub Repositories Fetcher
const username = "TeriChyou"; // <- Replace with your GitHub username

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {
    const repoList = document.getElementById("repo-list");
    repoList.innerHTML = ""; // Clear placeholder

    data.forEach(repo => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = repo.html_url;
      a.textContent = repo.name;
      a.target = "_blank";
      li.appendChild(a);
      repoList.appendChild(li);
    });
  })
  .catch(error => {
    document.getElementById("repo-list").innerHTML = "Error loading repos.";
    console.error("GitHub API error:", error);
  });
