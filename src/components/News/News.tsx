import React from "react";
import {NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {fetchComments, fetchOneNews} from "../../service";
import {useQuery} from "react-query";
import {Loader} from "../Loader/Loader";
import {ErrorMessage} from "../ErrorMessage/ErrorMessage";
import {Button, Col, Row, Statistic, Collapse, Card} from "antd";
import {CommentOutlined} from "@ant-design/icons";
import {getDate} from "../../utils";
import "./News.scss";

export const News = () => {
    const {state: {id}} = useLocation();
    const navigate: NavigateFunction = useNavigate();

    const {
        isLoading,
        error,
        data: news,
    } = useQuery("one-news", () => fetchOneNews(id));

    const {data: comments, refetch} = useQuery(["comments", news?.kids],
        () => fetchComments(news?.kids), {
            enabled: !!news?.kids?.length,
        })

    if (error) {
        return <ErrorMessage/>
    }

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div className="news">
            <div className="go-back-news-button">
                <Button type="primary" danger size="large" onClick={() => navigate("/")}>Go back to the list
                    news</Button>
            </div>
            <h4 className="author">{news?.by}</h4>
            <h2 className="title">{news?.title}</h2>
            <h4>
                Read the text: <a href={news?.url}> {news?.url}</a>
            </h4>
            <h5 className="time">{getDate(news?.time)}</h5>

            <Row gutter={16}>
                <Col span={12}>
                    <Statistic value={news?.kids?.length} prefix={
                        <CommentOutlined/>}/>
                </Col>
            </Row>
            {comments?.length && <div className="update-comments-button">
                <Button type="primary" danger size="large" onClick={() => refetch()}>Update comments</Button>
            </div>}
            <div>
                {comments?.length && comments.map(({id, text}) => {
                    return (
                        <Card key={id}>
                            {text}
                        </Card>
                    )
                })}

            </div>
        </div>
    )
}