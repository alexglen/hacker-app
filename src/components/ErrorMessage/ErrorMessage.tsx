import React from "react";
import {Button, Result} from "antd";
import {NavigateFunction, useNavigate} from "react-router-dom";

export const ErrorMessage = () => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <Result
            status="warning"
            title="There are some problems with your operation."
            extra={
                <Button type="primary" key="console" onClick={() => navigate("/")}>
                    Refresh
                </Button>
            }
        />
    )
}

