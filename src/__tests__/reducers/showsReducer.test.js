import showsReducer from "../../reducers/showsReducer"
const initialState = {
    allShows: [],
    lists: [],
    featuredShows: [],
    favoriteShows: []
  };

  describe("serchReducer", () => {
    it("should return initial state", () => {
        expect(showsReducer(undefined, {})).toEqual(initialState);
      });

    it("__it should set the searchResults from the fetchSearchResults action__", () => {
      const payload = [{"id":2,"url":"http://www.tvmaze.com/shows/2/person-of-interest","name":"Person of Interest","type":"Scripted","language":"English","genres":["Action","Crime","Science-Fiction"],"status":"Ended","runtime":60,"premiered":"2011-09-22","officialSite":"http://www.cbs.com/shows/person_of_interest/","schedule":{"time":"22:00","days":["Tuesday"]},"rating":{"average":8.9},"weight":95,"network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":28376,"thetvdb":248742,"imdb":"tt1839578"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"},"summary":"<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>","updated":1588773151,"_links":{"self":{"href":"http://api.tvmaze.com/shows/2"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/659372"}}},{"id":9753,"url":"http://www.tvmaze.com/shows/9753/persons-of-interest-the-asio-files","name":"Persons of Interest - The ASIO Files","type":"Documentary","language":"English","genres":["Mystery"],"status":"Ended","runtime":60,"premiered":"2014-01-07","officialSite":null,"schedule":{"time":"20:30","days":["Tuesday"]},"rating":{"average":null},"weight":46,"network":{"id":140,"name":"SBS","country":{"name":"Australia","code":"AU","timezone":"Australia/Sydney"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":277040,"imdb":"tt3234962"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/33/84556.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/33/84556.jpg"},"summary":"<p>In each episode of this new Walkley-nominated series, a 'person of interest' is given their previously secret ASIO intelligence file and asked to explain the allegations contained in it. The program unravels a unique personal, political and cultural history of Australia that still resonates in a world gripped by controversial figures like Edward Snowden and Julian Assange. The series uncovers never-before-seen photographs and covert surveillance film recorded by ASIO.</p>","updated":1536521516,"_links":{"self":{"href":"http://api.tvmaze.com/shows/9753"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/523068"}}}]
      expect(
        showsReducer(initialState, {
          type: "VIEW_SHOWS",
          payload: payload,
        }).allShows
      ).toEqual(payload);
    });
    it("__it should set the searchTerm from the setQueryTerm action__", () => {
        const payload = ["Drama","Crime"]
        expect(
          showsReducer(initialState, {
            type: "FETCH_LISTS",
            payload: payload,
          }).lists
        ).toEqual(payload);
    });
    it("__it should set the searchTerm from the setQueryTerm action__", () => {
        const payload = [{"id":2,"url":"http://www.tvmaze.com/shows/2/person-of-interest","name":"Person of Interest","type":"Scripted","language":"English","genres":["Action","Crime","Science-Fiction"],"status":"Ended","runtime":60,"premiered":"2011-09-22","officialSite":"http://www.cbs.com/shows/person_of_interest/","schedule":{"time":"22:00","days":["Tuesday"]},"rating":{"average":8.9},"weight":95,"network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":28376,"thetvdb":248742,"imdb":"tt1839578"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"},"summary":"<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>","updated":1588773151,"_links":{"self":{"href":"http://api.tvmaze.com/shows/2"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/659372"}}},{"id":9753,"url":"http://www.tvmaze.com/shows/9753/persons-of-interest-the-asio-files","name":"Persons of Interest - The ASIO Files","type":"Documentary","language":"English","genres":["Mystery"],"status":"Ended","runtime":60,"premiered":"2014-01-07","officialSite":null,"schedule":{"time":"20:30","days":["Tuesday"]},"rating":{"average":null},"weight":46,"network":{"id":140,"name":"SBS","country":{"name":"Australia","code":"AU","timezone":"Australia/Sydney"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":277040,"imdb":"tt3234962"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/33/84556.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/33/84556.jpg"},"summary":"<p>In each episode of this new Walkley-nominated series, a 'person of interest' is given their previously secret ASIO intelligence file and asked to explain the allegations contained in it. The program unravels a unique personal, political and cultural history of Australia that still resonates in a world gripped by controversial figures like Edward Snowden and Julian Assange. The series uncovers never-before-seen photographs and covert surveillance film recorded by ASIO.</p>","updated":1536521516,"_links":{"self":{"href":"http://api.tvmaze.com/shows/9753"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/523068"}}}]
        expect(
          showsReducer(initialState, {
            type: "FETCH_CAROUSEL",
            payload: payload,
          }).featuredShows
        ).toEqual(payload);
    });
    it("__it should set the searchTerm from the setQueryTerm action__", () => {
        const payload = [{"id":2,"url":"http://www.tvmaze.com/shows/2/person-of-interest","name":"Person of Interest","type":"Scripted","language":"English","genres":["Action","Crime","Science-Fiction"],"status":"Ended","runtime":60,"premiered":"2011-09-22","officialSite":"http://www.cbs.com/shows/person_of_interest/","schedule":{"time":"22:00","days":["Tuesday"]},"rating":{"average":8.9},"weight":95,"network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":28376,"thetvdb":248742,"imdb":"tt1839578"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"},"summary":"<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>","updated":1588773151,"_links":{"self":{"href":"http://api.tvmaze.com/shows/2"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/659372"}}}]
        expect(
          showsReducer(initialState, {
            type: "ADD_TO_FAVORITE",
            payload: payload,
          }).favoriteShows
        ).toEqual(payload);
    });
    it("__it should set the searchTerm from the setQueryTerm action__", () => {
        const payload = [{"id":2,"url":"http://www.tvmaze.com/shows/2/person-of-interest","name":"Person of Interest","type":"Scripted","language":"English","genres":["Action","Crime","Science-Fiction"],"status":"Ended","runtime":60,"premiered":"2011-09-22","officialSite":"http://www.cbs.com/shows/person_of_interest/","schedule":{"time":"22:00","days":["Tuesday"]},"rating":{"average":8.9},"weight":95,"network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":28376,"thetvdb":248742,"imdb":"tt1839578"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"},"summary":"<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>","updated":1588773151,"_links":{"self":{"href":"http://api.tvmaze.com/shows/2"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/659372"}}}]
        expect(
          showsReducer(initialState, {
            type: "ADD_TO_FAVORITE",
            payload: payload,
          }).favoriteShows
        ).toEqual(payload);
    });
    it("__it should set the searchTerm from the setQueryTerm action__", () => {
        const payload = [{"id":2,"url":"http://www.tvmaze.com/shows/2/person-of-interest","name":"Person of Interest","type":"Scripted","language":"English","genres":["Action","Crime","Science-Fiction"],"status":"Ended","runtime":60,"premiered":"2011-09-22","officialSite":"http://www.cbs.com/shows/person_of_interest/","schedule":{"time":"22:00","days":["Tuesday"]},"rating":{"average":8.9},"weight":95,"network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":28376,"thetvdb":248742,"imdb":"tt1839578"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"},"summary":"<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>","updated":1588773151,"_links":{"self":{"href":"http://api.tvmaze.com/shows/2"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/659372"}}}]
        expect(
          showsReducer(initialState, {
            type: "REMOVE_FROM_FAVORITE",
            payload: payload,
          }).favoriteShows
        ).toEqual([]);
    });
})