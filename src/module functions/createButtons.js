const createButtons = () => {
    const values = [];

    for(let i = 1; i < 10; i++) {
        values.push(
            <button key={i}>{i}</button>
        )
    }
    
    return values;
  }

export default createButtons