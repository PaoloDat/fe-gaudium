import {elements} from './view/base';

import * as searchView from './view/searchView';

import Search from './model/Search';

const state = {};
window.state = state;



/**
 * SEARCH CONTROLLER
 *
 */

const controlSearch = async () => {
    const tournamentName = searchView.getTournamentName().trim();
    const homeName = searchView.getHomeTeamName().trim();
    const awayName = searchView.getAwayTeamName().trim();
    const fonHome = searchView.getFonHome().trim();
    const fonDraw = searchView.getFonDraw().trim();
    const fonAway = searchView.getFonAway().trim();
    const manHome = searchView.getManHome().trim();
    const manDraw = searchView.getManDraw().trim();
    const manAway = searchView.getManAway().trim();

    state.search = new Search();

    if (tournamentName) {
        await state.search.getTournamentStat(tournamentName);
        console.log(state.search.tournamentStat);
    }

    if (tournamentName && homeName) {
        await state.search.getHomeStat(tournamentName, homeName);
        console.log(state.search.homeStat);
    }
};

/**
 * Event listeners
 *
 */


elements.inputSubmit.addEventListener('click', () => {
    controlSearch();
    //Render Stat output for tournament
});