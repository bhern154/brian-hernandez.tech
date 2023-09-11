// Use MUST use el, data, computed, and methods options to support your Vue Application
const searchTrackerComponent = {
    template: ` <div class="p-3 mb-2 bg-secondary text-white">
                    <div class="col list-group list-group-flush" v-for="artist in searchTracker">
                        <small>
                            {{artist.artistName}}
                            | {{ artist.time }}
                        </small>
                    </div>
                </div>`,
    props: ['searchTracker'],
};
const apple = new Vue({
    el: '#artists',
    data: {
        appName: 'APPLE SEARCH',
        appSubName: 'SEARCH FOR ARTISTS',
        searchResult: {}, //List of objects from search
        fetchedArtist: {}, //Object fetched by artist id
        artistIsChosen: false,
        artistId: '',
        searchTracker: [],
        imageUrl: 'https://cdn.vox-cdn.com/thumbor/uhiV60VSgFTV9yy20OVyUuN_cic=/0x0:1020x638/1820x1213/filters:focal(429x238:591x400)/cdn.vox-cdn.com/uploads/chorus_image/image/63942138/C_j1HJ5XoAAR7c5.0.jpg',
    },
    computed: {
        searchResultNumber: function () {
            if (this.searchResult) {
                return this.searchResult.length;
            } else {
                return 0;
            }
        },
    },
    methods: {
        searchArtists: async function () {
            const search = document.getElementById('searchTextbox').value

            const response = await axios.post(`http://localhost:8888/api/search`, {artistSearch: search});
            this.searchResult = response.data;
        },
        artistDisplay: async function (artistId) {
            this.artistIsChosen = true
            this.artistId = artistId

            const response = await axios.post(`http://localhost:8888/api/artist`, {artistIDE:artistId});
            this.fetchedArtist = response.data
        },
        searchAgain: async function () {
            this.trackSearch() //add artist to history
            this.artistIsChosen = false
            this.artistId=''
            this.fetchedArtist={}
            this.searchResult={}
        },
        trackSearch: function () {
            
            // Create date in format mm/dd/yyyy
            const now = new Date();
            const dd = now.getDate();
            const mm = now.getMonth()+1; 
            const yyyy = now.getFullYear();
            const today = `${mm}/${dd}/${yyyy}`

            let isInHistory = false;

            for(let i=0; i<this.searchTracker.length; i++){
                if(this.searchTracker[i].artistName === this.fetchedArtist.artistName){
                    isInHistory = true;
                }
            }

            if(!isInHistory){
                this.searchTracker.push({
                    artistName: this.fetchedArtist.artistName,
                    time: today,
                    artistId: this.fetchedArtist.artistId
                });
            }
        },
    },
    components: {
        'tracker-component': searchTrackerComponent,
    },

})