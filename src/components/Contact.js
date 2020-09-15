import React from 'react';
import axios from 'axios';




class Contact extends React.Component{

    state = {loc : [] };
    

    componentDidMount(){
        console.log('component did mount')
        this.fetchApi();
    }

    fetchApi = () => {
        axios.get('https://api.rootnet.in/covid19-in/contacts')
        .then((response)=>{
            const loc = response.data.data.contacts.regional;

            console.log( loc );
            this.setState({loc});
        })
        .catch((error)=>{
            console.log(error);
        })    

    }


    render(){
        const {loc} = this.state;
       
       
        return (

            <div>
                <table >
                    <tr>
                        <th>
                            Location
                        </th>
                        <th>
                            Number
                        </th>
                    </tr>
                    
                   { 
                  
                        loc.map(
                           ( 
                                {loc, number},index
                            )=> 
                            <tr key={index}>
                                <td>
                                    {loc}
                                </td>
                                <td>
                                    {number}
                                </td>
                            </tr>                        

                        )

                        

                    }
                </table>
            </div>
        )


    }

    
}
export default Contact;
