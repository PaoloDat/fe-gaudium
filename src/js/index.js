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
    }

    if (tournamentName && homeName) {
        await state.search.getHomeTeamStat(tournamentName, homeName);
    }

    if (tournamentName && awayName) {
        await state.search.getAwayTeamStat(tournamentName, awayName);
    }

    if (tournamentName && homeName) {
        await state.search.getHomeTeamBothStat(tournamentName, homeName);
    }

    if (tournamentName && awayName) {
        await state.search.getAwayTeamBothStat(tournamentName, awayName);
    }

    if (tournamentName && homeName && awayName) {
        await state.search.getH2HStat(tournamentName, homeName, awayName);
    }

    if (fonHome && fonDraw && fonAway) {
        await state.search.getFonStat(fonHome, fonDraw, fonAway);
    }

    if (tournamentName && fonHome && fonDraw && fonAway) {
        await state.search.getFonTournamentStat(tournamentName, fonHome, fonDraw, fonAway);
    }


    if (manHome && manDraw && manAway) {
        await state.search.getManStat(manHome, manDraw, manAway);
    }

    if (tournamentName && manHome && manDraw && manAway) {
        await state.search.getManTournamentStat(tournamentName, manHome, manDraw, manAway);
    }

    if (tournamentName && manHome &&  manAway && fonHome  && fonAway) {
        await state.search.getPoolQueernessStat(tournamentName, fonHome, fonAway, manHome, manAway);
    }

    searchView.clearResult();
    searchView.renderHeader('Статистика турнира');
    searchView.renderResult(state.search.tournamentStat);
    searchView.renderWDL();
};

/**
 * Event listeners
 *
 */


elements.inputSubmit.addEventListener('click', controlSearch);

elements.statOption.addEventListener('click', event => {
    if (event.target.matches('.stat-tournament')) {
        if (state.search.tournamentStat) {
            searchView.clearResult();
            searchView.renderHeader('Статистика турнира');
            searchView.renderResult(state.search.tournamentStat);
            searchView.renderWDL();
        }
    }
    if (event.target.matches('.stat-home')) {
        if (state.search.homeTeamStat) {
            searchView.clearResult();
            searchView.renderHeader('Статистика домашней команды');
            searchView.renderResult(state.search.homeTeamStat);
            searchView.renderWDL();
        }
    }
    if (event.target.matches('.stat-away')) {
        if (state.search.awayTeamStat) {
            searchView.clearResult();
            searchView.renderHeader('Статистика гостевой команды');
            searchView.renderResult(state.search.awayTeamStat);
            searchView.renderWDL();
        }
    }
    if (event.target.matches('.stat-home-both')) {
        if (state.search.homeTeamBothStat) {
            searchView.clearResult();
            searchView.renderHeader('Статистика домашней команды в турнире');
            searchView.renderResult(state.search.homeTeamBothStat);
            searchView.renderWDL();
        }
    }
    if (event.target.matches('.stat-away-both')) {
        if (state.search.awayTeamBothStat) {
            searchView.clearResult();
            searchView.renderHeader('Статистика гостевой команды в турнире');
            searchView.renderResult(state.search.awayTeamBothStat);
            searchView.renderWDL();
        }
    }
    if (event.target.matches('.stat-h2h')) {
        if (state.search.h2hStat) {
            searchView.clearResult();
            searchView.renderHeader('Статистика личных встреч');
            searchView.renderResult(state.search.h2hStat);
            searchView.renderWDL();
        }
    }

    if (event.target.matches('.stat-fon')) {
        if (state.search.fonStat) {
            searchView.clearResult();
            searchView.renderHeader('Статистика FON');
            searchView.renderResult(state.search.fonStat);
            searchView.renderWDL();
        }
    }

    if (event.target.matches('.stat-fon-tournament')) {
        if (state.search.fonTournamentStat) {
            searchView.clearResult();
            searchView.renderHeader('Статистика FON TOURNAMENT');
            searchView.renderResult(state.search.fonTournamentStat);
            searchView.renderWDL();
        }
    }


    if (event.target.matches('.stat-man')) {
        if (state.search.manStat) {
            searchView.clearResult();
            searchView.renderHeader('Статистика MAN');
            searchView.renderResult(state.search.manStat);
            searchView.renderWDL();
        }
    }

    if (event.target.matches('.stat-man-tournament')) {
        if (state.search.manTournamentStat) {
            searchView.clearResult();
            searchView.renderHeader('Статистика MAN TOURNAMENT');
            searchView.renderResult(state.search.manTournamentStat);
            searchView.renderWDL();
        }
    }


    if (event.target.matches('.stat-pool-queerness')) {
        if (state.search.poolQueernessStat) {
            searchView.clearResult();
            searchView.renderHeader('Pool Queerness');
            searchView.renderResult(state.search.poolQueernessStat);
            searchView.renderWDL();
        }
    }
});