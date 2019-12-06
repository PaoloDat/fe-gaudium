import {elements, reasons} from "./base";

export const getCriteriaDrawNumber = () => elements.drawCriteriaNumber.value;
export const getUpdateInfoNumber = () => elements.updateInfoNumber.value;

export const getCriteriaValue = id => {
    return document.getElementById(`criteria-${id}`).value;
};

export const getNumber = () => {
    return state.criteria.list.length > 0 ? state.criteria.list.length : 0;
};

export const renderOption = option => {
    return `
     <option value=${option.opt}>${option.text}</option>
    `;

};

export const renderCriteria = (id, groupId) => {
    let optionMarkup = '';
    const reasonByGroupId = reasons.filter(reason => reason.groupId === groupId);
    const data = reasonByGroupId[0].data;
    data.forEach(reason => {
        optionMarkup = optionMarkup + renderOption(reason)
    });

    const markup = `
                            <div class="criteria-list__item" data-removeid=${id} id="select-${id}">
                        <select name="criteria-select__list" id="criteria-${id}" data-criterionid=${id} 
                        class="criteria-select__list criteria-select__list--item">
                            <option value="none" selected>none</option>
                            ${optionMarkup}
                        </select>
                        <select name="result-select__list" id="result-${id}" class="criteria-select__list">
                            <option value="RESULT_EMPTY" selected></option>
                            <option value="RESULT_1">1</option>
                            <option value="RESULT_X">x</option>
                            <option value="RESULT_2">2</option>
                            <option value="RESULT_1X">1X</option>
                            <option value="RESULT_X2">x2</option>
                            <option value="RESULT_12">12</option>
                        </select>
<!--                        <a href="#" class="criteria-select__action criteria-select__action&#45;&#45;info">info</a>-->
                        <a href="#" class="criteria-select__action criteria-select__action--remove">delete</a>
                        <a href="#" class="criteria-select__statistic criteria-select__statistic--tournament">0-0-0&nbsp;&nbsp&nbsp;0-0-0&nbsp;&nbsp;&nbsp;0-0-0</a>
                        <a href="#" class="criteria-select__statistic criteria-select__statistic--all">0-0-0&nbsp;&nbsp;&nbsp;0-0-0&nbsp&nbsp;&nbsp;&nbsp;0-0-0</a>
                         </div>
    `;
    elements.criteriaList.insertAdjacentHTML('afterbegin', markup);
};

export const addCriterion = (id, item) => {
    state.criteria.list[id] = item;
};

export const deleteCriterion = (value, id) => {
    const element = document.querySelector(`[data-removeid="${id}"]`);
    element.parentElement.removeChild(element);
    state.criteria.list[id] = 'none';
};

export const setDrawItToStorage = id => {
    localStorage.setItem("drawId", id);
};

export const getDrawIdFromStorage = () => {
    return localStorage.getItem("drawId");
};

export const setDrawIdInputValue = id => {
    elements.drawCriteriaNumber.value = id;
};


