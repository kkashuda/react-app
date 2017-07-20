import React from 'react'
import PropTypes from 'prop-types'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

// :title, :description, :steps, :source
const Drink = ({title, description, steps, source}) => (
    <Container text>
        <Header as='h2' icon textAlign='center'>
            <Icon name='cocktail' circular />
            <Header.Content>
                List of Ingredients
            </Header.Content>
         </Header>
        <p></p>
    </Container>
)

export default Drink