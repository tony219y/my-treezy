// import wretch from 'wretch'

export const getGithubInfo = async () => {
    const clientId = 'Ov23lifn4TJRNKZ0bkIp';
    const redirectUri = 'http://localhost:8080/api/auth/git/callback';
    const authUrl =
        `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user:email read:user`
    window.location.href = authUrl;

}
