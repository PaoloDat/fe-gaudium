import axios from 'axios';

import {host} from '../config/config';

export default class Criteria {
    constructor() {
        this.list = [];
    }

    static async sendPrediction(drawNumber, tournamentName, homeTeamName, awayTeamName, criteria) {
        try {
            await axios({
                method: 'post',
                url: `${host}/prediction`,
                data: {
                    drawNumber: drawNumber,
                    tournamentName: tournamentName,
                    homeTeamName: homeTeamName,
                    awayTeamName: awayTeamName,
                    criteria: criteria
                }
            });
        } catch (err) {
            console.log(err);
        }
    }


    static async updateInfo(id) {
        try {
            const res = await axios.post(`${host}/prediction/draw/${id}`);
            this.updatedNumber = res.data;
        } catch (err) {
            console.log(err);
        }
    }
}
