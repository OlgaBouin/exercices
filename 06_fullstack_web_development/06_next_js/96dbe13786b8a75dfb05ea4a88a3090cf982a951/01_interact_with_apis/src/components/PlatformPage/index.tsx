import React from "react";
import types from "../../types/Platform";

// manière claire dans la doc du <select>, pour récupérer la valeur du champ sur lequel vous
// cliquez avec l'attribut onChange , vous accédez à
// cette valeur en utilisant event.target.value dans votre callback (qui doit donc prendre event en argument)

const PlatformPage = (): JSX.Element => {
  const [plat, setPlatforms] = React.useState<types.Platform[]>();

  const [platform, setPlatBySelect] = React.useState<string>("switch");

  const [game, setGameByClick] = React.useState<string>("Fable II");

  React.useEffect(() => {
    fetch("https://videogames-sparta.herokuapp.com/platforms", {
      headers: { accept: "application/json" },
    }).then(async (resp) => setPlatforms(await resp.json()));
  }, []);
  //console.log(plat);

  if (plat && plat[0] && platform && game) {
    // const platAndGames = plat.map((element: types.Platform, index: number) => {
    //   const gamesOfPlateform = element.games.map((elementGame, indexGame) => {
    //     return <li key={"games-" + indexGame}>{elementGame.name}</li>;
    //   });
    //   return (
    //     <li key={"platforms-" + index}>
    //       {element.name}
    //       <ul>{gamesOfPlateform}</ul>
    //     </li>
    //   );
    // });

    const withASelect = plat.map((elem) => {
      return (
        <option key={elem.slug} value={elem.slug}>
          {elem.name}
        </option>
      );
    });

    const onChangeFunction = (selectedPlatform: string): void => {
      setPlatBySelect(selectedPlatform);
    };

    const getGamesOfPlatform = (platformSlug: string) => {
      return plat
        .filter((element) => element.slug === platformSlug)[0]
        .games.map((gameElement) => {
          return (
            <tr key={gameElement.name}>
              <td key={gameElement.name}>
                <p
                  id={gameElement.name}
                  onClick={(): void => {
                    onClickFunction(gameElement.name);
                    // console.log("CLICK currentTarget : ", event.currentTarget);
                    // console.log("CLICK Target : ", event.target);
                    // console.log("CLICK detail : ", event.detail);
                    // console.log("CLICK view : ", event.view);
                  }}
                >
                  {gameElement.name}
                </p>
              </td>
            </tr>
          );
        });
    };

    const tableOfGames = getGamesOfPlatform(platform);

    const getDetailsOfGameByName = (nameOfGame: string) => {
      const gameToDisplay = plat
        .filter((elemPlat) => {
          const arrayOfFilteredPlatforms = elemPlat.games
            .map((elemGame) => {
              console.log("Name from map : ", elemGame.name.replace(/\s/g, ""));
              return elemGame.name.replace(/\s/g, "");
            })
            .includes(nameOfGame.replace(/\s/g, ""));
          console.log("Name from includes : ", nameOfGame.replace(/\s/g, ""));
          console.log("arrayPL", arrayOfFilteredPlatforms);
          return arrayOfFilteredPlatforms;
        })[0]
        .games.filter((elemmm) => elemmm.name === nameOfGame)[0];
      return (
        <>
          <h3>{gameToDisplay.name}</h3>
          <img src={"https:" + gameToDisplay.cover.url}></img>
        </>
      );
    };

    const gameDetails = getDetailsOfGameByName(game);

    const onClickFunction = (gameNameWithP: string) => {
      setGameByClick(gameNameWithP.replace(/<[^>]*>?/gm, ""));
      console.log("Game name from on click : ", gameNameWithP.replace(/<[^>]*>?/gm, ""));
    };

    return (
      <div className="platform-card row w-100 border" style={{ height: "600px" }}>
        <tbody>
          <table>
            <tr>
              <td>
                <select
                  onChange={(event): void => {
                    console.log("CONSOLE : ", event.target.value);
                    onChangeFunction(event.target.value);
                    console.log("USE STATE : ", platform);
                  }}
                  name="choice"
                >
                  {withASelect}
                </select>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <table>{tableOfGames}</table>
              </td>
              <td>{gameDetails}</td>
            </tr>
          </table>
        </tbody>
        {/* <ul>{platAndGames}</ul> */}
        {/* Platforms */}
      </div>
    );
  } else return <>Platforms</>;
};

export default PlatformPage;
