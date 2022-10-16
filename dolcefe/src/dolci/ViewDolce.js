import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewDolce() {

    const [dolce, setDolce] = useState({
        nome: '',
        data: '',
        prezzo: 0.00,
        ingredienti: ''

    })

    const { id } = useParams();

    useEffect(() => {
        loadDolce();
    }, []);

    const loadDolce = async () => {
        const result = await axios.get(`http://localhost:8080/dolce/${id}`);
        setDolce(result.data);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Dettaglio dolce</h2>
                    <div className='card'>
                        <div className='card-header'>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Nome: </b>
                                    {dolce.nome}
                                </li>
                                <li className='list-group-item'>
                                    <b>Data inserimento: </b>
                                    {dolce.data}
                                </li>
                                <li className='list-group-item'>
                                    <b>Prezzo: </b>
                                    {dolce.prezzo==-1?'Dolce scaduto':dolce.prezzo.toFixed(2) + ' €'}
                                </li>
                                <li className='list-group-item'>
                                    <b>Ingredienti: </b>
                                    <ul className='list-group'>
                                        {
                                            (dolce.ingredienti.split(',')).map((ingrediente) => (
                                                <li className='list-group-item'>{ingrediente}</li>
                                            ))

                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={'/'}>
                        Torna a home
                    </Link>
                </div>
            </div>
        </div>
    );
}