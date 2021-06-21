import constants from './const';


async function getItem<T>(url: string, headers?:string) : Promise<T>
{
    let promise = new Promise<T>(async (resolve, reject) => {
        try {
            let response = await fetch([constants.baseApiUrl, url].join('')) 
            if(response.ok)
            {
                let item : T = await response.json()
                if(item)
                    resolve(item)
                else 
                reject('data not available')
            }
            reject('data not available')
        }
        catch(err){
            reject(err)
        }
    });

    return promise;
}

async function postItem<T, R>(url: string, data:T, headers?:string) : Promise<R>
{
    let promise = new Promise<R>(async (resolve, reject) => {
        try {
            let req = {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },               
                body: JSON.stringify(data),
            }

            let response = await fetch([constants.baseApiUrl, url].join(''), {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },               
                body: JSON.stringify(data),
            })

            if(response.status == 200)
            {
                let item = await response.json()
                if(item)
                    resolve(item)
                else 
                    reject('data not available')
            }
            reject('data not available')
        }
        catch(err){
            reject(err)
        }
    });

    return promise;
}

const ApiHelper = { getItem, postItem }
export default ApiHelper