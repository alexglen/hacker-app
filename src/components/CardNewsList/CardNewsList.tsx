import React from "react";
import {fetchNewsList} from "../../service";
import {CardNews} from "../CardNews/CardNews";
import {Loader} from "../Loader/Loader";
import {useQuery} from "react-query";
import {ErrorMessage} from "../ErrorMessage/ErrorMessage";
import {Button} from "antd";
import "./CardNewsList.scss";

export const CardNewsList = () => {
    const {isLoading, error, data, refetch, isFetching} = useQuery("news", fetchNewsList,
        {refetchInterval: 60000});

    if (error) {
        return <ErrorMessage/>
    }

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div className="card-news-list-container">
            <div className="card-news-list">
                <div className="update-news-list-button">
                    <Button type="primary" size="large" danger onClick={() => refetch()} disabled={isFetching}>Update
                        the news list</Button>
                </div>

                {data?.length && data.sort((a, b) => a.time - b.time)
                    .map(item => <CardNews key={item.id} {...item}/>)}
            </div>
        </div>
    )
}