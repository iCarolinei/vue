const axios = require('axios')

export default class Igdb {
    Client_id = null;
    Client_secret = null;
    Token = null;
    Expired_at = null;
    PageSize = 10

    TwitchTokenUrl = "https://id.twitch.tv/oauth2/token";
    Url = "https://blooming-savannah-76505.herokuapp.com/https://api.igdb.com/v4/"
    GamesData = "fields name,summary,url,cover.*,platforms.*;  sort name; "


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

    async getGames(filter, page, pageSize) {
        let range = " limit " + pageSize + ";";
        if (page > 0)
            range += " offset " + (page * pageSize) + ";";
        let games = await axios.post(this.Url + "games", this.GamesData + filter + range, this.getPayload());
        games = games.data;
        //console.log(games);
        return games;
    }

    async getGamesByGenre(name, page, pageSize) {
        //console.log("getGamesByGenre with name " + name);
        await this.EnsureConnected();

        let genre = this.Genres.find(x => x.name === name);
        if (genre === undefined) return null;

        return this.getGames("where genres = (" + genre["id"] + ");", page, pageSize);
    }

    async getGamesByPlatform(name, page, pageSize) {
        //console.log("getGamesByPlatform with name " + name);
        await this.EnsureConnected();

        let platforms = [];
        switch (name) {
            case 'PC':
                platforms = ["PC"];
                break;
            case 'Playstation':
                platforms = ["PS1", "PS2", "PS3", "PS4", "PS5"];
                break;
            case 'Switch':
                platforms = ["Switch"];
                break;
            case 'Xbox':
                platforms = ["Xbox", "Xbox-360", "Xbox-one", "Xbox-series"];
                break;
            default:
                console.log(`Sorry, we are out of ${name}.`);
        }
        platforms = this.Platforms.filter(p => platforms.includes(p.name));
        let platformIds = platforms.reduce((a, o) => (a.push(o.id), a), []);
        return this.getGames("where platforms = (" + platformIds.join(',') + ");", page, pageSize);
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

    Platforms = [
        {
            id: 6,
            name: "PC"
        },
        {
            id: 7,
            name: "PS1",
            imageUrl: "../assets/platforms/PS1.png"
        },
        {
            id: 8,
            name: "PS2",
            imageUrl: "../assets/platforms/PS2.png"
        },
        {
            id: 9,
            name: "PS3",
            imageUrl: "../assets/platforms/PS3.jpg"
        },
        {
            id: 48,
            name: "PS4",
            imageUrl: "../assets/platforms/PS4.png"
        },
        {
            id: 167,
            name: "PS5",
            imageUrl: "../assets/platforms/PS5.jpeg"
        },
        {
            id: 130,
            name: "Switch",
            imageUrl: "../assets/platforms/switch.png"
        },
        {
            id: 11,
            name: "Xbox",
            imageUrl: "../assets/platforms/xbox.jpg"
        },
        {
            id: 12,
            name: "Xbox 360",
            imageUrl: "../assets/platforms/xbox-360.jpg"
        },
        {
            id: 49,
            name: "Xbox One",
            imageUrl: "../assets/platforms/xbox-one.jpg"
        },
        {
            id: 169,
            name: "Xbox Series",
            imageUrl: "../assets/platforms/xbox-series.jpg"
        }
    ]

}