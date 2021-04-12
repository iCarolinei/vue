const axios = require("axios");
import { func } from "../func.js";

export default class Igdb {
  static Platform_PC = "PC";
  static Platform_Playstation = "Playstation";
  static Platform_Switch = "Switch";
  static Platform_Xbox = "Xbox";

  Client_id = null;
  Client_secret = null;
  Token = null;
  Expired_at = null;
  PageSize = 10;

  TwitchTokenUrl = "https://id.twitch.tv/oauth2/token";
  Url =
    "https://blooming-savannah-76505.herokuapp.com/https://api.igdb.com/v4/";
  GamesData =
    "fields name,summary,url,cover.*,platforms.*,rating,first_release_date;";

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
    this.Token = result.data["access_token"];
    this.Expired_at = new Date();
    this.Expired_at.setSeconds(
      this.Expired_at.getSeconds() + result.data["expires_in"]
    );
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
        Authorization: "Bearer " + this.Token
      }
    };
  }

  mapSort(sort) {
    switch (sort) {
      case "Name":
        return "name";
      case "Date":
        return "first_release_date";
      case "Rating":
        return "rating";
      default:
        return "name";
    }
  }

  async getGames(filter, page, pageSize, sort, sortOrder, search = null) {
    sort = this.mapSort(sort);
    let range = ` limit ${pageSize};`;
    if (page > 0) range += ` offset ${page * pageSize} ;`;

    if (sort === "first_release_date" && sortOrder === "desc") {
      filter = "first_release_date > 0 & " + filter;
    }

    if (sort === "rating" && sortOrder === "desc") {
      filter = "rating_count > 0 & " + filter;
    }

    filter = " where " + filter;
    let data = "";
    if (search != null) data = `search " ${search}";`;
    data += this.GamesData + filter + range;
    if (search == null) data += ` sort ${sort} ${sortOrder};`;
    let games = await axios.post(this.Url + "games", data, this.getPayload());
    games = games.data;
    games.forEach(game => {
      game.platforms = Igdb.mapPlatforms(game.platforms);
    });
    return games;
  }

  static mapPlatforms(platforms) {
    let platformIds = platforms.reduce((a, o) => (a.push(o.id), a), []);
    return Igdb.Platforms.filter(p => platformIds.includes(p.id));
  }

  async getGamesByGenre(name, page, pageSize, sort, sortOrder) {
    await this.EnsureConnected();

    let genre = Igdb.Genres.find(x => x.name === name);
    if (genre === undefined) return null;

    let platforms = Igdb.getAllPlatformItems();

    return this.getGames(
      "platforms = (" +
      Igdb.getPlatformIds(platforms).join(",") +
      ") & genres = (" +
      genre["id"] +
      ");",
      page,
      pageSize,
      sort,
      sortOrder
    );
  }

  async getGamesByPlatform(name, page, pageSize, sort, sortOrder) {
    await this.EnsureConnected();

    let platforms = Igdb.getPlatformItems(name);
    return this.getGames(
      "platforms = (" + Igdb.getPlatformIds(platforms).join(",") + ");",
      page,
      pageSize,
      sort,
      sortOrder
    );
  }

  async getGamesBySearch(search, page, pageSize, sort, sortOrder) {
    await this.EnsureConnected();

    let platforms = Igdb.getAllPlatformItems();
    return this.getGames(
      "platforms = (" + Igdb.getPlatformIds(platforms).join(",") + ");",
      page,
      pageSize,
      sort,
      sortOrder,
      search
    );
  }

  async getGamesByTop(topType, page, pageSize) {
    await this.EnsureConnected();

    let platforms = Igdb.getAllPlatformItems();
    let filter =
      "platforms = (" + Igdb.getPlatformIds(platforms).join(",") + ");";
    let date = func.getDateWithoutTime(new Date());
    date = func.dateToUnixTimestamp(date);
    let sortOrder = "asc";

    switch (topType) {
      case "Last":
        filter = ` first_release_date < ${date} & ` + filter;
        sortOrder = "desc";
        break;
      case "Next":
        filter = ` first_release_date >= ${date} & ` + filter;
        break;
      default:
        console.log(`Unknown topType : ${topType}.`);
        return [];
    }

    return this.getGames(filter, page, pageSize, "Date", sortOrder);
  }
  static getPlatformIds(platformsList) {
    platformsList = Igdb.Platforms.filter(p => platformsList.includes(p.name));
    return platformsList.reduce((a, o) => (a.push(o.id), a), []);
  }

  static getAllPlatformItems() {
    let items = [];
    items = items.concat(Igdb.getPlatformItems(this.Platform_PC));
    items = items.concat(Igdb.getPlatformItems(this.Platform_Playstation));
    items = items.concat(Igdb.getPlatformItems(this.Platform_Switch));
    items = items.concat(Igdb.getPlatformItems(this.Platform_Xbox));

    return items;
  }
  static getPlatformItems(platform) {
    switch (platform) {
      case this.Platform_PC:
        return ["PC"];
      case this.Platform_Playstation:
        return ["PS1", "PS2", "PS3", "PS4", "PS5"];
      case this.Platform_Switch:
        return ["Switch"];
      case this.Platform_Xbox:
        return ["Xbox", "Xbox-360", "Xbox-one", "Xbox-series"];
      default:
        console.log(`Unknown platform : ${platform}.`);
        return [];
    }
  }

  static Genres = [
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
  ];

  static Platforms = [
    {
      id: 6,
      name: "PC",
      imageUrl: "platforms/PC.png" //"https://www.vippng.com/png/detail/375-3757516_pc-logo-png-pc-platform-png.png"
    },
    {
      id: 7,
      name: "PS1",
      imageUrl: "platforms/PS1.png"
    },
    {
      id: 8,
      name: "PS2",
      imageUrl: "platforms/PS2.png"
    },
    {
      id: 9,
      name: "PS3",
      imageUrl: "platforms/PS3.jpg"
    },
    {
      id: 48,
      name: "PS4",
      imageUrl: "platforms/PS4.png"
    },
    {
      id: 167,
      name: "PS5",
      imageUrl: "platforms/PS5.jpeg"
    },
    {
      id: 130,
      name: "Switch",
      imageUrl: "platforms/switch.png"
    },
    {
      id: 11,
      name: "Xbox",
      imageUrl: "platforms/xbox.jpg"
    },
    {
      id: 12,
      name: "Xbox 360",
      imageUrl: "platforms/xbox-360.jpg"
    },
    {
      id: 49,
      name: "Xbox One",
      imageUrl: "platforms/xbox-one.jpg"
    },
    {
      id: 169,
      name: "Xbox Series",
      imageUrl: "platforms/xbox-series.jpg"
    }
  ];
}
