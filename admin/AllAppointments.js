import React, {useState} from 'react'
import './style.css'
import styled from 'styled-components'

const Ittyni = () => {
    const [dateSearch, setdataSearch] = useState ({
        date: ''
    })

    const {
        date
    } = dateSearch

    
         const onSearch = e => {
            setdataSearch({
              ...dateSearch,
               [e.target.name]:e.target.value}
               )
          }

    const appointments = [
        {
            name: 'hicham',
            phone: '0676765544',
            date: '2018-09-23',
            time: '10:10',
            text: 'Rendez-vous en ligne'
        },
        {
            name: 'hicham',
            phone: '0676765544',
            date: '2019-12-23',
            time: '10:10',
            text: 'Rendez-vous en ligne'
        },
        {
            name: 'hicham',
            phone: '0676765544',
            date: '2020-11-23',
            time: '10:10',
            text: 'Rendez-vous en ligne'
        },        {
            name: 'hicham',
            phone: '0676765544',
            date: '2020-10-22',
            time: '10:10',
            text: 'Rendez-vous en ligne'
        }
        ,        {
            name: 'hicham',
            phone: '0676765544',
            date: '2016-09-23',
            time: '10:10',
            text: 'Rendez-vous en ligne'
        }
    ]

                  // Search Into Table Filter
                  let Test=[];
   
                  if (appointments === null) {
                      // <div><ImgSpi alt="دلائل" src={require('../../imgs/spinner.gif')} /></div>
                      console.log("Spinner")
                  }else{
                    Test = appointments.filter(
                  (appoin) => {
                    const query = date.toLowerCase();
                    return appoin.date.toLowerCase().indexOf(query)>=0
                  }
                    );
                  }
                  console.log(Test)
   
    const body = Test.map(appo => (
        <tbody>
        <tr>
            <td data-column="First Name">{appo.name}</td>
            <td data-column="Last Name">{appo.phone}</td>
            <td data-column="Job Title">{appo.date}</td>
            <td data-column="Twitter">{appo.time}</td>
            <td data-column="Twitter">{appo.text}</td>
        </tr>
       </tbody>
    ))

    

    return (
        <ContainerAppointment>
        <SearchInput placeholder="Recherche par date.." name="date" value={date} onChange={e=> onSearch(e)}/>
                        <table>
                            <thead>
                                <tr>
                                <th>Client</th>
                                <th>Telephone de client</th>
                                <th>Date de rendez-vous</th>
                                <th>Heure de rendez-vous</th>
                                <th>Text de rendez-vous</th>
                                </tr>
                            </thead>
                            {body}
                        </table>
        </ContainerAppointment>
    )
}

export default Ittyni

const ContainerAppointment = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
flex-direction: column;
margin: 20px 100px;
`

const SearchInput = styled.input`
height: 30px;
width: 25%;
height: 35px;
padding-left: 5px;
margin-left: 2px;
`