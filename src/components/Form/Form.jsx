import { useState } from 'react';
import { categories } from '../Category/Category.jsx'
import styles from './Form.module.css';

function Form() {

    const [ url, setUrl ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ videos, setVideos ] = useState([])
    const [ msgAlert, setMsgAlert ] = useState('')

    function valideUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/
        if (!regex.test(url) || url.length < 43) {
            setMsgAlert("ERRO: URL inválida!")
            return false
        } else {
            return url.substring(32, 43)
        }
    }

    function saveData(e) {
        e.preventDefault()

        // validando category
        if (!category || category === "") {
            setMsgAlert("ERRO: Escolha uma categoria!")
            return
        }
        
        // validando url
        const urlVideo = valideUrl(url)
        if (!urlVideo) {
            setMsgAlert("ERRO: URL inválida!")
            return
        }

        const newVideo = {url, category}
        setVideos([...videos, newVideo])

        localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))

        setUrl('')
        setCategory('')
        setMsgAlert("Vídeo adicionado com sucesso!")
        
    }

    return (
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={saveData}>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type='text'
                        placeholder='Digite a URL do vídeo'
                        required='required'
                        value={url}
                        onChange={ e => setUrl(e.target.value) }
                        minLength="43"
                        maxLength="43"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        value={category}
                        onChange={ e => setCategory(e.target.value) }
                    >
                        <option value="">Selecione uma categoria</option>
                        { categories.map((item) => {
                            return <option value={item} key={item}>{ item }</option>
                        }) }
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div className={styles.alert}>
                    { msgAlert }
                </div>
            </form>
        </section>
    );
}

export default Form;
