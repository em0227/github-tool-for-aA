require("dotenv").config();
const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

octokit
  .request("GET /users/{username}/repos", {
    username: process.env.GITHUB_USERNAME,
    per_page: "100",
  })
  .then((res) => {
    const filtered = res.data.filter((repo) => {
      const regex = /(W|w)\d{1,2}(D|d)\d/;
      return regex.test(repo.name);
    });
    filtered.forEach((repo) => {
      octokit
        .request("PATCH /repos/{owner}/{repo}", {
          owner: process.env.GITHUB_USERNAME,
          repo: repo.name,
          private: false,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(`${res.data.name} successfully turned private`);
          } else {
            console.log(`${res.data.name} doesn't succeed`);
          }
        });
    });
  });
