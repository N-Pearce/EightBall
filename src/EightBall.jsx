import React, {useState} from "react";
import {choice} from "./choice"
import "./EightBall.css"
import defaultAnswers from "./answers.json"

function EightBall({answers = defaultAnswers}) {
    const [answer, setAnswer] = useState({
        msg: "Think of a question",
        color: "black",
    });

    function handleClick(evt){
        setAnswer(choice(answers))
    }
    return (
        <div
            className="EightBall"
            onClick={handleClick}
            style={{backgroundColor: answer.color}}
        >
            <p>{answer.msg}</p>
        </div>
    )
}

export default EightBall;