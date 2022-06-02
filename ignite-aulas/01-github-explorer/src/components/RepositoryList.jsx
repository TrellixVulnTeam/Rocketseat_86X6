import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

// Criação de um Objeto com as informações referentes a um repositório - passaremos tais informações através da propriedade do elemento filho


export function RepositoryList() {
    const[repositories,setRepositories] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));
    },[]);
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository =>{
                    return   <RepositoryItem key={repository.name} repository={repository}/>
                })}       
            </ul>
        </section>
    );
}