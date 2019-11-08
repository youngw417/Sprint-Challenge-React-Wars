
import React from 'react';
import {
    Card, CardBody, 
    CardTitle, CardSubtitle
  } from 'reactstrap';

import styled from "styled-components";


const MyDiv = styled.div`

width: 40%;
margin: 10px;


`;

const MyBody = styled(CardBody)`

background-color: gray;
color: white;
`;

const CharCard = (props) => {

return (

    <MyDiv className = 'charContainer'>
   
     <Card>
        <MyBody>
          <CardTitle>Name: {props.people.name}</CardTitle>
          <CardSubtitle>Height: {props.people.height}</CardSubtitle>
          <CardSubtitle>Mass: {props.people.mass}</CardSubtitle>
          <CardSubtitle>Hair Color: {props.people.hair_color}</CardSubtitle>
          <CardSubtitle>Skin Color: {props.people.skin_color}</CardSubtitle>
        </MyBody>
        
        
      </Card>


    </MyDiv>





)



}

export default CharCard;