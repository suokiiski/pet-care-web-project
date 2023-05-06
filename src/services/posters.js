import axios from "axios";
const baseUrl = 'http://localhost:3001/api/notes';

/**
 * Palauttaa serverilta kaikki ilmoitukset
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const getAll = () => {
    return axios.get(baseUrl)
}

/**
 * Lähettää vastaluotu ilmoitus serverille
 * @param newObject uusi ilmoitus
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

/**
 * Muokkaa olemassa olevan ilmoituksen sisältöä
 * @param id muutettavan ilmoituksen id
 * @param newObject uusi versio ilmoituksesta
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

/**
 * Poistaa ilmoitusta serverilta
 * @param id poistettavan ilmoituksen id
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}


export default {
    getAll,
    create,
    update,
    remove
}

