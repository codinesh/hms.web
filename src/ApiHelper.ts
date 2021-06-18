import axios, { AxiosResponse } from 'axios';
import constants from './const';

const instance = axios.create({
	baseURL: constants.baseApiUrl,
	timeout: 15000,
});


async function getItem<T>(url: string, headers?:string) : Promise<T>
{
    let promise = new Promise<T>(async (resolve, reject) => {
        try {
            let response = await instance.get<T>(url, {})
            if(response.status == 200)
            {
                let item = await response.data
                if(item)
                    resolve(item)
                else 
                reject('data not available')
            }
        }
        catch(err){
            reject(err)
        }
    });

    return promise;
}

const ApiHelper = { getItem }
export default ApiHelper