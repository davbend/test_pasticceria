import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';


export default function Home() {

    const [dolci, setDolci] = useState([]);

    const { id } = useParams()

    useEffect(() => { loadDolci() }, []);

    const loadDolci = async () => {
        const result = await axios.get("http://localhost:8080/dolci");
        setDolci(result.data);
    };

    const deleteDolce = async (id) => {
        await axios.delete(`http://localhost:8080/dolce/${id}`)
        loadDolci()
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Dolce</th>
                            <th scope="col">Data inserimento</th>
                            <th scope="col">Prezzo</th>
                            <th scope="col">Azioni</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dolci.map((dolce) => (
                                <tr>
                                    <td>{dolce.id}</td>
                                    <td>{dolce.nome}</td>
                                    <td>{dolce.data}</td>
                                    <td>{dolce.prezzo == -1 ? 'Dolce scaduto' : dolce.prezzo.toFixed(2) + ' €'}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2' to={`/viewdolce/${dolce.id}`}>Dettagli</Link>
                                        <Link className='btn btn-outline-primary mx-2' to={`/editdolce/${dolce.id}`}>Modifica</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteDolce(dolce.id)}>Elimina</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
