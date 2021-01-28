import React, { useState, useEffect } from "react";
import { Alert, ToastAndroid } from "react-native";

export default function useFetch(url) {
    const [movies, setmovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const error = "Something went wrong , Please Try again!";
    useEffect(() => {
        setIsLoading(true);
        fetch(url, { method: 'GET' })
            .then(function (res) {
                setIsLoading(false);
                return res.json()
            })
            .then((items) => {
                setmovies(JSON.parse(JSON.stringify(items)))
            }).catch(err => {
                //Toast
                setIsLoading(false);

            });
    }, []);

    return { movies: movies, isLoading: isLoading, };
}
