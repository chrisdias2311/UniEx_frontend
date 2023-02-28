import React from 'react'
import { useEffect } from 'react'

function UpdateUserProfile() {

    useEffect(() => {
        // const formdata = new FormData();
        // formdata.append('productid', params.id);

        // axios.post('http://localhost:5000/api/products/productdetails', formdata, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then(res => {
        //         console.log("This is product details details", res.data)
        //         setName(res.data.name)
        //         setDescription(res.data.description)
        //         setCategory(res.data.category)
        //         setPrice(res.data.price)
        //         setLink(res.data.link)
        //     })
        //     .catch(err =>
        //         console.log("This is the error", err),
        //     );


    }, []);


  return (
    <div>
      
    </div>
  )
}

export default UpdateUserProfile
