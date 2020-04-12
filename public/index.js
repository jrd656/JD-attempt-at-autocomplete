//// set state
var state = {
    inputText: "original text"
}

var searchInput = document.getElementById('data-input');
var datainputcontainer = document.getElementById('datainputcontainer');
var matchList = document.createElement('matchlist');

const Http = new XMLHttpRequest();
const url = '/data/states.json';
Http.open("GET", url);
Http.send();

var parsedStatesArray;

Http.onreadystatechange = (e) => {
    if (Http.readyState == 4 && Http.status === 200) {
        parsedStatesArray = JSON.parse(Http.responseText)
        console.log(parsedStatesArray)
    }
}

function indexFunc() {

    /////// traversy////////////////////////////
    datainputcontainer.appendChild(matchList)

    // Set up filter of all states by search entry
    const searchStates = searchText => {
        var regex = new RegExp(`^${searchText}`, 'gi');
        let matchedStatesArray = parsedStatesArray.filter(state => {
            return state.name.match(regex) || state.abbr.match(regex);
        });

        // Clear when input or matchedStatesArray are empty
        if (searchText.length === 0) {
            matchedStatesArray = [];
            matchList.innerHTML = '';
        }
        outputHtml(matchedStatesArray); //update html with filtered states
    };

    // Show results in HTML
    const outputHtml = matchedStatesArray => {
        if (matchedStatesArray.length > 0) {
            const html = matchedStatesArray
                .map(
                    match => `<div class="">
    <h4>${match.name} (${match.abbr}) 
    <span class="">${match.capital}</span></h4>
    <small>Lat: ${match.lat} / Long: ${match.long}</small>
   </div>`
                )
                .join('');
            matchList.innerHTML = html
        }
    };

    searchInput.addEventListener('input', () => searchStates(searchInput.value));

}
indexFunc();