export const elements = {
    inputSubmit: document.querySelector('.btn__submit-input'),
    tableOutputResult: document.querySelector('.table-output__results'),
    statOption: document.querySelector('.stat-options'),
    criteriaList: document.querySelector('.criteria-list'),
    criteriaSelect: document.querySelector('.criteria-select'),
    criteriaSubmit: document.querySelector('.criteria-select__button--submit'),
    updateInfoButton: document.querySelector('.update-info__button'),
    optionList: document.querySelector('.criteria-select__list--item'),
    inputTournamentName: document.getElementById('tournament-name'),
    inputHomeName: document.getElementById('home-name'),
    inputAwayName: document.getElementById('away-name'),
    inputFonHome: document.getElementById('fon-home'),
    inputFonDraw: document.getElementById('fon-draw'),
    inputFonAway: document.getElementById('fon-away'),
    inputManHome: document.getElementById('man-home'),
    inputManDraw: document.getElementById('man-draw'),
    inputManAway: document.getElementById('man-away'),
    drawCriteriaNumber: document.getElementById('draw-criteria-number'),
    updateInfoNumber: document.getElementById('update-info')
};

export const reasons = [

    {
        groupId: "0",
        data: [
            {opt: 'DB_TOURNAMENT_0', text: 'База данных. Турнир. WDL. Приемущество 1'}, {
                opt: 'DB_TOURNAMENT_1',
                text: 'База данных. Турнир. WDL. Приемущество Х'
            }, {opt: 'DB_TOURNAMENT_2', text: 'База данных. Турнир. WDL. Приемущество 2'}, {
                opt: 'DB_TOURNAMENT_3',
                text: 'База данных. Турнир. WDL. Приемущество 1Х'
            }, {opt: 'DB_TOURNAMENT_4', text: 'База данных. Турнир. WDL. Приемущество 12'}, {
                opt: 'DB_TOURNAMENT_5',
                text: 'База данных. Турнир. WDL. Приемущество Х2'
            }, {opt: 'DB_TOURNAMENT_6', text: 'База данных. Турнир. WDL. Серия 1'}, {
                opt: 'DB_TOURNAMENT_7',
                text: 'База данных. Турнир. WDL. Серия Х'
            }, {opt: 'DB_TOURNAMENT_8', text: 'База данных. Турнир. WDL. Серия 2'}, {
                opt: 'DB_TOURNAMENT_9',
                text: 'База данных. Турнир. WDL. Серия без 1'
            }, {opt: 'DB_TOURNAMENT_10', text: 'База данных. Турнир. WDL. Серия без Х'}, {
                opt: 'DB_TOURNAMENT_11',
                text: 'База данных. Турнир. WDL. Серия без 2'
            }, {opt: 'DB_TOURNAMENT_12', text: 'База данных. Турнир. FON. Приемущество 1'}, {
                opt: 'DB_TOURNAMENT_13',
                text: 'База данных. Турнир. FON. Приемущество Х'
            }, {opt: 'DB_TOURNAMENT_14', text: 'База данных. Турнир. FON. Приемущество 2'}, {
                opt: 'DB_TOURNAMENT_15',
                text: 'База данных. Турнир. FON. Приемущество 1Х'
            }, {opt: 'DB_TOURNAMENT_16', text: 'База данных. Турнир. FON. Приемущество 12'}, {
                opt: 'DB_TOURNAMENT_17',
                text: 'База данных. Турнир. FON. Приемущество Х2'
            }, {opt: 'DB_TOURNAMENT_18', text: 'База данных. Турнир. FON. Серия 1'}, {
                opt: 'DB_TOURNAMENT_19',
                text: 'База данных. Турнир. FON. Серия Х'
            }, {opt: 'DB_TOURNAMENT_20', text: 'База данных. Турнир. FON. Серия 2'}, {
                opt: 'DB_TOURNAMENT_21',
                text: 'База данных. Турнир. FON. Серия без 1'
            }, {opt: 'DB_TOURNAMENT_22', text: 'База данных. Турнир. FON. Серия без Х'}, {
                opt: 'DB_TOURNAMENT_23',
                text: 'База данных. Турнир. FON. Серия без 2'
            }, {opt: 'DB_TOURNAMENT_24', text: 'База данных. Турнир. MAN. Приемущество 1'}, {
                opt: 'DB_TOURNAMENT_25',
                text: 'База данных. Турнир. MAN. Приемущество Х'
            }, {opt: 'DB_TOURNAMENT_26', text: 'База данных. Турнир. MAN. Приемущество 2'}, {
                opt: 'DB_TOURNAMENT_27',
                text: 'База данных. Турнир. MAN. Приемущество 1Х'
            }, {opt: 'DB_TOURNAMENT_28', text: 'База данных. Турнир. MAN. Приемущество 12'}, {
                opt: 'DB_TOURNAMENT_29',
                text: 'База данных. Турнир. MAN. Приемущество Х2'
            }, {opt: 'DB_TOURNAMENT_30', text: 'База данных. Турнир. MAN. Серия 1'}, {
                opt: 'DB_TOURNAMENT_31',
                text: 'База данных. Турнир. MAN. Серия Х'
            }, {opt: 'DB_TOURNAMENT_32', text: 'База данных. Турнир. MAN. Серия 2'}, {
                opt: 'DB_TOURNAMENT_33',
                text: 'База данных. Турнир. MAN. Серия без 1'
            }, {opt: 'DB_TOURNAMENT_34', text: 'База данных. Турнир. MAN. Серия без Х'}, {
                opt: 'DB_TOURNAMENT_35',
                text: 'База данных. Турнир. MAN. Серия без 2'
            },
        ]
    },
    {
        groupId: "1",
        data: [
            {opt: 'DB_HOME_0', text: 'База данных. Хозяева. WDL. Приемущество 1'}, {
                opt: 'DB_HOME_1',
                text: 'База данных. Хозяева. WDL. Приемущество Х'
            }, {opt: 'DB_HOME_2', text: 'База данных. Хозяева. WDL. Приемущество 2'}, {
                opt: 'DB_HOME_3',
                text: 'База данных. Хозяева. WDL. Приемущество 1Х'
            }, {opt: 'DB_HOME_4', text: 'База данных. Хозяева. WDL. Приемущество 12'}, {
                opt: 'DB_HOME_5',
                text: 'База данных. Хозяева. WDL. Приемущество Х2'
            }, {opt: 'DB_HOME_6', text: 'База данных. Хозяева. WDL. Серия 1'}, {
                opt: 'DB_HOME_7',
                text: 'База данных. Хозяева. WDL. Серия Х'
            }, {opt: 'DB_HOME_8', text: 'База данных. Хозяева. WDL. Серия 2'}, {
                opt: 'DB_HOME_9',
                text: 'База данных. Хозяева. WDL. Серия без 1'
            }, {opt: 'DB_HOME_10', text: 'База данных. Хозяева. WDL. Серия без Х'}, {
                opt: 'DB_HOME_11',
                text: 'База данных. Хозяева. WDL. Серия без 2'
            }, {opt: 'DB_HOME_12', text: 'База данных. Хозяева. FON. Приемущество 1'}, {
                opt: 'DB_HOME_13',
                text: 'База данных. Хозяева. FON. Приемущество Х'
            }, {opt: 'DB_HOME_14', text: 'База данных. Хозяева. FON. Приемущество 2'}, {
                opt: 'DB_HOME_15',
                text: 'База данных. Хозяева. FON. Приемущество 1Х'
            }, {opt: 'DB_HOME_16', text: 'База данных. Хозяева. FON. Приемущество 12'}, {
                opt: 'DB_HOME_17',
                text: 'База данных. Хозяева. FON. Приемущество Х2'
            }, {opt: 'DB_HOME_18', text: 'База данных. Хозяева. FON. Серия 1'}, {
                opt: 'DB_HOME_19',
                text: 'База данных. Хозяева. FON. Серия Х'
            }, {opt: 'DB_HOME_20', text: 'База данных. Хозяева. FON. Серия 2'}, {
                opt: 'DB_HOME_21',
                text: 'База данных. Хозяева. FON. Серия без 1'
            }, {opt: 'DB_HOME_22', text: 'База данных. Хозяева. FON. Серия без Х'}, {
                opt: 'DB_HOME_23',
                text: 'База данных. Хозяева. FON. Серия без 2'
            }, {opt: 'DB_HOME_24', text: 'База данных. Хозяева. MAN. Приемущество 1'}, {
                opt: 'DB_HOME_25',
                text: 'База данных. Хозяева. MAN. Приемущество Х'
            }, {opt: 'DB_HOME_26', text: 'База данных. Хозяева. MAN. Приемущество 2'}, {
                opt: 'DB_HOME_27',
                text: 'База данных. Хозяева. MAN. Приемущество 1Х'
            }, {opt: 'DB_HOME_28', text: 'База данных. Хозяева. MAN. Приемущество 12'}, {
                opt: 'DB_HOME_29',
                text: 'База данных. Хозяева. MAN. Приемущество Х2'
            }, {opt: 'DB_HOME_30', text: 'База данных. Хозяева. MAN. Серия 1'}, {
                opt: 'DB_HOME_31',
                text: 'База данных. Хозяева. MAN. Серия Х'
            }, {opt: 'DB_HOME_32', text: 'База данных. Хозяева. MAN. Серия 2'}, {
                opt: 'DB_HOME_33',
                text: 'База данных. Хозяева. MAN. Серия без 1'
            }, {opt: 'DB_HOME_34', text: 'База данных. Хозяева. MAN. Серия без Х'}, {
                opt: 'DB_HOME_35',
                text: 'База данных. Хозяева. MAN. Серия без 2'
            },

        ]
    },
    {
        groupId: "2",
        data: [
            {opt: 'DB_AWAY_0', text: 'База данных. Гости. WDL. Приемущество 1'}, {
                opt: 'DB_AWAY_1',
                text: 'База данных. Гости. WDL. Приемущество Х'
            }, {opt: 'DB_AWAY_2', text: 'База данных. Гости. WDL. Приемущество 2'}, {
                opt: 'DB_AWAY_3',
                text: 'База данных. Гости. WDL. Приемущество 1Х'
            }, {opt: 'DB_AWAY_4', text: 'База данных. Гости. WDL. Приемущество 12'}, {
                opt: 'DB_AWAY_5',
                text: 'База данных. Гости. WDL. Приемущество Х2'
            }, {opt: 'DB_AWAY_6', text: 'База данных. Гости. WDL. Серия 1'}, {
                opt: 'DB_AWAY_7',
                text: 'База данных. Гости. WDL. Серия Х'
            }, {opt: 'DB_AWAY_8', text: 'База данных. Гости. WDL. Серия 2'}, {
                opt: 'DB_AWAY_9',
                text: 'База данных. Гости. WDL. Серия без 1'
            }, {opt: 'DB_AWAY_10', text: 'База данных. Гости. WDL. Серия без Х'}, {
                opt: 'DB_AWAY_11',
                text: 'База данных. Гости. WDL. Серия без 2'
            }, {opt: 'DB_AWAY_12', text: 'База данных. Гости. FON. Приемущество 1'}, {
                opt: 'DB_AWAY_13',
                text: 'База данных. Гости. FON. Приемущество Х'
            }, {opt: 'DB_AWAY_14', text: 'База данных. Гости. FON. Приемущество 2'}, {
                opt: 'DB_AWAY_15',
                text: 'База данных. Гости. FON. Приемущество 1Х'
            }, {opt: 'DB_AWAY_16', text: 'База данных. Гости. FON. Приемущество 12'}, {
                opt: 'DB_AWAY_17',
                text: 'База данных. Гости. FON. Приемущество Х2'
            }, {opt: 'DB_AWAY_18', text: 'База данных. Гости. FON. Серия 1'}, {
                opt: 'DB_AWAY_19',
                text: 'База данных. Гости. FON. Серия Х'
            }, {opt: 'DB_AWAY_20', text: 'База данных. Гости. FON. Серия 2'}, {
                opt: 'DB_AWAY_21',
                text: 'База данных. Гости. FON. Серия без 1'
            }, {opt: 'DB_AWAY_22', text: 'База данных. Гости. FON. Серия без Х'}, {
                opt: 'DB_AWAY_23',
                text: 'База данных. Гости. FON. Серия без 2'
            }, {opt: 'DB_AWAY_24', text: 'База данных. Гости. MAN. Приемущество 1'}, {
                opt: 'DB_AWAY_25',
                text: 'База данных. Гости. MAN. Приемущество Х'
            }, {opt: 'DB_AWAY_26', text: 'База данных. Гости. MAN. Приемущество 2'}, {
                opt: 'DB_AWAY_27',
                text: 'База данных. Гости. MAN. Приемущество 1Х'
            }, {opt: 'DB_AWAY_28', text: 'База данных. Гости. MAN. Приемущество 12'}, {
                opt: 'DB_AWAY_29',
                text: 'База данных. Гости. MAN. Приемущество Х2'
            }, {opt: 'DB_AWAY_30', text: 'База данных. Гости. MAN. Серия 1'}, {
                opt: 'DB_AWAY_31',
                text: 'База данных. Гости. MAN. Серия Х'
            }, {opt: 'DB_AWAY_32', text: 'База данных. Гости. MAN. Серия 2'}, {
                opt: 'DB_AWAY_33',
                text: 'База данных. Гости. MAN. Серия без 1'
            }, {opt: 'DB_AWAY_34', text: 'База данных. Гости. MAN. Серия без Х'}, {
                opt: 'DB_AWAY_35',
                text: 'База данных. Гости. MAN. Серия без 2'
            },
        ]
    },
    {
        groupId: "3",
        data: [
            {opt: 'DB_HOME_ONLY_0', text: 'База данных. Хозяева дома. WDL. Приемущество 1'}, {
                opt: 'DB_HOME_ONLY_1',
                text: 'База данных. Хозяева дома. WDL. Приемущество Х'
            }, {opt: 'DB_HOME_ONLY_2', text: 'База данных. Хозяева дома. WDL. Приемущество 2'}, {
                opt: 'DB_HOME_ONLY_3',
                text: 'База данных. Хозяева дома. WDL. Приемущество 1Х'
            }, {opt: 'DB_HOME_ONLY_4', text: 'База данных. Хозяева дома. WDL. Приемущество 12'}, {
                opt: 'DB_HOME_ONLY_5',
                text: 'База данных. Хозяева дома. WDL. Приемущество Х2'
            }, {opt: 'DB_HOME_ONLY_6', text: 'База данных. Хозяева дома. WDL. Серия 1'}, {
                opt: 'DB_HOME_ONLY_7',
                text: 'База данных. Хозяева дома. WDL. Серия Х'
            }, {opt: 'DB_HOME_ONLY_8', text: 'База данных. Хозяева дома. WDL. Серия 2'}, {
                opt: 'DB_HOME_ONLY_9',
                text: 'База данных. Хозяева дома. WDL. Серия без 1'
            }, {opt: 'DB_HOME_ONLY_10', text: 'База данных. Хозяева дома. WDL. Серия без Х'}, {
                opt: 'DB_HOME_ONLY_11',
                text: 'База данных. Хозяева дома. WDL. Серия без 2'
            }, {
                opt: 'DB_HOME_ONLY_12',
                text: 'База данных. Хозяева дома. FON. Приемущество 1'
            }, {
                opt: 'DB_HOME_ONLY_13',
                text: 'База данных. Хозяева дома. FON. Приемущество Х'
            }, {
                opt: 'DB_HOME_ONLY_14',
                text: 'База данных. Хозяева дома. FON. Приемущество 2'
            }, {
                opt: 'DB_HOME_ONLY_15',
                text: 'База данных. Хозяева дома. FON. Приемущество 1Х'
            }, {
                opt: 'DB_HOME_ONLY_16',
                text: 'База данных. Хозяева дома. FON. Приемущество 12'
            }, {
                opt: 'DB_HOME_ONLY_17',
                text: 'База данных. Хозяева дома. FON. Приемущество Х2'
            }, {opt: 'DB_HOME_ONLY_18', text: 'База данных. Хозяева дома. FON. Серия 1'}, {
                opt: 'DB_HOME_ONLY_19',
                text: 'База данных. Хозяева дома. FON. Серия Х'
            }, {opt: 'DB_HOME_ONLY_20', text: 'База данных. Хозяева дома. FON. Серия 2'}, {
                opt: 'DB_HOME_ONLY_21',
                text: 'База данных. Хозяева дома. FON. Серия без 1'
            }, {opt: 'DB_HOME_ONLY_22', text: 'База данных. Хозяева дома. FON. Серия без Х'}, {
                opt: 'DB_HOME_ONLY_23',
                text: 'База данных. Хозяева дома. FON. Серия без 2'
            }, {
                opt: 'DB_HOME_ONLY_24',
                text: 'База данных. Хозяева дома. MAN. Приемущество 1'
            }, {
                opt: 'DB_HOME_ONLY_25',
                text: 'База данных. Хозяева дома. MAN. Приемущество Х'
            }, {
                opt: 'DB_HOME_ONLY_26',
                text: 'База данных. Хозяева дома. MAN. Приемущество 2'
            }, {
                opt: 'DB_HOME_ONLY_27',
                text: 'База данных. Хозяева дома. MAN. Приемущество 1Х'
            }, {
                opt: 'DB_HOME_ONLY_28',
                text: 'База данных. Хозяева дома. MAN. Приемущество 12'
            }, {
                opt: 'DB_HOME_ONLY_29',
                text: 'База данных. Хозяева дома. MAN. Приемущество Х2'
            }, {opt: 'DB_HOME_ONLY_30', text: 'База данных. Хозяева дома. MAN. Серия 1'}, {
                opt: 'DB_HOME_ONLY_31',
                text: 'База данных. Хозяева дома. MAN. Серия Х'
            }, {opt: 'DB_HOME_ONLY_32', text: 'База данных. Хозяева дома. MAN. Серия 2'}, {
                opt: 'DB_HOME_ONLY_33',
                text: 'База данных. Хозяева дома. MAN. Серия без 1'
            }, {opt: 'DB_HOME_ONLY_34', text: 'База данных. Хозяева дома. MAN. Серия без Х'}, {
                opt: 'DB_HOME_ONLY_35',
                text: 'База данных. Хозяева дома. MAN. Серия без 2'
            },
        ]
    },
    {
        groupId: "4",
        data: [
            {opt: 'DB_AWAY_ONLY_0', text: 'База данных. Гости в гостях. WDL. Приемущество 1'}, {
                opt: 'DB_AWAY_ONLY_1',
                text: 'База данных. Гости в гостях. WDL. Приемущество Х'
            }, {
                opt: 'DB_AWAY_ONLY_2',
                text: 'База данных. Гости в гостях. WDL. Приемущество 2'
            }, {
                opt: 'DB_AWAY_ONLY_3',
                text: 'База данных. Гости в гостях. WDL. Приемущество 1Х'
            }, {
                opt: 'DB_AWAY_ONLY_4',
                text: 'База данных. Гости в гостях. WDL. Приемущество 12'
            }, {
                opt: 'DB_AWAY_ONLY_5',
                text: 'База данных. Гости в гостях. WDL. Приемущество Х2'
            }, {opt: 'DB_AWAY_ONLY_6', text: 'База данных. Гости в гостях. WDL. Серия 1'}, {
                opt: 'DB_AWAY_ONLY_7',
                text: 'База данных. Гости в гостях. WDL. Серия Х'
            }, {opt: 'DB_AWAY_ONLY_8', text: 'База данных. Гости в гостях. WDL. Серия 2'}, {
                opt: 'DB_AWAY_ONLY_9',
                text: 'База данных. Гости в гостях. WDL. Серия без 1'
            }, {opt: 'DB_AWAY_ONLY_10', text: 'База данных. Гости в гостях. WDL. Серия без Х'}, {
                opt: 'DB_AWAY_ONLY_11',
                text: 'База данных. Гости в гостях. WDL. Серия без 2'
            }, {
                opt: 'DB_AWAY_ONLY_12',
                text: 'База данных. Гости в гостях. FON. Приемущество 1'
            }, {
                opt: 'DB_AWAY_ONLY_13',
                text: 'База данных. Гости в гостях. FON. Приемущество Х'
            }, {
                opt: 'DB_AWAY_ONLY_14',
                text: 'База данных. Гости в гостях. FON. Приемущество 2'
            }, {
                opt: 'DB_AWAY_ONLY_15',
                text: 'База данных. Гости в гостях. FON. Приемущество 1Х'
            }, {
                opt: 'DB_AWAY_ONLY_16',
                text: 'База данных. Гости в гостях. FON. Приемущество 12'
            }, {
                opt: 'DB_AWAY_ONLY_17',
                text: 'База данных. Гости в гостях. FON. Приемущество Х2'
            }, {opt: 'DB_AWAY_ONLY_18', text: 'База данных. Гости в гостях. FON. Серия 1'}, {
                opt: 'DB_AWAY_ONLY_19',
                text: 'База данных. Гости в гостях. FON. Серия Х'
            }, {opt: 'DB_AWAY_ONLY_20', text: 'База данных. Гости в гостях. FON. Серия 2'}, {
                opt: 'DB_AWAY_ONLY_21',
                text: 'База данных. Гости в гостях. FON. Серия без 1'
            }, {opt: 'DB_AWAY_ONLY_22', text: 'База данных. Гости в гостях. FON. Серия без Х'}, {
                opt: 'DB_AWAY_ONLY_23',
                text: 'База данных. Гости в гостях. FON. Серия без 2'
            }, {
                opt: 'DB_AWAY_ONLY_24',
                text: 'База данных. Гости в гостях. MAN. Приемущество 1'
            }, {
                opt: 'DB_AWAY_ONLY_25',
                text: 'База данных. Гости в гостях. MAN. Приемущество Х'
            }, {
                opt: 'DB_AWAY_ONLY_26',
                text: 'База данных. Гости в гостях. MAN. Приемущество 2'
            }, {
                opt: 'DB_AWAY_ONLY_27',
                text: 'База данных. Гости в гостях. MAN. Приемущество 1Х'
            }, {
                opt: 'DB_AWAY_ONLY_28',
                text: 'База данных. Гости в гостях. MAN. Приемущество 12'
            }, {
                opt: 'DB_AWAY_ONLY_29',
                text: 'База данных. Гости в гостях. MAN. Приемущество Х2'
            }, {opt: 'DB_AWAY_ONLY_30', text: 'База данных. Гости в гостях. MAN. Серия 1'}, {
                opt: 'DB_AWAY_ONLY_31',
                text: 'База данных. Гости в гостях. MAN. Серия Х'
            }, {opt: 'DB_AWAY_ONLY_32', text: 'База данных. Гости в гостях. MAN. Серия 2'}, {
                opt: 'DB_AWAY_ONLY_33',
                text: 'База данных. Гости в гостях. MAN. Серия без 1'
            }, {opt: 'DB_AWAY_ONLY_34', text: 'База данных. Гости в гостях. MAN. Серия без Х'}, {
                opt: 'DB_AWAY_ONLY_35',
                text: 'База данных. Гости в гостях. MAN. Серия без 2'
            },
        ]
    },
    {
        groupId: "5",
        data: [
            {opt: 'DB_H2H_0', text: 'База данных. H2H. WDL. Приемущество 1'}, {
                opt: 'DB_H2H_1',
                text: 'База данных. H2H. WDL. Приемущество Х'
            }, {opt: 'DB_H2H_2', text: 'База данных. H2H. WDL. Приемущество 2'}, {
                opt: 'DB_H2H_3',
                text: 'База данных. H2H. WDL. Приемущество 1Х'
            }, {opt: 'DB_H2H_4', text: 'База данных. H2H. WDL. Приемущество 12'}, {
                opt: 'DB_H2H_5',
                text: 'База данных. H2H. WDL. Приемущество Х2'
            }, {opt: 'DB_H2H_6', text: 'База данных. H2H. WDL. Серия 1'}, {
                opt: 'DB_H2H_7',
                text: 'База данных. H2H. WDL. Серия Х'
            }, {opt: 'DB_H2H_8', text: 'База данных. H2H. WDL. Серия 2'}, {
                opt: 'DB_H2H_9',
                text: 'База данных. H2H. WDL. Серия без 1'
            }, {opt: 'DB_H2H_10', text: 'База данных. H2H. WDL. Серия без Х'}, {
                opt: 'DB_H2H_11',
                text: 'База данных. H2H. WDL. Серия без 2'
            }, {opt: 'DB_H2H_12', text: 'База данных. H2H. FON. Приемущество 1'}, {
                opt: 'DB_H2H_13',
                text: 'База данных. H2H. FON. Приемущество Х'
            }, {opt: 'DB_H2H_14', text: 'База данных. H2H. FON. Приемущество 2'}, {
                opt: 'DB_H2H_15',
                text: 'База данных. H2H. FON. Приемущество 1Х'
            }, {opt: 'DB_H2H_16', text: 'База данных. H2H. FON. Приемущество 12'}, {
                opt: 'DB_H2H_17',
                text: 'База данных. H2H. FON. Приемущество Х2'
            }, {opt: 'DB_H2H_18', text: 'База данных. H2H. FON. Серия 1'}, {
                opt: 'DB_H2H_19',
                text: 'База данных. H2H. FON. Серия Х'
            }, {opt: 'DB_H2H_20', text: 'База данных. H2H. FON. Серия 2'}, {
                opt: 'DB_H2H_21',
                text: 'База данных. H2H. FON. Серия без 1'
            }, {opt: 'DB_H2H_22', text: 'База данных. H2H. FON. Серия без Х'}, {
                opt: 'DB_H2H_23',
                text: 'База данных. H2H. FON. Серия без 2'
            }, {opt: 'DB_H2H_24', text: 'База данных. H2H. MAN. Приемущество 1'}, {
                opt: 'DB_H2H_25',
                text: 'База данных. H2H. MAN. Приемущество Х'
            }, {opt: 'DB_H2H_26', text: 'База данных. H2H. MAN. Приемущество 2'}, {
                opt: 'DB_H2H_27',
                text: 'База данных. H2H. MAN. Приемущество 1Х'
            }, {opt: 'DB_H2H_28', text: 'База данных. H2H. MAN. Приемущество 12'}, {
                opt: 'DB_H2H_29',
                text: 'База данных. H2H. MAN. Приемущество Х2'
            }, {opt: 'DB_H2H_30', text: 'База данных. H2H. MAN. Серия 1'}, {
                opt: 'DB_H2H_31',
                text: 'База данных. H2H. MAN. Серия Х'
            }, {opt: 'DB_H2H_32', text: 'База данных. H2H. MAN. Серия 2'}, {
                opt: 'DB_H2H_33',
                text: 'База данных. H2H. MAN. Серия без 1'
            }, {opt: 'DB_H2H_34', text: 'База данных. H2H. MAN. Серия без Х'}, {
                opt: 'DB_H2H_35',
                text: 'База данных. H2H. MAN. Серия без 2'
            },
        ]
    },
    {
        groupId: "6",
        data: [
            {opt: 'DB_FON_VALUES_0', text: 'База данных. FON. WDL. Приемущество 1'}, {
                opt: 'DB_FON_VALUES_1',
                text: 'База данных. FON. WDL. Приемущество Х'
            }, {opt: 'DB_FON_VALUES_2', text: 'База данных. FON. WDL. Приемущество 2'}, {
                opt: 'DB_FON_VALUES_3',
                text: 'База данных. FON. WDL. Приемущество 1Х'
            }, {opt: 'DB_FON_VALUES_4', text: 'База данных. FON. WDL. Приемущество 12'}, {
                opt: 'DB_FON_VALUES_5',
                text: 'База данных. FON. WDL. Приемущество Х2'
            }, {opt: 'DB_FON_VALUES_6', text: 'База данных. FON. WDL. Серия 1'}, {
                opt: 'DB_FON_VALUES_7',
                text: 'База данных. FON. WDL. Серия Х'
            }, {opt: 'DB_FON_VALUES_8', text: 'База данных. FON. WDL. Серия 2'}, {
                opt: 'DB_FON_VALUES_9',
                text: 'База данных. FON. WDL. Серия без 1'
            }, {opt: 'DB_FON_VALUES_10', text: 'База данных. FON. WDL. Серия без Х'}, {
                opt: 'DB_FON_VALUES_11',
                text: 'База данных. FON. WDL. Серия без 2'
            }, {opt: 'DB_FON_VALUES_12', text: 'База данных. FON. FON. Приемущество 1'}, {
                opt: 'DB_FON_VALUES_13',
                text: 'База данных. FON. FON. Приемущество Х'
            }, {opt: 'DB_FON_VALUES_14', text: 'База данных. FON. FON. Приемущество 2'}, {
                opt: 'DB_FON_VALUES_15',
                text: 'База данных. FON. FON. Приемущество 1Х'
            }, {opt: 'DB_FON_VALUES_16', text: 'База данных. FON. FON. Приемущество 12'}, {
                opt: 'DB_FON_VALUES_17',
                text: 'База данных. FON. FON. Приемущество Х2'
            }, {opt: 'DB_FON_VALUES_18', text: 'База данных. FON. FON. Серия 1'}, {
                opt: 'DB_FON_VALUES_19',
                text: 'База данных. FON. FON. Серия Х'
            }, {opt: 'DB_FON_VALUES_20', text: 'База данных. FON. FON. Серия 2'}, {
                opt: 'DB_FON_VALUES_21',
                text: 'База данных. FON. FON. Серия без 1'
            }, {opt: 'DB_FON_VALUES_22', text: 'База данных. FON. FON. Серия без Х'}, {
                opt: 'DB_FON_VALUES_23',
                text: 'База данных. FON. FON. Серия без 2'
            }, {opt: 'DB_FON_VALUES_24', text: 'База данных. FON. MAN. Приемущество 1'}, {
                opt: 'DB_FON_VALUES_25',
                text: 'База данных. FON. MAN. Приемущество Х'
            }, {opt: 'DB_FON_VALUES_26', text: 'База данных. FON. MAN. Приемущество 2'}, {
                opt: 'DB_FON_VALUES_27',
                text: 'База данных. FON. MAN. Приемущество 1Х'
            }, {opt: 'DB_FON_VALUES_28', text: 'База данных. FON. MAN. Приемущество 12'}, {
                opt: 'DB_FON_VALUES_29',
                text: 'База данных. FON. MAN. Приемущество Х2'
            }, {opt: 'DB_FON_VALUES_30', text: 'База данных. FON. MAN. Серия 1'}, {
                opt: 'DB_FON_VALUES_31',
                text: 'База данных. FON. MAN. Серия Х'
            }, {opt: 'DB_FON_VALUES_32', text: 'База данных. FON. MAN. Серия 2'}, {
                opt: 'DB_FON_VALUES_33',
                text: 'База данных. FON. MAN. Серия без 1'
            }, {opt: 'DB_FON_VALUES_34', text: 'База данных. FON. MAN. Серия без Х'}, {
                opt: 'DB_FON_VALUES_35',
                text: 'База данных. FON. MAN. Серия без 2'
            },
        ]
    },
    {
        groupId: "7",
        data: [
            {
                opt: 'DB_FON_TOURNAMENT_VALUES_0',
                text: 'База данных. FON_TOURNAMENT. WDL. Приемущество 1'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_1',
                text: 'База данных. FON_TOURNAMENT. WDL. Приемущество Х'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_2',
                text: 'База данных. FON_TOURNAMENT. WDL. Приемущество 2'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_3',
                text: 'База данных. FON_TOURNAMENT. WDL. Приемущество 1Х'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_4',
                text: 'База данных. FON_TOURNAMENT. WDL. Приемущество 12'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_5',
                text: 'База данных. FON_TOURNAMENT. WDL. Приемущество Х2'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_6',
                text: 'База данных. FON_TOURNAMENT. WDL. Серия 1'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_7',
                text: 'База данных. FON_TOURNAMENT. WDL. Серия Х'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_8',
                text: 'База данных. FON_TOURNAMENT. WDL. Серия 2'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_9',
                text: 'База данных. FON_TOURNAMENT. WDL. Серия без 1'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_10',
                text: 'База данных. FON_TOURNAMENT. WDL. Серия без Х'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_11',
                text: 'База данных. FON_TOURNAMENT. WDL. Серия без 2'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_12',
                text: 'База данных. FON_TOURNAMENT. FON. Приемущество 1'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_13',
                text: 'База данных. FON_TOURNAMENT. FON. Приемущество Х'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_14',
                text: 'База данных. FON_TOURNAMENT. FON. Приемущество 2'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_15',
                text: 'База данных. FON_TOURNAMENT. FON. Приемущество 1Х'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_16',
                text: 'База данных. FON_TOURNAMENT. FON. Приемущество 12'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_17',
                text: 'База данных. FON_TOURNAMENT. FON. Приемущество Х2'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_18',
                text: 'База данных. FON_TOURNAMENT. FON. Серия 1'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_19',
                text: 'База данных. FON_TOURNAMENT. FON. Серия Х'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_20',
                text: 'База данных. FON_TOURNAMENT. FON. Серия 2'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_21',
                text: 'База данных. FON_TOURNAMENT. FON. Серия без 1'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_22',
                text: 'База данных. FON_TOURNAMENT. FON. Серия без Х'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_23',
                text: 'База данных. FON_TOURNAMENT. FON. Серия без 2'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_24',
                text: 'База данных. FON_TOURNAMENT. MAN. Приемущество 1'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_25',
                text: 'База данных. FON_TOURNAMENT. MAN. Приемущество Х'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_26',
                text: 'База данных. FON_TOURNAMENT. MAN. Приемущество 2'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_27',
                text: 'База данных. FON_TOURNAMENT. MAN. Приемущество 1Х'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_28',
                text: 'База данных. FON_TOURNAMENT. MAN. Приемущество 12'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_29',
                text: 'База данных. FON_TOURNAMENT. MAN. Приемущество Х2'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_30',
                text: 'База данных. FON_TOURNAMENT. MAN. Серия 1'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_31',
                text: 'База данных. FON_TOURNAMENT. MAN. Серия Х'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_32',
                text: 'База данных. FON_TOURNAMENT. MAN. Серия 2'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_33',
                text: 'База данных. FON_TOURNAMENT. MAN. Серия без 1'
            }, {
                opt: 'DB_FON_TOURNAMENT_VALUES_34',
                text: 'База данных. FON_TOURNAMENT. MAN. Серия без Х'
            }, {opt: 'DB_FON_TOURNAMENT_VALUES_35', text: 'База данных. FON_TOURNAMENT. MAN. Серия без 2'},
        ]
    },
    {
        groupId: "8",
        data: [
            {opt: 'DB_MAN_VALUES_0', text: 'База данных. MAN. WDL. Приемущество 1'}, {
                opt: 'DB_MAN_VALUES_1',
                text: 'База данных. MAN. WDL. Приемущество Х'
            }, {opt: 'DB_MAN_VALUES_2', text: 'База данных. MAN. WDL. Приемущество 2'}, {
                opt: 'DB_MAN_VALUES_3',
                text: 'База данных. MAN. WDL. Приемущество 1Х'
            }, {opt: 'DB_MAN_VALUES_4', text: 'База данных. MAN. WDL. Приемущество 12'}, {
                opt: 'DB_MAN_VALUES_5',
                text: 'База данных. MAN. WDL. Приемущество Х2'
            }, {opt: 'DB_MAN_VALUES_6', text: 'База данных. MAN. WDL. Серия 1'}, {
                opt: 'DB_MAN_VALUES_7',
                text: 'База данных. MAN. WDL. Серия Х'
            }, {opt: 'DB_MAN_VALUES_8', text: 'База данных. MAN. WDL. Серия 2'}, {
                opt: 'DB_MAN_VALUES_9',
                text: 'База данных. MAN. WDL. Серия без 1'
            }, {opt: 'DB_MAN_VALUES_10', text: 'База данных. MAN. WDL. Серия без Х'}, {
                opt: 'DB_MAN_VALUES_11',
                text: 'База данных. MAN. WDL. Серия без 2'
            }, {opt: 'DB_MAN_VALUES_12', text: 'База данных. MAN. FON. Приемущество 1'}, {
                opt: 'DB_MAN_VALUES_13',
                text: 'База данных. MAN. FON. Приемущество Х'
            }, {opt: 'DB_MAN_VALUES_14', text: 'База данных. MAN. FON. Приемущество 2'}, {
                opt: 'DB_MAN_VALUES_15',
                text: 'База данных. MAN. FON. Приемущество 1Х'
            }, {opt: 'DB_MAN_VALUES_16', text: 'База данных. MAN. FON. Приемущество 12'}, {
                opt: 'DB_MAN_VALUES_17',
                text: 'База данных. MAN. FON. Приемущество Х2'
            }, {opt: 'DB_MAN_VALUES_18', text: 'База данных. MAN. FON. Серия 1'}, {
                opt: 'DB_MAN_VALUES_19',
                text: 'База данных. MAN. FON. Серия Х'
            }, {opt: 'DB_MAN_VALUES_20', text: 'База данных. MAN. FON. Серия 2'}, {
                opt: 'DB_MAN_VALUES_21',
                text: 'База данных. MAN. FON. Серия без 1'
            }, {opt: 'DB_MAN_VALUES_22', text: 'База данных. MAN. FON. Серия без Х'}, {
                opt: 'DB_MAN_VALUES_23',
                text: 'База данных. MAN. FON. Серия без 2'
            }, {opt: 'DB_MAN_VALUES_24', text: 'База данных. MAN. MAN. Приемущество 1'}, {
                opt: 'DB_MAN_VALUES_25',
                text: 'База данных. MAN. MAN. Приемущество Х'
            }, {opt: 'DB_MAN_VALUES_26', text: 'База данных. MAN. MAN. Приемущество 2'}, {
                opt: 'DB_MAN_VALUES_27',
                text: 'База данных. MAN. MAN. Приемущество 1Х'
            }, {opt: 'DB_MAN_VALUES_28', text: 'База данных. MAN. MAN. Приемущество 12'}, {
                opt: 'DB_MAN_VALUES_29',
                text: 'База данных. MAN. MAN. Приемущество Х2'
            }, {opt: 'DB_MAN_VALUES_30', text: 'База данных. MAN. MAN. Серия 1'}, {
                opt: 'DB_MAN_VALUES_31',
                text: 'База данных. MAN. MAN. Серия Х'
            }, {opt: 'DB_MAN_VALUES_32', text: 'База данных. MAN. MAN. Серия 2'}, {
                opt: 'DB_MAN_VALUES_33',
                text: 'База данных. MAN. MAN. Серия без 1'
            }, {opt: 'DB_MAN_VALUES_34', text: 'База данных. MAN. MAN. Серия без Х'}, {
                opt: 'DB_MAN_VALUES_35',
                text: 'База данных. MAN. MAN. Серия без 2'
            },
        ]
    },
    {
        groupId: "9",
        data: [
            {
                opt: 'DB_MAN_TOURNAMENT_VALUES_0',
                text: 'База данных. MAN_TOURNAMENT. WDL. Приемущество 1'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_1',
                text: 'База данных. MAN_TOURNAMENT. WDL. Приемущество Х'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_2',
                text: 'База данных. MAN_TOURNAMENT. WDL. Приемущество 2'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_3',
                text: 'База данных. MAN_TOURNAMENT. WDL. Приемущество 1Х'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_4',
                text: 'База данных. MAN_TOURNAMENT. WDL. Приемущество 12'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_5',
                text: 'База данных. MAN_TOURNAMENT. WDL. Приемущество Х2'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_6',
                text: 'База данных. MAN_TOURNAMENT. WDL. Серия 1'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_7',
                text: 'База данных. MAN_TOURNAMENT. WDL. Серия Х'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_8',
                text: 'База данных. MAN_TOURNAMENT. WDL. Серия 2'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_9',
                text: 'База данных. MAN_TOURNAMENT. WDL. Серия без 1'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_10',
                text: 'База данных. MAN_TOURNAMENT. WDL. Серия без Х'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_11',
                text: 'База данных. MAN_TOURNAMENT. WDL. Серия без 2'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_12',
                text: 'База данных. MAN_TOURNAMENT. FON. Приемущество 1'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_13',
                text: 'База данных. MAN_TOURNAMENT. FON. Приемущество Х'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_14',
                text: 'База данных. MAN_TOURNAMENT. FON. Приемущество 2'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_15',
                text: 'База данных. MAN_TOURNAMENT. FON. Приемущество 1Х'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_16',
                text: 'База данных. MAN_TOURNAMENT. FON. Приемущество 12'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_17',
                text: 'База данных. MAN_TOURNAMENT. FON. Приемущество Х2'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_18',
                text: 'База данных. MAN_TOURNAMENT. FON. Серия 1'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_19',
                text: 'База данных. MAN_TOURNAMENT. FON. Серия Х'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_20',
                text: 'База данных. MAN_TOURNAMENT. FON. Серия 2'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_21',
                text: 'База данных. MAN_TOURNAMENT. FON. Серия без 1'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_22',
                text: 'База данных. MAN_TOURNAMENT. FON. Серия без Х'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_23',
                text: 'База данных. MAN_TOURNAMENT. FON. Серия без 2'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_24',
                text: 'База данных. MAN_TOURNAMENT. MAN. Приемущество 1'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_25',
                text: 'База данных. MAN_TOURNAMENT. MAN. Приемущество Х'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_26',
                text: 'База данных. MAN_TOURNAMENT. MAN. Приемущество 2'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_27',
                text: 'База данных. MAN_TOURNAMENT. MAN. Приемущество 1Х'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_28',
                text: 'База данных. MAN_TOURNAMENT. MAN. Приемущество 12'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_29',
                text: 'База данных. MAN_TOURNAMENT. MAN. Приемущество Х2'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_30',
                text: 'База данных. MAN_TOURNAMENT. MAN. Серия 1'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_31',
                text: 'База данных. MAN_TOURNAMENT. MAN. Серия Х'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_32',
                text: 'База данных. MAN_TOURNAMENT. MAN. Серия 2'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_33',
                text: 'База данных. MAN_TOURNAMENT. MAN. Серия без 1'
            }, {
                opt: 'DB_MAN_TOURNAMENT_VALUES_34',
                text: 'База данных. MAN_TOURNAMENT. MAN. Серия без Х'
            }, {opt: 'DB_MAN_TOURNAMENT_VALUES_35', text: 'База данных. MAN_TOURNAMENT. MAN. Серия без 2'},
        ]
    },
    {
        groupId: "10",
        data: [
            {opt: 'DB_QUEERNESS_0', text: 'База данных. QUEERNESS. WDL. Приемущество 1'}, {
                opt: 'DB_QUEERNESS_1',
                text: 'База данных. QUEERNESS. WDL. Приемущество Х'
            }, {opt: 'DB_QUEERNESS_2', text: 'База данных. QUEERNESS. WDL. Приемущество 2'}, {
                opt: 'DB_QUEERNESS_3',
                text: 'База данных. QUEERNESS. WDL. Приемущество 1Х'
            }, {opt: 'DB_QUEERNESS_4', text: 'База данных. QUEERNESS. WDL. Приемущество 12'}, {
                opt: 'DB_QUEERNESS_5',
                text: 'База данных. QUEERNESS. WDL. Приемущество Х2'
            }, {opt: 'DB_QUEERNESS_6', text: 'База данных. QUEERNESS. WDL. Серия 1'}, {
                opt: 'DB_QUEERNESS_7',
                text: 'База данных. QUEERNESS. WDL. Серия Х'
            }, {opt: 'DB_QUEERNESS_8', text: 'База данных. QUEERNESS. WDL. Серия 2'}, {
                opt: 'DB_QUEERNESS_9',
                text: 'База данных. QUEERNESS. WDL. Серия без 1'
            }, {opt: 'DB_QUEERNESS_10', text: 'База данных. QUEERNESS. WDL. Серия без Х'}, {
                opt: 'DB_QUEERNESS_11',
                text: 'База данных. QUEERNESS. WDL. Серия без 2'
            }, {opt: 'DB_QUEERNESS_12', text: 'База данных. QUEERNESS. FON. Приемущество 1'}, {
                opt: 'DB_QUEERNESS_13',
                text: 'База данных. QUEERNESS. FON. Приемущество Х'
            }, {opt: 'DB_QUEERNESS_14', text: 'База данных. QUEERNESS. FON. Приемущество 2'}, {
                opt: 'DB_QUEERNESS_15',
                text: 'База данных. QUEERNESS. FON. Приемущество 1Х'
            }, {opt: 'DB_QUEERNESS_16', text: 'База данных. QUEERNESS. FON. Приемущество 12'}, {
                opt: 'DB_QUEERNESS_17',
                text: 'База данных. QUEERNESS. FON. Приемущество Х2'
            }, {opt: 'DB_QUEERNESS_18', text: 'База данных. QUEERNESS. FON. Серия 1'}, {
                opt: 'DB_QUEERNESS_19',
                text: 'База данных. QUEERNESS. FON. Серия Х'
            }, {opt: 'DB_QUEERNESS_20', text: 'База данных. QUEERNESS. FON. Серия 2'}, {
                opt: 'DB_QUEERNESS_21',
                text: 'База данных. QUEERNESS. FON. Серия без 1'
            }, {opt: 'DB_QUEERNESS_22', text: 'База данных. QUEERNESS. FON. Серия без Х'}, {
                opt: 'DB_QUEERNESS_23',
                text: 'База данных. QUEERNESS. FON. Серия без 2'
            }, {opt: 'DB_QUEERNESS_24', text: 'База данных. QUEERNESS. MAN. Приемущество 1'}, {
                opt: 'DB_QUEERNESS_25',
                text: 'База данных. QUEERNESS. MAN. Приемущество Х'
            }, {opt: 'DB_QUEERNESS_26', text: 'База данных. QUEERNESS. MAN. Приемущество 2'}, {
                opt: 'DB_QUEERNESS_27',
                text: 'База данных. QUEERNESS. MAN. Приемущество 1Х'
            }, {opt: 'DB_QUEERNESS_28', text: 'База данных. QUEERNESS. MAN. Приемущество 12'}, {
                opt: 'DB_QUEERNESS_29',
                text: 'База данных. QUEERNESS. MAN. Приемущество Х2'
            }, {opt: 'DB_QUEERNESS_30', text: 'База данных. QUEERNESS. MAN. Серия 1'}, {
                opt: 'DB_QUEERNESS_31',
                text: 'База данных. QUEERNESS. MAN. Серия Х'
            }, {opt: 'DB_QUEERNESS_32', text: 'База данных. QUEERNESS. MAN. Серия 2'}, {
                opt: 'DB_QUEERNESS_33',
                text: 'База данных. QUEERNESS. MAN. Серия без 1'
            }, {opt: 'DB_QUEERNESS_34', text: 'База данных. QUEERNESS. MAN. Серия без Х'}, {
                opt: 'DB_QUEERNESS_35',
                text: 'База данных. QUEERNESS. MAN. Серия без 2'
            },
        ]
    },
    {
        groupId: "11",
        data: [
            {opt: 'TOURNAMENT_HOME_0', text: 'Турнир. Хозяева. Победы - 0'}, {
                opt: 'TOURNAMENT_HOME_1',
                text: 'Турнир. Хозяева. Победы - 1'
            }, {opt: 'TOURNAMENT_HOME_2', text: 'Турнир. Хозяева. Победы - 2'}, {
                opt: 'TOURNAMENT_HOME_3',
                text: 'Турнир. Хозяева. Победы - 3'
            }, {opt: 'TOURNAMENT_HOME_4', text: 'Турнир. Хозяева. Победы - 4'}, {
                opt: 'TOURNAMENT_HOME_5',
                text: 'Турнир. Хозяева. Поражения - 0'
            }, {opt: 'TOURNAMENT_HOME_6', text: 'Турнир. Хозяева. Поражения - 1'}, {
                opt: 'TOURNAMENT_HOME_7',
                text: 'Турнир. Хозяева. Поражения - 2'
            }, {opt: 'TOURNAMENT_HOME_8', text: 'Турнир. Хозяева. Поражения - 3'}, {
                opt: 'TOURNAMENT_HOME_9',
                text: 'Турнир. Хозяева. Поражения - 4'
            }, {opt: 'TOURNAMENT_HOME_10', text: 'Турнир. Хозяева. Ничьи - 0'}, {
                opt: 'TOURNAMENT_HOME_11',
                text: 'Турнир. Хозяева. Ничьи - 1'
            }, {opt: 'TOURNAMENT_HOME_12', text: 'Турнир. Хозяева. Ничьи - 2'}, {
                opt: 'TOURNAMENT_HOME_13',
                text: 'Турнир. Хозяева. Ничьи - 3'
            }, {opt: 'TOURNAMENT_HOME_14', text: 'Турнир. Хозяева. Ничьи - 4'}, {
                opt: 'TOURNAMENT_HOME_15',
                text: 'Турнир. Хозяева. Победы подряд - 2'
            }, {opt: 'TOURNAMENT_HOME_16', text: 'Турнир. Хозяева. Победы подряд - 3'}, {
                opt: 'TOURNAMENT_HOME_17',
                text: 'Турнир. Хозяева. Победы подряд - 4'
            }, {opt: 'TOURNAMENT_HOME_18', text: 'Турнир. Хозяева. Победы подряд - 5'}, {
                opt: 'TOURNAMENT_HOME_19',
                text: 'Турнир. Хозяева. Поражения подряд - 2'
            }, {opt: 'TOURNAMENT_HOME_20', text: 'Турнир. Хозяева. Поражения подряд - 3'}, {
                opt: 'TOURNAMENT_HOME_21',
                text: 'Турнир. Хозяева. Поражения подряд - 4'
            }, {opt: 'TOURNAMENT_HOME_22', text: 'Турнир. Хозяева. Поражения подряд - 5'}, {
                opt: 'TOURNAMENT_HOME_23',
                text: 'Турнир. Хозяева. Ничьи подряд - 2'
            }, {opt: 'TOURNAMENT_HOME_24', text: 'Турнир. Хозяева. Ничьи подряд - 3'}, {
                opt: 'TOURNAMENT_HOME_25',
                text: 'Турнир. Хозяева. Ничьи подряд - 4'
            }, {opt: 'TOURNAMENT_HOME_26', text: 'Турнир. Хозяева. Ничьи подряд - 5'},
        ]
    },
    {
        groupId: "12",
        data: [
            {opt: 'TOURNAMENT_AWAY_0', text: 'Турнир. Гости. Победы - 0'}, {
                opt: 'TOURNAMENT_AWAY_1',
                text: 'Турнир. Гости. Победы - 1'
            }, {opt: 'TOURNAMENT_AWAY_2', text: 'Турнир. Гости. Победы - 2'}, {
                opt: 'TOURNAMENT_AWAY_3',
                text: 'Турнир. Гости. Победы - 3'
            }, {opt: 'TOURNAMENT_AWAY_4', text: 'Турнир. Гости. Победы - 4'}, {
                opt: 'TOURNAMENT_AWAY_5',
                text: 'Турнир. Гости. Поражения - 0'
            }, {opt: 'TOURNAMENT_AWAY_6', text: 'Турнир. Гости. Поражения - 1'}, {
                opt: 'TOURNAMENT_AWAY_7',
                text: 'Турнир. Гости. Поражения - 2'
            }, {opt: 'TOURNAMENT_AWAY_8', text: 'Турнир. Гости. Поражения - 3'}, {
                opt: 'TOURNAMENT_AWAY_9',
                text: 'Турнир. Гости. Поражения - 4'
            }, {opt: 'TOURNAMENT_AWAY_10', text: 'Турнир. Гости. Ничьи - 0'}, {
                opt: 'TOURNAMENT_AWAY_11',
                text: 'Турнир. Гости. Ничьи - 1'
            }, {opt: 'TOURNAMENT_AWAY_12', text: 'Турнир. Гости. Ничьи - 2'}, {
                opt: 'TOURNAMENT_AWAY_13',
                text: 'Турнир. Гости. Ничьи - 3'
            }, {opt: 'TOURNAMENT_AWAY_14', text: 'Турнир. Гости. Ничьи - 4'}, {
                opt: 'TOURNAMENT_AWAY_15',
                text: 'Турнир. Гости. Победы подряд - 2'
            }, {opt: 'TOURNAMENT_AWAY_16', text: 'Турнир. Гости. Победы подряд - 3'}, {
                opt: 'TOURNAMENT_AWAY_17',
                text: 'Турнир. Гости. Победы подряд - 4'
            }, {opt: 'TOURNAMENT_AWAY_18', text: 'Турнир. Гости. Победы подряд - 5'}, {
                opt: 'TOURNAMENT_AWAY_19',
                text: 'Турнир. Гости. Поражения подряд - 2'
            }, {opt: 'TOURNAMENT_AWAY_20', text: 'Турнир. Гости. Поражения подряд - 3'}, {
                opt: 'TOURNAMENT_AWAY_21',
                text: 'Турнир. Гости. Поражения подряд - 4'
            }, {opt: 'TOURNAMENT_AWAY_22', text: 'Турнир. Гости. Поражения подряд - 5'}, {
                opt: 'TOURNAMENT_AWAY_23',
                text: 'Турнир. Гости. Ничьи подряд - 2'
            }, {opt: 'TOURNAMENT_AWAY_24', text: 'Турнир. Гости. Ничьи подряд - 3'}, {
                opt: 'TOURNAMENT_AWAY_25',
                text: 'Турнир. Гости. Ничьи подряд - 4'
            }, {opt: 'TOURNAMENT_AWAY_26', text: 'Турнир. Гости. Ничьи подряд - 5'},
        ]
    },
    {
        groupId: "13",
        data: [
            {opt: 'TOURNAMENT_HOME_ONLY_0', text: 'Турнир. Хозяева дома. Победы - 0'}, {
                opt: 'TOURNAMENT_HOME_ONLY_1',
                text: 'Турнир. Хозяева дома. Победы - 1'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_2',
                text: 'Турнир. Хозяева дома. Победы - 2'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_3',
                text: 'Турнир. Хозяева дома. Победы - 3'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_4',
                text: 'Турнир. Хозяева дома. Победы - 4'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_5',
                text: 'Турнир. Хозяева дома. Поражения - 0'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_6',
                text: 'Турнир. Хозяева дома. Поражения - 1'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_7',
                text: 'Турнир. Хозяева дома. Поражения - 2'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_8',
                text: 'Турнир. Хозяева дома. Поражения - 3'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_9',
                text: 'Турнир. Хозяева дома. Поражения - 4'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_10',
                text: 'Турнир. Хозяева дома. Ничьи - 0'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_11',
                text: 'Турнир. Хозяева дома. Ничьи - 1'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_12',
                text: 'Турнир. Хозяева дома. Ничьи - 2'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_13',
                text: 'Турнир. Хозяева дома. Ничьи - 3'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_14',
                text: 'Турнир. Хозяева дома. Ничьи - 4'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_15',
                text: 'Турнир. Хозяева дома. Победы подряд - 2'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_16',
                text: 'Турнир. Хозяева дома. Победы подряд - 3'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_17',
                text: 'Турнир. Хозяева дома. Победы подряд - 4'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_18',
                text: 'Турнир. Хозяева дома. Победы подряд - 5'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_19',
                text: 'Турнир. Хозяева дома. Поражения подряд - 2'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_20',
                text: 'Турнир. Хозяева дома. Поражения подряд - 3'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_21',
                text: 'Турнир. Хозяева дома. Поражения подряд - 4'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_22',
                text: 'Турнир. Хозяева дома. Поражения подряд - 5'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_23',
                text: 'Турнир. Хозяева дома. Ничьи подряд - 2'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_24',
                text: 'Турнир. Хозяева дома. Ничьи подряд - 3'
            }, {
                opt: 'TOURNAMENT_HOME_ONLY_25',
                text: 'Турнир. Хозяева дома. Ничьи подряд - 4'
            }, {opt: 'TOURNAMENT_HOME_ONLY_26', text: 'Турнир. Хозяева дома. Ничьи подряд - 5'},
        ]
    },
    {
        groupId: "14",
        data: [
            {opt: 'TOURNAMENT_AWAY_ONLY_0', text: 'Турнир. Гости в гостях. Победы - 0'}, {
                opt: 'TOURNAMENT_AWAY_ONLY_1',
                text: 'Турнир. Гости в гостях. Победы - 1'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_2',
                text: 'Турнир. Гости в гостях. Победы - 2'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_3',
                text: 'Турнир. Гости в гостях. Победы - 3'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_4',
                text: 'Турнир. Гости в гостях. Победы - 4'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_5',
                text: 'Турнир. Гости в гостях. Поражения - 0'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_6',
                text: 'Турнир. Гости в гостях. Поражения - 1'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_7',
                text: 'Турнир. Гости в гостях. Поражения - 2'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_8',
                text: 'Турнир. Гости в гостях. Поражения - 3'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_9',
                text: 'Турнир. Гости в гостях. Поражения - 4'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_10',
                text: 'Турнир. Гости в гостях. Ничьи - 0'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_11',
                text: 'Турнир. Гости в гостях. Ничьи - 1'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_12',
                text: 'Турнир. Гости в гостях. Ничьи - 2'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_13',
                text: 'Турнир. Гости в гостях. Ничьи - 3'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_14',
                text: 'Турнир. Гости в гостях. Ничьи - 4'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_15',
                text: 'Турнир. Гости в гостях. Победы подряд - 2'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_16',
                text: 'Турнир. Гости в гостях. Победы подряд - 3'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_17',
                text: 'Турнир. Гости в гостях. Победы подряд - 4'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_18',
                text: 'Турнир. Гости в гостях. Победы подряд - 5'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_19',
                text: 'Турнир. Гости в гостях. Поражения подряд - 2'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_20',
                text: 'Турнир. Гости в гостях. Поражения подряд - 3'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_21',
                text: 'Турнир. Гости в гостях. Поражения подряд - 4'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_22',
                text: 'Турнир. Гости в гостях. Поражения подряд - 5'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_23',
                text: 'Турнир. Гости в гостях. Ничьи подряд - 2'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_24',
                text: 'Турнир. Гости в гостях. Ничьи подряд - 3'
            }, {
                opt: 'TOURNAMENT_AWAY_ONLY_25',
                text: 'Турнир. Гости в гостях. Ничьи подряд - 4'
            }, {opt: 'TOURNAMENT_AWAY_ONLY_26', text: 'Турнир. Гости в гостях. Ничьи подряд - 5'},
        ]
    },
    {
        groupId: "15",
        data: [
            {opt: 'TOURNAMENT_H2H_0', text: 'Турнир. Личные встречи. Приемущество 1'}, {
                opt: 'TOURNAMENT_H2H_1',
                text: 'Турнир. Личные встречи. Приемущество Х'
            }, {opt: 'TOURNAMENT_H2H_2', text: 'Турнир. Личные встречи. Приемущество 2'}, {
                opt: 'TOURNAMENT_H2H_3',
                text: 'Турнир. Личные встречи. Приемущество 1Х'
            }, {opt: 'TOURNAMENT_H2H_4', text: 'Турнир. Личные встречи. Приемущество 12'}, {
                opt: 'TOURNAMENT_H2H_5',
                text: 'Турнир. Личные встречи. Приемущество Х2'
            }, {opt: 'TOURNAMENT_H2H_6', text: 'Турнир. Личные встречи. Серия 1'}, {
                opt: 'TOURNAMENT_H2H_7',
                text: 'Турнир. Личные встречи. Серия Х'
            }, {opt: 'TOURNAMENT_H2H_8', text: 'Турнир. Личные встречи. Серия 2'}, {
                opt: 'TOURNAMENT_H2H_9',
                text: 'Турнир. Личные встречи. Серия без 1'
            }, {opt: 'TOURNAMENT_H2H_10', text: 'Турнир. Личные встречи. Серия без Х'}, {
                opt: 'TOURNAMENT_H2H_11',
                text: 'Турнир. Личные встречи. Серия без 2'
            },
        ]
    },
    {
        groupId: "16",
        data: [
            {opt: 'FEATURE_0', text: 'Наблюдения. Явный фаворит 1'}, {
                opt: 'FEATURE_1',
                text: 'Наблюдения. Явный фаворит X'
            }, {opt: 'FEATURE_2', text: 'Наблюдения. Явный фаворит 2'},
        ]
    }

];
