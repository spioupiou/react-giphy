import React, { useState } from 'react'; // use === Hook
import GifList from './GifList';
import Gif from './Gif';
import SearchBar from './SearchBar';

const App = () => {
  const [selectedID, setSelectedID] = useState("3oKIPmUUz1MT9u3UA0"); // initial gif
  const [gifIDs, setGifIDs] = useState(["1ytmFDosBYMs8", "3oKIPmUUz1MT9u3UA0"]);
  // const selectedID = "3oKIPmUUz1MT9u3UA0";
  // const gifIDs = ["3oKIPmUUz1MT9u3UA0", "3oKIPmUUz1MT9u3UA0"];
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifID={selectedID} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifIDs} setSelectedID={setSelectedID} />
      </div>
    </div>
  );
};

export default App;
