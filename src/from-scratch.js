export const fetchHandler = async (url , options = {}) => {
     
     try{
      const res = await fetch(url, options)
      if (!res.ok) throw new Error('Fetch failed with status - '[STATUS], [STATUS_TEXT])
        const isJson = (response.headers.get('content-type') || '').includes('application/json');
      /** FEEDBACK: You are so close! After checking if the content type is json, you should return it in json formatting however if it is not, you should return it in text formatting! */
      if(isJson) res.text('')
     } 
    
     catch(error) {
      
        console.warn(error)
        return [null, error ]
     }
    return [{}, null]
};
