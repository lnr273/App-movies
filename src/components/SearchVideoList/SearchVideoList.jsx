/* eslint-disable react/prop-types */
import styles from './SearchVideoList.module.css'
import VideoList from '../VideoList/VideoList.jsx'
import { useState } from 'react'

function filterVideos(videos, text) {
    return videos.filter((video) => video.category.includes(text) || video.title.includes(text))
}

function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState("")
    const foundVideos = filterVideos(videos, searchText)

    return (
        <section className={styles.container}>
            <input 
                type="text" 
                placeholder="Pesquisar..."
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
            <VideoList
                videos={foundVideos}
                emptyHeading={`Nenhum vídeo sobre "${searchText}"`}
            />
        </section>
    );
}

export default SearchVideoList;