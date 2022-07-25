import axios from "axios";
import { mockAverageSessions, mockPerformancesData, mockUserActivity } from "./Mock";

const headers =  {
    "Content-Type": "application/json"
}

export function getUserInfos(id, setUser) {
    try {
        axios(`http://localhost:3000/user/${id}`, {
            headers: { headers }
        })
        .then(response => {
            console.log("user", response.data.data)
            setUser(response.data.data)
        })
    } catch {
        return console.error("Impossible to retrieve user informations")
    }
}

export function getUserActivity(id, setActivity) {
    try {
        axios.get(`http://localhost:3000/user/${id}/activity`, {
            headers: { headers }
        })
        .then(response => {
            //MISE EN FORME
            console.log("activity", response.data.data)
            /* setActivity(response.data.data) */
            mockUserActivity(response, setActivity)
        })
    } catch {
        return console.error("Impossible to retrieve user informations")
    }
}


export function getUserAverageSessions(id, setAverageSessions) {
    try {
        axios.get(`http://localhost:3000/user/${id}/average-sessions`, {
            headers: { headers }
        })
        .then(response => {
            mockAverageSessions(response, setAverageSessions);
        })
    } catch {
        return console.error("Impossible to retrieve user informations")
    }
}

export function getUserPerformance(id, setPerformance) {
    try {
        axios.get(`http://localhost:3000/user/${id}/performance`, {
            headers: { headers }
        })
        .then(response => {
            mockPerformancesData(response, setPerformance)
        })
    } catch {
        return console.error("Impossible to retrieve user informations")
    }
}