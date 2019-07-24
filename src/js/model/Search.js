import axios from 'axios';

import {host} from '../config/config';

export default class Search {

    async getTournamentStat(name) {
        try {
            const res = await axios(`${host}/game/tournament/${name}`);
            this.tournamentStat = res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async getHomeStat(tournamentName, teamName) {
        try {
            const res = await axios(`${host}/game/hometeam/${teamName}?tournamentName=${tournamentName}`);
            this.homeStat = res.data;
        } catch (err) {
            console.log(err);
        }
    }
}