import {elements} from "./base";

export const getTournamentName = () => elements.inputTournamentName.value;
export const getHomeTeamName = () => elements.inputHomeName.value;
export const getAwayTeamName = () => elements.inputAwayName.value;
export const getFonHome = () => elements.inputFonHome.value;
export const getFonDraw = () => elements.inputFonDraw.value;
export const getFonAway = () => elements.inputFonAway.value;
export const getManHome = () => elements.inputManHome.value;
export const getManDraw = () => elements.inputManDraw.value;
export const getManAway = () => elements.inputManAway.value;


const renderGame = game => {
    const markup = `
                        <tr class="data-row">
                        <td>${game.drawNumber}</td>
                        <td>${game.tournamentName}</td>
                        <td>${game.homeTeamName}</td>
                        <td>${game.awayTeamName}</td>
                        <td id="homescore">${game.homeScore}</td>
                        <td id="awayscore">${game.awayScore}</td>
                        <td id="fonhome">${game.fonHome}</td>
                        <td id="fondraw">${game.fonDraw}</td>
                        <td id="fonaway">${game.fonAway}</td>
                        <td id="manhome">${game.manHome}</td>
                        <td id="mandraw">${game.manDraw}</td>
                        <td id="manaway">${game.manAway}</td>
                        <td id="wdl"></td>
                        <td id="fon"></td>
                        <td id="man"></td>
                    </tr>
    `;
    elements.tableOutputResult.insertAdjacentHTML('beforeend', markup);
};

export const renderResult = data => {
    data.forEach(renderGame);
};

export const renderHeader = caption => {
    const markup = `
                        <caption>${caption}</caption>
                    <colgroup>
                        <col span="2">
                        <col span="2">
                        <col span="2">
                        <col span="3">
                        <col span="3">
                    </colgroup>
                    <tr>
                        <th>Тираж</th>
                        <th>Турнир</th>
                        <th>Хозяева</th>
                        <th>Гости</th>
                        <th colspan="2">Счет</th>
                        <th colspan="3">FON</th>
                        <th colspan="3">MAN</th>
                        <th>W-D-L</th>
                        <th>Fon</th>
                        <th>Man</th>
                    </tr>
    `;

    elements.tableOutputResult.insertAdjacentHTML('afterbegin', markup);
};

export const clearResult = () => {
    elements.tableOutputResult.innerHTML = '';
};

export const renderWDL = () => {
    const myDiv = elements.tableOutputResult;
    const all = Array.from(myDiv.querySelectorAll('.data-row'));

    let home = 0;
    let draw = 0;
    let away = 0;

    let fonP = 0;
    let fonM = 0;
    let fonUn = 0;

    let manP = 0;
    let manM = 0;
    let manUn = 0;

    all.forEach(game => {
        const homeScore = parseInt(game.querySelector('#homescore').textContent);
        const awayScore = parseInt(game.querySelector('#awayscore').textContent);

        const fonHome = parseInt(game.querySelector('#fonhome').textContent);
        const fonDraw = parseInt(game.querySelector('#fondraw').textContent);
        const fonAway = parseInt(game.querySelector('#fonaway').textContent);

        const manHome = parseInt(game.querySelector('#manhome').textContent);
        const manDraw = parseInt(game.querySelector('#mandraw').textContent);
        const manAway = parseInt(game.querySelector('#manaway').textContent);

        if (homeScore > awayScore) {
            home++;

            if ((fonHome > fonAway) && (fonHome > fonDraw)) {
                fonP++;
            } else if ((fonHome < fonAway) && (fonHome < fonDraw)) {
                fonUn++;
            } else {
                fonM++;
            }

            if ((manHome > manAway) && (manHome > manDraw)) {
                manP++;
            } else if ((manHome < manAway) && (manHome < manDraw)) {
                manUn++;
            } else {
                manM++;
            }


        } else if (homeScore < awayScore) {
            away++;

            if ((fonAway > fonHome) && (fonAway > fonDraw)) {
                fonP++;
            } else if ((fonAway < fonHome) && (fonAway < fonDraw)) {
                fonUn++;
            } else {
                fonM++;
            }


            if ((manAway > manHome) && (manAway > manDraw)) {
                manP++;
            } else if ((manAway < manHome) && (manAway < manDraw)) {
                manUn++;
            } else {
                manM++;
            }


        } else {
            draw++;

            if ((fonDraw > fonHome) && (fonDraw > fonAway)) {
                fonP++;
            } else if ((fonDraw < fonHome) && (fonDraw < fonAway)) {
                fonUn++;
            } else {
                fonM++;
            }

            if ((manDraw > manHome) && (manDraw > manAway)) {
                manP++;
            } else if ((manDraw < manHome) && (manDraw < manAway)) {
                manUn++;
            } else {
                manM++;
            }
        }
        game.querySelector('#wdl').textContent = `${home} - ${draw} - ${away}`;
        game.querySelector('#fon').textContent = `${fonP} - ${fonM} - ${fonUn}`;
        game.querySelector('#man').textContent = `${manP} - ${manM} - ${manUn}`;
    });


};


