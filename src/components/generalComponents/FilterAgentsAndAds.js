export const getAgent = (agents, itemData, setFilteredAgent) => {
    let found = false;
    for (let i = 0; i < agents?.length; i++) {
      for (let j = 0; j < agents[i]?.ads?.length; j++) {
        if (agents[i]?.ads[j]?._id === itemData?._id) {
          found = true;
          break;
        }
        // console.log('Not found');
      }
      if (found) {
        // console.log('found')
        setFilteredAgent(`${agents[i]?.fname} ${agents[i]?.surname}`);
        break; // If found, no need to continue looping
      }
    }
}

export const getAds = (agents, id) => {

}

