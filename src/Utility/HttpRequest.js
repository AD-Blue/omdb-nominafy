import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function useAxiosGet(url) {
    const [request, setRequest] = useState({
        loading: false,
        data: {},
        error: false
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: {},
            error: false
        })
        axios.get(url).then(response => {
            setRequest({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setRequest({
                loading: false,
                data: {},
                error: true
            })
        })
    }, [url])

    return request
}