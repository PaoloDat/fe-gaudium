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

    async getHomeTeamStat(tournamentName, teamName) {
        try {
            const res = await axios(`${host}/game/hometeam/${teamName}?tournamentName=${tournamentName}`);
            this.homeTeamStat = res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async getAwayTeamStat(tournamentName, teamName) {
        try {
            const res = await axios(`${host}/game/awayteam/${teamName}?tournamentName=${tournamentName}`);
            this.awayTeamStat = res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async getHomeTeamBothStat(tournamentName, teamName) {
        try {
            const res = await axios(`${host}/game/team/${teamName}?tournamentName=${tournamentName}`);
            this.homeTeamBothStat = res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async getAwayTeamBothStat(tournamentName, teamName) {
        try {
            const res = await axios(`${host}/game/team/${teamName}?tournamentName=${tournamentName}`);
            this.awayTeamBothStat = res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async getH2HStat(tournamentName, homeTeamName, awayTeamName) {
        try {
            const res = await axios(`${host}/game/h2h/${homeTeamName}/${awayTeamName}?tournamentName=${tournamentName}`);
            this.h2hStat = res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async getFonStat(fonHome, fonDraw, fonAway) {
        try {
            const res = await axios(`${host}/game/fon?fonHome=${fonHome}&fonDraw=${fonDraw}&fonAway=${fonAway}`);
            this.fonStat = res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async getFonTournamentStat(tournamentName, fonHome, fonDraw, fonAway) {
        try {
            const res = await axios(`${host}/game/fon/tournament/${tournamentName}?fonHome=${fonHome}&fonDraw=${fonDraw}&fonAway=${fonAway}`);
            this.fonTournamentStat = res.data;
        } catch (err) {
            console.log(err);
        }
    }




    async getManStat(manHome, manDraw, manAway) {
        try {
            const res = await axios(`${host}/game/man?manHome=${manHome}&manDraw=${manDraw}&manAway=${manAway}`);
            this.manStat = res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async getManTournamentStat(tournamentName, manHome, manDraw, manAway) {
        try {
            const res = await axios(`${host}/game/man/tournament/${tournamentName}?manHome=${manHome}&manDraw=${manDraw}&manAway=${manAway}`);
            this.manTournamentStat = res.data;
        } catch (err) {
            console.log(err);
        }
    }


    async getPoolQueernessStat(tournamentName, fonHome, fonAway, manHome, manAway) {
        try {
            const res = await axios(`${host}/game/pool/tournament/${tournamentName}?fonHome=${fonHome}&fonAway=${fonAway}&manHome=${manHome}&manAway=${manAway}`);
            this.poolQueernessStat = res.data;
        } catch (err) {
            console.log(err);
        }
    }


}