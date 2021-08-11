import React from 'react'
import { API_URL } from '../App/constants'
import { Button } from '@material-ui/core'
import transport from '../../services/transport'
import { useDispatch, useSelector } from 'react-redux'
import { NEWS_REQUEST_STATUS } from '../../reducers/news'
import { fetchNews, fetchNewsByAxios, setNewsList } from '../../actions/news'

export default function News(props) {


    const { status, list } = useSelector((state) => state.news)
    const dispatch = useDispatch()

    const loadData = () => dispatch(fetchNews())
    const loadDataByAxios = () => dispatch(fetchNewsByAxios())
    const clearData = () => dispatch(setNewsList([]))


    React.useEffect(() => dispatch(fetchNews())
        , [])


    if (status === NEWS_REQUEST_STATUS.LOADING) {
        return <p>Loading...</p>
    }

    return (
        <div style={{ paddingTop: '100px' }}>

            <p>News page</p>


            {
                status !== NEWS_REQUEST_STATUS.ERROR ? (
                    <ol className="bordered">
                        {list.map((newsItem) => newsItem.description && (
                            <li key={newsItem.id}>
                                <p>{newsItem.description}</p>
                            </li>
                        ))}
                    </ol>
                ) : (
                    <p style={{ color: 'red' }}>ERROR!!!</p>
                )
            }
            <Button onClick={loadData}>Load Data</Button>
            <Button onClick={loadDataByAxios}>Load Data By Axios</Button>
            <Button onClick={clearData}>Очистить данные</Button>
        </div >
    )
}
