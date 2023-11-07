import { Grid, Header, Icon } from "semantic-ui-react";
import {Task} from "./Task";

export const TaskContent = ({tasks , deleteTask}) => {

    if(tasks.length ===0) return;


  return (
    <Grid className="tasks-content">
        <Header as="h2" icon textAlign="center">
        <Icon name="setting"/>
        Administar Tareas
        </Header>

        <Grid.Row>
            {
            tasks.map((task, index) => (
                    
                <Task key={task.id}  task ={task} deleteTask = {deleteTask}/>
                    ))
            }
        </Grid.Row>
    </Grid>
  )
}
