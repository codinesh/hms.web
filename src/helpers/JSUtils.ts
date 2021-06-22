export function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj
}

const getIsoDateTimeString = (date: Date | string) =>  {
  let dateval:Date;
  if(typeof date == 'string'){
    dateval = new Date(date)
  }
  else dateval = date

  let regeex = /[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}T([0-9]{1,2}:*){2}/g;
  let str= dateval.toISOString()
  let match = str.match(regeex)
  if(match)
  return match[0].substring(0, 16)
  else return ''
}

 const getIsoDateString = (date: Date | string) =>
{
  let dateval:Date;
  if(typeof date == 'string'){
    dateval = new Date(date)
  }
  else dateval = date

  return dateval.toISOString()
}

 const geLocalDateString = (date: Date | string) =>
{
  let dateval:Date;
  if(typeof date == 'string'){
    dateval = new Date(date)
  }
  else dateval = date

  return dateval.toLocaleDateString()
}

const geLocalDateTimeString = (date: Date | string) =>
{
  let dateval:Date;
  if(typeof date == 'string'){
    dateval = new Date(date)
  }
  else dateval = date

  return dateval.toLocaleString()
}


export const dateUtils = {getIsoDateString, geLocalDateString, getIsoDateTimeString, geLocalDateTimeString}