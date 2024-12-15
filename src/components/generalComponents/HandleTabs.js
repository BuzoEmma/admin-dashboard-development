const handleTabs = (value, tabs) => {
    // let tabArr = [setAppearance, setProfile];
    tabs.map(tab => {
      if (tab === value) {
        tab(true)
      } else {
        tab(false);
      }
    })

}

export default handleTabs
