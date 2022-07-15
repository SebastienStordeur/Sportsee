import axios from "axios";
import { mockAverageSessions, mockPerformancesData } from "./Mock";

export function getUserInfos(id, setUser) {
    try {
        axios(`http://localhost:3000/user/${id}`) //Headers 
        .then(response => {
            setUser(response.data.data)
        })
    } catch {
        return console.error("Impossible to retrieve user informations")
    }
}

export function getUserActivity(id, setActivity) {
    try {
        axios.get(`http://localhost:3000/user/${id}/activity`)
        .then(response => {
            //MISE EN FORME
            setActivity(response.data.data)
        })
    } catch {
        return console.error("Impossible to retrieve user informations")
    }
}


export function getUserAverageSessions(id, setAverageSessions) {
    try {
        //MISE EN FORME
        axios.get(`http://localhost:3000/user/${id}/average-sessions`)
        .then(response => {
            setAverageSessions(response.data.data)
            mockAverageSessions(response, setAverageSessions);
        })
    } catch {
        return console.error("Impossible to retrieve user informations")
    }
}

export function getUserPerformance(id, setPerformance, performance) {
    try {
        axios.get(`http://localhost:3000/user/${id}/performance`)
        .then(response => {
            //MISE EN FORME
            /* setPerformance(response.data.data) */
            mockPerformancesData(response, setPerformance, performance)
        })
    } catch {
        return console.error("Impossible to retrieve user informations")
    }
}


