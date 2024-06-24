export const fetchHandler = async (url , options = {}) => {
     
     try{
      const res = await fetch(url, options)
      if (!res.ok) throw new Error('Fetch failed with status - '[STATUS], [STATUS_TEXT])

      const contentType = res.headers.get('content-type')
      if (contentType !== null && contentType.includes('application/json')){
      const data = await res.json()
      return [data, null]
      }
      const textData = await res.text()
      return [textData, null]
     } 
    
     catch(error) {
      
        console.warn(error)
        return [null, error ]
     }
    
};
