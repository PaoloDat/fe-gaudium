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
    { opt: 'TOURNAMENT_R_SOME_GAMES_WITHOUT_DRAW', text: 'TOURNAMENT&nbsp;&nbsp;&nbsp;Серия игр без ничьих в турнире'},{ opt: 'TOURNAMENT_R_SOME_GAMES_WITHOUT_HOME_WIN', text: 'TOURNAMENT&nbsp;&nbsp;&nbsp;Серия игр без побед хозяев в турнире'},{ opt: 'TOURNAMENT_R_SOME_GAMES_WITHOUT_AWAY_WIN', text: 'TOURNAMENT&nbsp;&nbsp;&nbsp;Серия игр без побед гостей в турнире'},{ opt: 'TOURNAMENT_R_SOME_GAMES_WITH_HOME_WIN', text: 'TOURNAMENT&nbsp;&nbsp;&nbsp;Серия игр с преобладанием побед хозяев турнире'},{ opt: 'TOURNAMENT_HOME_R_SOME_GAMES_WITHOUT_HOME_WIN', text: 'TOURNAMENT_HOME&nbsp;&nbsp;&nbsp;Серия игр домашней команды в турнире без побед хозяев'},{ opt: 'TOURNAMENT_AWAY_R_SOME_GAMES_WITHOUT_HOME_WIN', text: 'TOURNAMENT_AWAY&nbsp;&nbsp;&nbsp;Серия игр гостевой команды в турнире без побед хозяев'},{ opt: 'TOURNAMENT_AWAY_R_SOME_GAMES_AWAY_WIN_IN_ROW', text: 'TOURNAMENT_AWAY&nbsp;&nbsp;&nbsp;Серия игр гостевой команды в турнире с серией побед гостей'},{ opt: 'TOURNAMENT_R_SOME_GAMES_WITHOUT_FON_POOL', text: 'TOURNAMENT&nbsp;&nbsp;&nbsp;Серия игр без FON пула'},{ opt: 'TOURNAMENT_R_SOME_GAMES_WITHOUT_FON_MIDDLE', text: 'TOURNAMENT&nbsp;&nbsp;&nbsp;Серия игр без FON мидпулла'},{ opt: 'TOURNAMENT_R_SOME_GAMES_WITHOUT_FON_UNPOOL', text: 'TOURNAMENT&nbsp;&nbsp;&nbsp;Серия игр без FON противопула'},{ opt: 'TOURNAMENT_R_SOME_GAMES_WITHOUT_MAN_POOL', text: 'TOURNAMENT&nbsp;&nbsp;&nbsp;Серия игр без MAN пула'},{ opt: 'TOURNAMENT_R_SOME_GAMES_WITHOUT_MAN_MIDDLE', text: 'TOURNAMENT&nbsp;&nbsp;&nbsp;Серия игр без MAN мидпулла'},{ opt: 'TOURNAMENT_R_SOME_GAMES_WITHOUT_MAN_UNPOOL', text: 'TOURNAMENT&nbsp;&nbsp;&nbsp;Серия игр без MAN противопула'},{ opt: 'TOURNAMENT_R_SOME_GAMES_WITH_MAN_POOL', text: 'TOURNAMENT&nbsp;&nbsp;&nbsp;Серия игр с преобладанием MAN пула'},{ opt: 'TOURNAMENT_HOME_R_SOME_GAMES_WITHOUT_FON_POOL', text: 'TOURNAMENT_HOME&nbsp;&nbsp;&nbsp;Серия игр домашней команды в турнире без FON пула'},{ opt: 'TOURNAMENT_HOME_R_SOME_GAMES_WITHOUT_MAN_POOL', text: 'TOURNAMENT_HOME&nbsp;&nbsp;&nbsp;Серия игр домашней команды в турнире без MAN пула'},{ opt: 'TOURNAMENT_AWAY_R_SOME_GAMES_WITHOUT_FON_POOL', text: 'TOURNAMENT_AWAY&nbsp;&nbsp;&nbsp;Серия игр гостевой команды в турнире с серией FON противопул подряд'},{ opt: 'TOURNAMENT_AWAY_R_SOME_GAMES_WITHOUT_MAN_UNPOOL', text: 'TOURNAMENT_AWAY&nbsp;&nbsp;&nbsp;Серия игр гостевой команды в турнире без MAN противопула'},{ opt: 'TOURNAMENT_AWAY_TEAM_AWAY_R_SOME_GAMES_WITHOUT_MAN_UNPOOL', text: 'TOURNAMENT_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Серия игр гостевой команды в гостях без MAN противопула'},{ opt: 'FON_WDL_R', text: 'FON_WDL&nbsp;&nbsp;&nbsp;Серия игр с преобладанием побед хозяев'},{ opt: 'FON_POOL_R', text: 'FON_POOL&nbsp;&nbsp;&nbsp;Серия игр с преобладанием FON пула'},{ opt: 'WDL_HOME_R_TEAM_0_WIN', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 0 побед в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_1_WIN', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 1 победа в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_2_WIN', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 2 победы в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_3_WIN', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 3 победы в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_4_WIN', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 4 победы в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_2_WIN_IN_ROW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 2 победы подряд'},{ opt: 'WDL_HOME_R_TEAM_3_WIN_IN_ROW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 3 победы подряд'},{ opt: 'WDL_HOME_R_TEAM_4_WIN_IN_ROW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 4 победы подряд'},{ opt: 'WDL_HOME_R_TEAM_5_WIN_IN_ROW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 5 победы подряд'},{ opt: 'WDL_HOME_TEAM_HOME_R_0_WIN', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 0 побед в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_1_WIN', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 1 победа в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_2_WIN', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 2 победы в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_3_WIN', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 3 победы в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_4_WIN', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 4 победы в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_2_WIN_IN_ROW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 2 победы подряд'},{ opt: 'WDL_HOME_TEAM_HOME_R_3_WIN_IN_ROW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 3 победы подряд'},{ opt: 'WDL_HOME_TEAM_HOME_R_4_WIN_IN_ROW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 4 победы подряд'},{ opt: 'WDL_HOME_TEAM_HOME_R_5_WIN_IN_ROW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 5 победы подряд'},{ opt: 'WDL_HOME_R_TEAM_0_DRAW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 0 ничьих в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_1_DRAW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 1 ничья в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_2_DRAW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 2 ничьи в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_3_DRAW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 3 ничьи в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_4_DRAW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 4 ничьи в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_2_DRAW_IN_ROW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 2 ничьи подряд'},{ opt: 'WDL_HOME_R_TEAM_3_DRAW_IN_ROW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 3 ничьи подряд'},{ opt: 'WDL_HOME_R_TEAM_4_DRAW_IN_ROW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 4 ничьи подряд'},{ opt: 'WDL_HOME_R_TEAM_5_DRAW_IN_ROW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 5 ничьи подряд'},{ opt: 'WDL_HOME_TEAM_HOME_R_0_DRAW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 0 ничьих в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_1_DRAW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 1 ничья в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_2_DRAW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 2 ничьи в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_3_DRAW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 3 ничьи в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_4_DRAW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 4 ничьи в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_2_DRAW_IN_ROW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 2 ничьи подряд'},{ opt: 'WDL_HOME_TEAM_HOME_R_3_DRAW_IN_ROW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 3 ничьи подряд'},{ opt: 'WDL_HOME_TEAM_HOME_R_4_DRAW_IN_ROW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 4 ничьи подряд'},{ opt: 'WDL_HOME_TEAM_HOME_R_5_DRAW_IN_ROW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 5 ничьи подряд'},{ opt: 'WDL_HOME_R_TEAM_0_LOSE', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 0 поражений в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_1_LOSE', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 1 поражение в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_2_LOSE', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 2 поражений в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_3_LOSE', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 3 поражений в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_4_LOSE', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 4 поражений в 5 матчах'},{ opt: 'WDL_HOME_R_TEAM_2_LOSE_IN_ROW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 2 поражений подряд'},{ opt: 'WDL_HOME_R_TEAM_3_LOSE_IN_ROW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 3 поражений подряд'},{ opt: 'WDL_HOME_R_TEAM_4_LOSE_IN_ROW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 4 поражений подряд'},{ opt: 'WDL_HOME_R_TEAM_5_LOSE_IN_ROW', text: 'WDL_HOME&nbsp;&nbsp;&nbsp;Хозяева - 5 поражений подряд'},{ opt: 'WDL_HOME_TEAM_HOME_R_0_LOSE', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 0 поражений в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_1_LOSE', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 1 поражение в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_2_LOSE', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 2 поражений в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_3_LOSE', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 3 поражений в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_4_LOSE', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 4 поражений в 5 матчах'},{ opt: 'WDL_HOME_TEAM_HOME_R_2_LOSE_IN_ROW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 2 поражений подряд'},{ opt: 'WDL_HOME_TEAM_HOME_R_3_LOSE_IN_ROW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 3 поражений подряд'},{ opt: 'WDL_HOME_TEAM_HOME_R_4_LOSE_IN_ROW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 4 поражений подряд'},{ opt: 'WDL_HOME_TEAM_HOME_R_5_LOSE_IN_ROW', text: 'WDL_HOME_TEAM_HOME&nbsp;&nbsp;&nbsp;Хозяева дома - 5 поражений подряд'},{ opt: 'WDL_AWAY_R_TEAM_0_WIN', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 0 побед в 5 матчах'},{ opt: 'WDL_AWAY_R_TEAM_1_WIN', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 1 победа в 5 матчах'},{ opt: 'WDL_AWAY_R_TEAM_2_WIN', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 2 победы в 5 матчах'},{ opt: 'WDL_AWAY_R_TEAM_3_WIN', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 3 победы в 5 матчах'},{ opt: 'WDL_AWAY_R_TEAM_4_WIN', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 4 победы в 5 матчах'},{ opt: 'WDL_AWAY_R_TEAM_2_WIN_IN_ROW', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 2 победы подряд'},{ opt: 'WDL_AWAY_R_TEAM_3_WIN_IN_ROW', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 3 победы подряд'},{ opt: 'WDL_AWAY_R_TEAM_4_WIN_IN_ROW', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 4 победы подряд'},{ opt: 'WDL_AWAY_R_TEAM_5_WIN_IN_ROW', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 5 победы подряд'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_0_WIN', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 0 побед в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_1_WIN', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 1 победа в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_2_WIN', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 2 победы в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_3_WIN', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 3 победы в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_4_WIN', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 4 победы в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_2_WIN_IN_ROW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 2 победы подряд'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_3_WIN_IN_ROW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 3 победы подряд'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_4_WIN_IN_ROW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 4 победы подряд'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_5_WIN_IN_ROW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 5 победы подряд'},{ opt: 'WDL_AWAY_TEAM_R_0_DRAW', text: 'WDL_AWAY_TEAM&nbsp;&nbsp;&nbsp;Гости - 0 ничьих в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_R_1_DRAW', text: 'WDL_AWAY_TEAM&nbsp;&nbsp;&nbsp;Гости - 1 ничья в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_R_2_DRAW', text: 'WDL_AWAY_TEAM&nbsp;&nbsp;&nbsp;Гости - 2 ничьи в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_R_3_DRAW', text: 'WDL_AWAY_TEAM&nbsp;&nbsp;&nbsp;Гости - 3 ничьи в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_R_4_DRAW', text: 'WDL_AWAY_TEAM&nbsp;&nbsp;&nbsp;Гости - 4 ничьи в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_R_2_DRAW_IN_ROW', text: 'WDL_AWAY_TEAM&nbsp;&nbsp;&nbsp;Гости - 2 ничьи подряд'},{ opt: 'WDL_AWAY_TEAM_R_3_DRAW_IN_ROW', text: 'WDL_AWAY_TEAM&nbsp;&nbsp;&nbsp;Гости - 3 ничьи подряд'},{ opt: 'WDL_AWAY_TEAM_R_4_DRAW_IN_ROW', text: 'WDL_AWAY_TEAM&nbsp;&nbsp;&nbsp;Гости - 4 ничьи подряд'},{ opt: 'WDL_AWAY_TEAM_R_5_DRAW_IN_ROW', text: 'WDL_AWAY_TEAM&nbsp;&nbsp;&nbsp;Гости - 5 ничьи подряд'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_0_DRAW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 0 ничьих в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_1_DRAW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 1 ничья в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_2_DRAW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 2 ничьи в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_3_DRAW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 3 ничьи в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_4_DRAW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 4 ничьи в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_2_DRAW_IN_ROW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 2 ничьи подряд'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_3_DRAW_IN_ROW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 3 ничьи подряд'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_4_DRAW_IN_ROW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 4 ничьи подряд'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_5_DRAW_IN_ROW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 5 ничьи подряд'},{ opt: 'WDL_AWAY_R_TEAM_0_LOSE', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 0 поражений в 5 матчах'},{ opt: 'WDL_AWAY_R_TEAM_1_LOSE', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 1 поражение в 5 матчах'},{ opt: 'WDL_AWAY_R_TEAM_2_LOSE', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 2 поражений в 5 матчах'},{ opt: 'WDL_AWAY_R_TEAM_3_LOSE', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 3 поражений в 5 матчах'},{ opt: 'WDL_AWAY_R_TEAM_4_LOSE', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 4 поражений в 5 матчах'},{ opt: 'WDL_AWAY_R_TEAM_2_LOSE_IN_ROW', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 2 поражений подряд'},{ opt: 'WDL_AWAY_R_TEAM_3_LOSE_IN_ROW', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 3 поражений подряд'},{ opt: 'WDL_AWAY_R_TEAM_4_LOSE_IN_ROW', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 4 поражений подряд'},{ opt: 'WDL_AWAY_R_TEAM_5_LOSE_IN_ROW', text: 'WDL_AWAY&nbsp;&nbsp;&nbsp;Гости - 5 поражений подряд'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_0_LOSE', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 0 поражений в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_1_LOSE', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 1 поражение в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_2_LOSE', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 2 поражений в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_3_LOSE', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 3 поражений в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_4_LOSE', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 4 поражений в 5 матчах'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_2_LOSE_IN_ROW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 2 поражений подряд'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_3_LOSE_IN_ROW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 3 поражений подряд'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_4_LOSE_IN_ROW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 4 поражений подряд'},{ opt: 'WDL_AWAY_TEAM_AWAY_R_5_LOSE_IN_ROW', text: 'WDL_AWAY_TEAM_AWAY&nbsp;&nbsp;&nbsp;Гости на выезде - 5 поражений подряд'},{ opt: 'H2H_R_1X_SUPERIORITY', text: 'H2H&nbsp;&nbsp;&nbsp;Явный перевес хозяев на результат 1Х'},{ opt: 'H2H_R_HOME_SUPERIORITY', text: 'H2H&nbsp;&nbsp;&nbsp;Явный перевес хозяев в личных встречах'},{ opt: 'H2H_R_HOME_2_WIN_IN_ROW', text: 'H2H&nbsp;&nbsp;&nbsp;Личные встречи - 2 победы хозяев подряд'},

];