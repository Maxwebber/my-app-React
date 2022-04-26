import React from "react";
import {Table, Button, Form, Modal} from 'react-bootstrap'



class Alunos extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            id: "0",
            nome:"",
            email:"",
            users: [],
            modalAberta: false
    
        }
    }

    componentDidMount(){
        this.buscarAluno();
        
    }

    componentWillUnmount(){

    }

    buscarAluno = () => {
        fetch("https://6266d65b7863833642181a0f.mockapi.io/users")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({users: dados})
            })

    }

    deletarAluno = (id) => {
        fetch("https://6266d65b7863833642181a0f.mockapi.io/users/"+id, { method: 'DELETE' })
            .then(resposta => {
                if(resposta.ok){
                    this.buscarAluno();
            }
         })
    }
    carregarAluno = (id) => {
        fetch("https://6266d65b7863833642181a0f.mockapi.io/users/"+id, { method: 'GET' })
            .then(resposta => resposta.json())
            .then(users => {
                this.setState({
                    id: users.id,
                    nome: users.nome,
                    email: users.email
                })
                this.abrirModal();
        })
    }

    cadastraAluno = (aluno) => {
        fetch("https://6266d65b7863833642181a0f.mockapi.io/users", {
            method: 'POST' ,
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(aluno)
    })

    .then(resposta => {
        if(resposta.ok){
            this.buscarAluno();
        }else {
            alert('Deu erro bicho!');

        }
    
 })

}

    atualizarAluno = (users) => {
        fetch("https://6266d65b7863833642181a0f.mockapi.io/users/"+users.id, {
                method: 'PUT',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(users)
        })

            .then(resposta => {
                if(resposta.ok){
                    this.buscarAluno();
                }else {
                    alert('Não atualizou jovem!');

                        }

})

}

    renderTabela(){
        return  <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((aluno) =>
                            <tr>
                                <td>{aluno.nome}</td>
                                <td>{aluno.email}</td>
                                <td>
                                <Button variant="primary" onClick = {() => this.carregarAluno(aluno.id)}>Atualizar</Button>
                                <Button variant="danger" onClick = {() => this.deletarAluno(aluno.id)}>Excluir</Button></td>
                            </tr>
                         )

                    }
                    
                   
                </tbody>
            </Table>
       
    }

    atualizarNome = (e) =>{
        this.setState(
            {
                nome: e.target.value
            }
           
        )
    }
    atualizarEmail = (e) =>{
        this.setState(
            {
                email: e.target.value
            }
           
        )
    }

    submit = () => {
        if(this.state.id ==="0"){
            const aluno = {
                nome: this.state.nome,
                email: this.state.email

            }
                this.cadastraAluno(aluno);

        }else{
            const aluno = { 
                id:  this.state.id,           
                nome: this.state.nome,
                email: this.state.email
    
            }

                    this.atualizarAluno(aluno);
    }
        this.fecharModal();
        
    }

    reset = () => {
        this.setState(
            {
                id: "0",
                nome:"",
                email:""
            }
        )
        this.abrirModal();
    }
    fecharModal = () => {
        this.setState(
            {

                modalAberta: false
            }
            
        )
        
    }

    abrirModal = () => {
        this.setState(
            {

                modalAberta: true
            }
            
        )
        
    }

    render(){
        return(
            <div>
                <Modal show={this.state.modalAberta} onHide={this.fecharModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dados de Alunos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Parece dificil mas vai conseguir.


                    <Form>
                        <Form.Group className="mb-3">
                        <   Form.Label>ID</Form.Label>
                            <Form.Control type="text"  value={this.state.id} readOnly={true} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite o nome do aluno" value={this.state.nome} onChange={this.atualizarNome} />
                        </Form.Group>
                    <   Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control type="email" placeholder="Digite seu email" value={this.state.email} onChange={this.atualizarEmail}/>
                         <Form.Text className="text-muted">
                            Use seu melhor e-mail!
                        </Form.Text>
                    </Form.Group>
                </Form>






                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.fecharModal}>
                        Fechar
                        </Button>
                            <Button variant="primary" type="submit" onClick={this.submit}>
                        Adicionar 
                        </Button>
                    </Modal.Footer>
                </Modal>




                    <Button variant="secondary" type="submit" onClick={this.reset}>
                        Novo 
                    </Button>


                

                {this.renderTabela()}
            </div>
        )
    }
}



export default Alunos;