
import { useState } from "react";

// let dayValue = 

const Answer = () => {
    const [expand, setExpand] = useState(false);
    const toggleExpand = () => setExpand(prevExpand => !prevExpand)
    console.log(expand);
    return (

        <div className="btn-container">
            <button className="answerButton" onClick={toggleExpand}>Answer</button>
            {/* {expand && <div> this is content</div>} */}
        </div>
    )
}

export default Answer