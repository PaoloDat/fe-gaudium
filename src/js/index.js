import {elements} from './view/base';

import * as searchView from './view/searchView';
import * as criteriaView from './view/criteriaView';

import Search from './model/Search';
import Criteria from './model/Criteria';

const state = {};
window.state = state;


/**
 * SEARCH CONTROLLER
 *
 */

const controlSearch = async () => {
    const tournamentName = searchView.getTournamentName().trim();
    state.tournamentName = tournamentName;
    const homeName = searchView.getHomeTeamName().trim();
    state.homeName = homeName;
    const awayName = searchView.getAwayTeamName().trim();
    state.awayName = awayName;
    const fonHome = searchView.getFonHome().trim();
    const fonDraw = searchView.getFonDraw().trim();
    const fonAway = searchView.getFonAway().trim();
    const manHome = searchView.getManHome().trim();
    const manDraw = searchView.getManDraw().trim();
    const manAway = searchView.getManAway().trim();

    state.search = new Search();

    if (tournamentName) {
        await state.search.getTournamentStat(tournamentName);
        searchView.clearResult();
        searchView.renderHeader('Статистика турнира');
        searchView.renderResult(state.search.tournamentStat);
        searchView.renderWDL();
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

    if (tournamentName && manHome && manAway && fonHome && fonAway) {
        await state.search.getPoolQueernessStat(tournamentName, fonHome, fonAway, manHome, manAway);
    }

    controlCriteria();

    const drawId = criteriaView.getDrawIdFromStorage();
    console.log(drawId);
    if (drawId) {
        criteriaView.setDrawIdInputValue(drawId);
        criteriaView.setDrawIdInputValue(drawId);
    }

};

/**
 * CRITERIA CONTROLLER
 *
 */

const controlCriteria = () => {
    state.criteria = new Criteria();

};

/**
 * Event listeners
 *
 */


elements.inputSubmit.addEventListener('click', controlSearch);

elements.inputFonDraw.addEventListener('change', () => {
    const fonHome = searchView.getFonHome().trim();
    const fonDraw = searchView.getFonDraw().trim();

    if (fonHome && fonDraw) {
        elements.inputFonAway.value = 100 - parseInt(fonHome) - parseInt(fonDraw);
    }

});

elements.inputManDraw.addEventListener('change', () => {
    const manHome = searchView.getManHome().trim();
    const manDraw = searchView.getManDraw().trim();

    if (manHome && manDraw) {
        elements.inputManAway.value = (100 - parseFloat(manHome) - parseFloat(manDraw)).toFixed(1);
    }

});

elements.updateInfoButton.addEventListener('click', async event => {
    event.preventDefault();

    const number = criteriaView.getUpdateInfoNumber();

    if (number && event.target.matches('.btn-update-info')) {
        await Criteria.updateInfo(number);
        alert(`Обновлена информация для ${state.criteria.updatedNumber} матчей`);
    } else if (event.target.matches('.btn-update-info')) {
        alert('Введите номер тиража');
    }
});

elements.criteriaSubmit.addEventListener('click', async event => {
    event.preventDefault();
    const drawId = criteriaView.getCriteriaDrawNumber();
    if (drawId && event.target.matches('.btn-criteria-submit')) {
        criteriaView.setDrawItToStorage(drawId);
        console.log(criteriaView.getDrawIdFromStorage());
        const criteria = Array.from(document.querySelectorAll('.criteria-select__list--item')).map(a => a.value).filter(value => value !== 'none');
        await Criteria.sendPrediction(drawId, state.tournamentName, state.homeName, state.awayName, criteria);
        alert("Prediction saved");
    } else if (event.target.matches('.btn-criteria-submit')) {
        alert('Введите номер тиража');
    }

});

elements.criteriaSelect.addEventListener('change', async event => {

    event.preventDefault();


    if (event.target.matches('.criteria-select__list--item')) {

        const value = event.target.value;
        const id = event.target.id;

        if (value && value !== 'none') {
            console.log("event");
            console.log(value);
            console.log(id);
            console.log(state.tournamentName);
        }

    }
});

elements.criteriaSelect.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.matches('.btn-criteria-add')) {
        let id = criteriaView.getNumber();
        // add groupId depending on which the options will  be loaded
        criteriaView.renderCriteria(id, event.target.id);
        criteriaView.addCriterion(id, 'none');
    }

    if (event.target.matches('.criteria-select__action--remove')) {
        const id = event.target.closest('.criteria-list__item').dataset.removeid;
        const item = criteriaView.getCriteriaValue(id);
        criteriaView.deleteCriterion(item, id);
    }
});

elements.criteriaList.addEventListener('change', event => {
    event.preventDefault();
    if (event.target.matches('.criteria-select__list--item, .criteria-select__list--item *')) {
        const id = event.target.closest('.criteria-select__list').dataset.criterionid;
        const item = criteriaView.getCriteriaValue(id);
        criteriaView.addCriterion(id, item);
        console.log(state.criteria.list)

        //Для заполнения статистики после выбора причины
        // const list = document.getElementById(`select-${id}`).getElementsByClassName('criteria-select__statistic--tournament');
        // list[0].textContent = 'mih ha'
    }
});

elements.statOption.addEventListener('click', event => {
    event.preventDefault();
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
