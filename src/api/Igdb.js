const axios = require('axios')

export default class Igdb {
    Client_id = null;
    Client_secret = null;
    Token = null;
    Expired_at = null;

    TwitchTokenUrl = "https://id.twitch.tv/oauth2/token";
    Url = "https://blooming-savannah-76505.herokuapp.com/https://api.igdb.com/v4/"


    constructor() {
        this.Client_id = "sayhrtdt1r6m4g5c8mjj34cz4u9ktk";
        this.Client_secret = "6sjje1v6hv0exicx0sy14jhxu847ix";
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
    getPayload() {
        return {
            headers: {
                "Client-ID": this.Client_id,
                Authorization: "Bearer " + this.Token,
            }
        };
    }

    async getGamesByGenre(name) {
        console.log("getGamesByGenre with genre " + name);
        await this.EnsureConnected();

        let genre = this.Genres.find(x => x.name === name);
        if (genre === undefined) return null;

        let data = "fields name,summary,url,screenshots.*; where genres = (" + genre["id"] + ");limit 500; sort name;";

        let games = await axios.post(this.Url + "games", data, this.getPayload());
        games = games.data;


        console.log(games);
        return games;


    }



    Genres = [
        {
            id: 2,
            name: "Point-and-click"
        },
        {
            id: 4,
            name: "Fighting"
        },
        {
            id: 5,
            name: "Shooter"
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
            name: "Real Time Strategy (RTS)"
        },
        {
            id: 12,
            name: "Role-playing (RPG)"
        },
        {
            id: 13,
            name: "Simulator"
        },
        {
            id: 14,
            name: "Sport"
        },
        {
            id: 15,
            name: "Strategy"
        },
        {
            id: 16,
            name: "Turn-based strategy (TBS)"
        },
        {
            id: 24,
            name: "Tactical"
        },
        {
            id: 25,
            name: "Hack and slash/Beat 'em up"
        },
        {
            id: 26,
            name: "Quiz/Trivia"
        },
        {
            id: 30,
            name: "Pinball"
        },
        {
            id: 31,
            name: "Adventure"
        },
        {
            id: 32,
            name: "Indie"
        },
        {
            id: 33,
            name: "Arcade"
        },
        {
            id: 34,
            name: "Visual Novel"
        },
        {
            id: 35,
            name: "Card & Board Game"
        },
        {
            id: 36,
            name: "MOBA"
        }
    ]


}