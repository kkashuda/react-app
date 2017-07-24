import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

const DrinkForm = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field id='form-input-control-first-name' control={Input} label='Title' placeholder='Title' />
      <Form.Field id='form-input-control-last-name' control={Input} label='Source' placeholder='Source (eg. link or OC)' />
    </Form.Group>
    <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Description' placeholder='Why should someone make this drink?' />
    <Form.Field id='form-button-control-public' control={Button} content='Submit'/>
   </Form>
)

export default DrinkForm