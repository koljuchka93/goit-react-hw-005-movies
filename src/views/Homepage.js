import { Title } from "../components/Title/Title";
import { fetchTranding } from "../service/service";
import { useState, useEffect } from "react";

import { loadingStatus } from "../utils/loadingStatus";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import s from "./HomePage.module.css";
import { ListOfMoviesHomePage } from "../components/ListOfMoviesHomePage/ListOfMoviesHomePage";

function Homepage({ changePage }) {
    const [movies, setmovies] = useState(null);
    const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
    useEffect(() => {
        setLoadStatus(loadingStatus.PENDING);
        fetchTranding().then((movies) => {
            setmovies(movies);
            setLoadStatus(loadingStatus.RESOLVED);
        });
    }, []);

    return (
        <div className={s.homePageMain}>
            <Title title="Tranding today" />
            {loadStatus === loadingStatus.PENDING && <Loader className={s.loader} />}
            {loadStatus === loadingStatus.RESOLVED && (
                <ListOfMoviesHomePage movies={movies.results} changePage={changePage} />
            )}
        </div>
    );
}

export { Homepage };