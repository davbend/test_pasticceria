import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditDolce() {

    let navigate = useNavigate();

    const { id } = useParams()

    const [dolce, setDolce] = useState({
        nome: '',
        data: '',
        prezzo: 0.00,
        ingredienti: ''

    })

    const { nome, data, prezzo, ingredienti } = dolce


    const onInputChange = (e) => {
        setDolce({ ...dolce, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadDolce()
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        var error = false;
        var errorMessage = 'Compilare i seguenti campi:\n';
        if (dolce.nome == '') {
            errorMessage += '- Nome\n';
            error = true;
        }
        if (dolce.data == '') {
            errorMessage += '- Data inserimento\n';
            error = true;
        }
        if (dolce.prezzo == '') {
            errorMessage += '- Prezzo\n';
            error = true;
        }
        if (dolce.ingredienti == '') {
            errorMessage += '- Ingredienti';
            error = true;
        }
        if (error) {
            alert(errorMessage);
        } else {
            await axios.put(`http://localhost:8080/dolce/${id}`, dolce);
            navigate('/');
        }
    };

    const loadDolce = async () => {
        const result = await axios.get(`http://localhost:8080/dolce/${id}`)
        setDolce(result.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'> Aggiorna dolce</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='nome' className='form-label'>
                                Dolce
                            </label>
                            <input type={'text'} className='form-control' placeholder='Inserire nome' name='nome' value={nome} onChange={(e) => onInputChange(e)} />
                            <label htmlFor='data' className='form-label'>
                                Data inserimento
                            </label>
                            <input type={'date'} className='form-control' placeholder='Inserire data' name='data' value={data} onChange={(e) => onInputChange(e)} />
                            <label htmlFor='prezzo' className='form-label'>
                                Prezzo
                            </label>
                            <input type={'number'} step='0.01' min='0.01' className='form-control' placeholder='Inserire prezzo' name='prezzo' value={prezzo.toFixed(2)} onChange={(e) => onInputChange(e)} />
                            <label htmlFor='ingredienti' className='form-label'>
                                Ingredienti
                            </label>
                            <input type={'text'} className='form-control' placeholder='Inserire ingredienti (es. farina (100g), uova (2), ...)' name='ingredienti' value={ingredienti} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Aggiorna</button>
                        <Link className='btn btn-outline-danger mx-2' to='/'>Annulla</Link>
                    </form>
                </div>
            </div>
        </div>

    )
}
