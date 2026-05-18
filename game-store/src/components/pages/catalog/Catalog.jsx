import GameCard from "../../gameCard/GameCard";
import gamesData from "../../../assets/gameData/gameData";
import Navbar from "../../navbar/Navbar";
import "./catalog.css";
import Sidebar from "../../sidebar/Sidebar";
import { useState } from "react";

function Catalog({ addToCart }) {

    const [selectedGenre, setSelectedGenre] = useState("");
    const [search, setSearch] = useState("");

    const filteredGames = gamesData.filter((game) => {

        const matchesGenre =
            selectedGenre === "" ||
            game.genre === selectedGenre;

        const matchesSearch =
            game.title
                .toLowerCase()
                .includes(search.toLowerCase());

        return matchesGenre && matchesSearch;
    });

    return (
        <>
            <Navbar />
            <div className="catalog-container">
                <div className="container">

                    <div className="row">

                        <div className="col-md-3">
                            <Sidebar
                                selectedGenre={selectedGenre}
                                setSelectedGenre={setSelectedGenre}
                                search={search}
                                setSearch={setSearch}
                            />
                        </div>

                        <div className="col-md-9">
                            <h2 className="catalog-title">Catálogo de Juegos</h2>

                            <div className="catalog-grid">
                                {filteredGames.map((game) => (
                                    <GameCard
                                        key={game.id}
                                        game={game}
                                        addToCart={addToCart}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Catalog;