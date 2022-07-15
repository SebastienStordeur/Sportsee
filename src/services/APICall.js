import axios from "axios";
import { mockPerformancesData } from "./Mock";

export function getUserInfos(id, setUser) {
    try {
        axios(`http://localhost:3000/user/${id}`) //Headers 
        .then(response => {
            return setUser(response.data.data)
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
            return setActivity(response.data.data)
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
            return setAverageSessions(response.data.data)
        })
    } catch {
        return console.error("Impossible to retrieve user informations")
    }
}

export function getUserPerformance(id, setPerformance, performance) {
    try {
        axios.get(`http://localhost:3000/user/18/performance`)
        .then(response => {
            //MISE EN FORME
            setPerformance(response.data.data)
            mockPerformancesData(setPerformance, performance)
        })
    } catch {
        return console.error("Impossible to retrieve user informations")
    }
}


