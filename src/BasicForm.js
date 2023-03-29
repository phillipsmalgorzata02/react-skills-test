import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Card, Grid } from '@mui/material';


export default function BasicForm() {
  const [todos, setTodos] = useState([])
  const [isError, setIsError] = useState(false)

  const removeTodo = (m) => {
    //filter out our key
    let remaining = todos.filter((f) => f !== m)
    //update the todos with all but the remove key
    setTodos(remaining)
  }

  return (
    <div style={{ marginTop: '40px' }}>
      <Grid>
        {isError && <h1 style={{ color: 'red' }}>there was an error</h1>}
        <Formik
          initialValues={{
            todo: ''
          }}
          onSubmit={(values, { resetForm }) => {
            //look to see if we already have this todo
            let find = todos.filter((f) => f === values.todo)
            //if we don't and todo is not blank then add to todos
            if (find.length === 0 && values.todo.length !== 0) {
              let newT = [values.todo, ...todos]
              setTodos(newT)
            } else {
              //otherwise warn the user
              setIsError(true)
              setTimeout(() => {
                setIsError(false)
              }, 1000)
            }
            //clear the form 
            resetForm()

          }}
        >
          <Card>
            <Form>
              <Field type="text" id="todo" name="todo" placeholder="TextHere" />
              <button type="submit">Submit</button>
            </Form>
          </Card>
        </Formik>
      </Grid>
      <Grid>
        {todos.map((m) => <Card sx={{
          display: 'flex',
          flexDirection: 'row nowrap',
          justifyContent: 'space-between'
        }}
          key={m}><h1 key={m}>{m}</h1><Button onClick={() => removeTodo(m)}>delete</Button></Card>)}
      </Grid>

    </div>
  )
}
