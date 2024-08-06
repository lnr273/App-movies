/* eslint-disable react/prop-types */
import styles from './SearchVideoList.module.css'
import VideoList from '../VideoList/VideoList.jsx'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader.jsx'

function filterVideos(videos, text) {
    return videos.filter((video) => video.category.includes(text) || video.title.includes(text))
}

function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState("")
    const foundVideos = filterVideos(videos, searchText)

    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 250)
    }, [])

    return (
        <section className={styles.container}>
            <input 
                type="text" 
                placeholder="Pesquisar..."
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
            {
                loading ? <Loader /> :
                <VideoList
                    videos={foundVideos}
                    emptyHeading={`Nenhum vídeo sobre "${searchText}"`}
                />
            }
        </section>
    );
}

export default SearchVideoList;