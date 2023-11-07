import { Button, Grid, Header, Icon, Label, Segment } from "semantic-ui-react"

 export const Task = ({task ,deleteTask}) => {

  return (
    <Grid.Column width={8} className="task-container">
      <Segment>
      <Label color="teal" ribbon="right"> {task.category}</Label>
        <Header as="h3" className="header-task">
            {task.name}
        </Header>
        <Header as="h5">
            {task.id}
        </Header>

        <Grid centered columns={2}>
        <Grid.Column>
            <Button color="red" onClick={() => deleteTask(task.id)} >
                <Icon name="remove circle"/> Eliminar
            </Button>
        </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  )
}
