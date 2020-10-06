import React, {useState} from 'react'
import styled from 'styled-components'

const AppTest = () => {
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
            <Td data-column="Client">{appo.name}</Td>
            <Td data-column="Telephone ">{appo.phone}</Td>
            <Td data-column="Date">{appo.date}</Td>
            <Td data-column="Heure">{appo.time}</Td>
            <Td data-column="Text">{appo.text}</Td>
        </tr>
       </tbody>
    ))

    

    return (
        <ContainerAppointment>
        <SearchInput placeholder="Recherche par date.." name="date" value={date} onChange={e=> onSearch(e)}/>
                        <table>
                            <thead>
                                <tr>
                                <Th>Client</Th>
                                <Th>Telephone </Th>
                                <Th>Date</Th>
                                <Th>Heure</Th>
                                <Th>Text</Th>
                                </tr>
                            </thead>
                            {body}
                        </table>
        </ContainerAppointment>
    )
}

export default AppTest

const ContainerAppointment = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
flex-direction: column;
margin: 20px 100px;
@media(max-width: 880px) {
    margin: 20px 10px;
}

`

const SearchInput = styled.input`
width: 40%;
height: 35px;
padding-left: 5px;
margin-left: 2px;
border: 1px solid red;
border-radius: 5px;
margin-bottom: 5px;
`

const Th = styled.th`
background: #014f00;
color: #FFF; 
font-weight: bold; 
padding: 10px; 
border: 1px solid #ccc; 
text-align: center; 
font-size: 16px;
@media(max-width: 1000px) {
    font-size: 12px;
}

@media(max-width: 880px) {
    font-size: 10px;
}
`

const Td = styled.td`
padding: 10px; 
border: 1px solid #ccc; 
text-align: center; 
font-size: 16px;
@media(max-width: 1000px) {
    font-size: 12px;
}

@media(max-width: 880px) {
    font-size: 10px;
}
`