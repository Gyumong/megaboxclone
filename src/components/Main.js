import React from 'react';
import styled from 'styled-components';

const ListBlock=styled.div`
`;
function Main({name}) {

    return (
        <ListBlock>
            <li>
            {name}
            </li>
        </ListBlock>
    )
}

export default Main
