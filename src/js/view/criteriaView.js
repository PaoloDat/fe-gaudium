import {elements} from "./base";

export const getCriteriaValue =  id => {
    return document.getElementById(`criteria-${id}`).value;
};

export const getNumber = () => {
    return state.criteria.list.length > 0 ? state.criteria.list.length : 0;
};

export const renderCriteria = id => {
    const markup = `
                            <div class="criteria-list__item" data-removeid=${id}>
                        <select name="criteria-select__list" id="criteria-${id}" data-criterionid=${id} class="criteria-select__list">
                            <option value="none" selected>none</option>
                            <option value="TOURNAMENT_SOME_GAMES_WITHOUT_DRAW">TOURNAMENT&nbsp;&nbsp;&nbsp;Серия матчей без ничьих</option>
                            <option value="TOURNAMENT_SOME_GAMES_WITHOUT_HOME_WIN">TOURNAMENT&nbsp;&nbsp;&nbsp;Серия матчей без побед хозяев</option>
                            <option value="TOURNAMENT_SOME_GAMES_WITHOUT_AWAY_WIN">TOURNAMENT&nbsp;&nbsp;&nbsp;Серия матчей без побед гостей</option>
                        </select>
                        <select name="result-select__list" id="result-${id}" class="criteria-select__list">
                            <option value="RESULT_1">1</option>
                            <option value="RESULT_X">x</option>
                            <option value="RESULT_2">2</option>
                            <option value="RESULT_1X">1X</option>
                            <option value="RESULT_X2">x2</option>
                            <option value="RESULT_12">12</option>
                        </select>
                        <a href="#" class="criteria-select__action criteria-select__action--info">info</a>
                        <a href="#" class="criteria-select__action criteria-select__action--remove">delete</a>
                         </div>
    `;
    elements.criteriaList.insertAdjacentHTML('beforeend', markup);
};

export const addCriterion = (id, item) => {
    state.criteria.list[id] = item;
};

export const deleteCriterion = (value, id) => {
    const element = document.querySelector(`[data-removeid="${id}"]`);
    element.parentElement.removeChild(element);
    state.criteria.list[id] = 'none';
};


