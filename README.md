## For App Academy Students who wants to turn their public repos private in bulk

---

**note: must follow the naming convention of 'W1D1' or 'w1d1', it will also work if you have other string append before or after it like 'w12d2solo' or 'aa-w1d1'**

---

### Instructions

1. clone this repo
2. npm install
3. create .env file and store your github username and auth token (just paste it, doesn't need quotation marks) here in the format:

```
GITHUB_TOKEN=your_github_token
GITHUB_USERNAME=your_github_name

```

4. run 'node github.js' in the terminal

---

### How to get your github token

1. go to your github account settings

   ![screenshot](https://github.com/em0227/github-tool-for-aA/blob/main/img/screen-shot-1.png)

2. find Developer settings

   ![screenshot](https://github.com/em0227/github-tool-for-aA/blob/main/img/screen-shot.png)

3. click Personal access tokens

   ![screenshot](https://github.com/em0227/github-tool-for-aA/blob/main/img/screen-shot-3.png)

4. generate a new one token, choose your preferred expiration and select the scope of 'repo'

   ![screenshot](https://github.com/em0227/github-tool-for-aA/blob/main/img/screen-shot-4.png)

5. click generate token and copy the generated token immidately
