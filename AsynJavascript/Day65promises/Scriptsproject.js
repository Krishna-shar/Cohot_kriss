let searchbtn = document.querySelector(".search");
let usernameinp = document.querySelector(".usernameinp");
let card = document.querySelector(".card");
let reposSection = document.getElementById("reposSection");
let reposList = document.querySelector(".reposList");

function getProfileData(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(raw => {
            if (!raw.ok) throw new Error('User not found');
            return raw.json();
        });
}

function getRepo(username) {
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        .then(raw => {
            if (!raw.ok) throw new Error('Failed to fetch repos...');
            return raw.json();
        });
}

function decorateProfileData(details) {
        console.log(details)
    let data = `
    <div class="flex-shrink-0 flex justify-center sm:justify-start">
      <img src="${details.avatar_url}" alt="User Avatar"
        class="w-32 h-32 rounded-full object-cover border-2 border-gray-600"
      />
    </div>

    <!-- User Info -->
    <div class="mt-6 sm:mt-0 flex-1">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-2xl font-bold text-white">${details.name || "No Name"}</h2>
        <a href="${details.html_url}" target="_blank" class="mt-2 sm:mt-0 text-sm text-blue-400 hover:underline">
          @${details.login}
        </a>
      </div>
      <p class="mt-3 text-gray-400">
        ${details.bio  ? details.bio : ""}
      </p>

      <!-- Extra Info -->
      <div class="mt-4 space-y-2 text-gray-300 text-sm">
        <p><span class="font-medium text-white">📍 Location:</span> ${details.location || "Not Available"}</p>
        <p><span class="font-medium text-white">🏢 Company:</span> ${details.company || "Not Available"}</p>
        <p><span class="font-medium text-white">🔗 Blog:</span> 
          <a href="${details.blog}" target="_blank" class="text-blue-400 hover:underline">
            ${details.blog||"Not Available"}
          </a>
        </p>
      </div>

      <!-- Stats -->
      <div class="mt-6 grid grid-cols-3 gap-4">
        <div class="bg-gray-700 rounded-xl p-4 text-center">
          <p class="text-lg font-semibold text-white">${details.public_repos}</p>
          <p class="text-gray-400 text-sm">Repos</p>
        </div>
        <div class="bg-gray-700 rounded-xl p-4 text-center">
          <p class="text-lg font-semibold text-white">${details.followers}</p>
          <p class="text-gray-400 text-sm">Followers</p>
        </div>
        <div class="bg-gray-700 rounded-xl p-4 text-center">
          <p class="text-lg font-semibold text-white">${details.following}</p>
          <p class="text-gray-400 text-sm">Following</p>
        </div>
      </div>
    </div>
  `;

    card.innerHTML = data;
}

function decorateRepos(repos) {
    console.log(repos)
    reposList.innerHTML = "";
    repos.forEach(repo => {
        let repoCard = `
      <div class="bg-gray-800 border border-gray-700 rounded-xl p-5 hover:bg-gray-750 transition">
        <a href="${repo.html_url}" target="_blank" class="text-blue-400 font-semibold hover:underline">${repo.name}</a>
        <p class="mt-2 text-gray-400 text-sm">${repo.description || "No description"}</p>
        <div class="mt-3 flex items-center gap-6 text-xs text-gray-400">
          <span>⭐ ${repo.stargazers_count}</span>
          ${repo.language ? `<span class="flex items-center gap-1">
            <span class="w-3 h-3 rounded-full bg-blue-400"></span> ${repo.language}
          </span>` : ""}
        </div>
      </div>
    `;
        reposList.innerHTML += repoCard;

    });
    reposSection.classList.remove("hidden");
}

searchbtn.addEventListener("click", function (e) {
    e.preventDefault();
    let username = usernameinp.value.trim();

    if (username.length > 0) {
        getProfileData(username)
            .then(function (data) {
                decorateProfileData(data);
                return getRepo(username);
            })
            .then(function (repos) {
                decorateRepos(repos);
            })
            .catch(err => {
                card.innerHTML = `<p class="text-red-500">${err.message}</p>`;
                reposSection.classList.add("hidden");
            });
    } else {
        alert("Please enter a username!");
    }
});


