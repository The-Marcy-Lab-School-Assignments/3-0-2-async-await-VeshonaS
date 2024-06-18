export const fetchHandler = async (url , options = {}) => {
     
     try{
      const res = await fetch(url, options)
      if (!res.ok) throw new Error('Fetch failed with status - '[STATUS], [STATUS_TEXT])
        const isJson = (response.headers.get('content-type') || '').includes('application/json');
      if(isJson) res.text('')
     } 
    
     catch(error) {
      
        console.warn(error)
        return [null, error ]
     }
    return [{}, null]
};
