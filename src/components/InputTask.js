import { useState } from "react";
import { Select, Input,Grid,Header, Icon, Button } from "semantic-ui-react";
import { v4  as uuid} from "uuid";
const options = [
    {key:"deporte" , value: "Deporte", text:"Deporte"},
    {key:"casa" , value: "Casa" ,text: "Casa"},
    {key:"oficina" , value: "Oficina", text:"Oficina"},
    {key:"otra" , value: "Otra", text: "Otra"},
]
export const InputTask = ( props) => {
    
    const [task, setTask] = useState({
        id: '',
        name:'',
        category:''
    });
    const [error, setError] = useState(false);

    const {createTask} = props;

    const onChangeInput = (event) => {

        setTask({
            ...task,
            [event.target.name] : event.target.value
        })
    }

    const onChangeSelect = (event,data) => {

        setTask({
            ...task,
            [data.name] : data.value
        })
       
    }

    const onSubmitTask = (event)=>{
        event.preventDefault();
       
        if(task.name.trim() === "" || task.category.trim() === ""){
            setError(true);
            return;
        }

        setError(false);
        task.id = uuid();

        createTask(task);
        setTask({
            id: '',
            name:'',
            category:''
        })
        
    }

   
  return (
    <>
    <Grid centered columns={2}>
        <Input type="text" action>
        <Input
        size="small"
        icon="add"
        placeholder = "Escribe tu tarea..."
        iconPosition="left"
        name="name"
        value= {task.name}
        onChange={onChangeInput}
        />

        <Select
        compact
         options={options}
        className="select-form-task"
        name="category"
        placeholder="Categoria"
        value= {task.category}
        onChange={onChangeSelect}
        />
        <Button type="submit" color="violet" onClick={onSubmitTask}>
            Añadir Tarea
        </Button>
        </Input>
    </Grid>
    {
        error && (
            <Grid centered >
                <Header as = "h4" color="red" className="alert-error-form" >
                    <Icon name="close"/>
                    <Header.Content>La tarea es obligatoria</Header.Content>
                    <Icon name="close"/>

                </Header>
            </Grid>
        )
    }
    </>
  )
}
