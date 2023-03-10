import React from "react";
import {Link} from "react-router-dom";
import {Badge} from "antd";
import {getDate} from "../../utils";
import {IDataNews} from "../../models";
import "./CardNews.scss";

export const CardNews = ({title, by, time, score, id}: IDataNews) => {
    return (
        <Link to={String(id)} style={{textDecoration: "none"}} state={{id}}>
            <div className="list">
                <div className="top-panel">
                    <h4 className="author">{by}</h4>
                    <Badge
                        count={score}
                        style={{backgroundColor: '#b88b58'}}
                        overflowCount={999}
                        className="score"/>
                </div>
                <h3 className="title">{title}</h3>
                <h6 className="time">{getDate(time)}</h6>
            </div>
        </Link>
    )
}