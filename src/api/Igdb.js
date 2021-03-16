const axios = require('axios')

export default class Igdb {
    Client_id = null;
    Client_secret = null;
    Token = null;
    Expired_at = null;

    TwitchTokenUrl = "https://id.twitch.tv/oauth2/token";
    Url = "https://blooming-savannah-76505.herokuapp.com/https://api.igdb.com/v4/"

    constructor(client_id, client_secret) {
        this.Client_id = client_id;
        this.Client_secret = client_secret;
    }

    async getToken() {
        let payload = {
            params: {
                client_id: this.Client_id,
                client_secret: this.Client_secret,
                grant_type: "client_credentials"
            }
        };

        let result = await axios.post(this.TwitchTokenUrl, null, payload);
        this.Token = result.data['access_token'];
        this.Expired_at = new Date();
        this.Expired_at.setSeconds(this.Expired_at.getSeconds() + result.data['expires_in'])
    }

    async EnsureConnected() {
        if (this.Token === null || this.Expired_at < new Date()) {
            await this.getToken();
        }

    }

    async getGamesByGenre(name) {
        await this.EnsureConnected();

        let genre = this.Genres.find(x => x.name === name);
        if (genre === undefined) return null;

        let data = "fields *; where genres = (" + genre["id"] + ");";

        let payload = {
            headers: {
                "Client-ID": this.Client_id,
                Authorization: "Bearer " + this.Token,
            }
        };

        let result = await axios.post(this.Url + "games", data, payload);

        console.log(result.data);



    }

    Genres = [
        {
            id: 4,
            name: "Fighting"
        },
        {
            id: 5,
            name: "FPS"
        },
        {
            id: 7,
            name: "Music"
        },
        {
            id: 8,
            name: "Platform"
        },
        {
            id: 9,
            name: "Puzzle"
        },
        {
            id: 10,
            name: "Racing"
        },
        {
            id: 11,
            name: "RTS"
        },
        {
            id: 12,
            name: "RPG"
        },
        {
            id: 13,
            name: "Simulator"
        },
        {
            id: 14,
            name: "Sport"
        }
    ]


}