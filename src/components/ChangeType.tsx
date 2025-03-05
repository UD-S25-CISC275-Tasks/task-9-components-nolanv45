import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    // const [questionType, setQuestionType] = useState<QuestionType>(
    //     "short_answer_question"
    // );

    return (
        <div>
            <Button
            // onClick={() =>
            //     setQuestionType(
            //         questionType === questionType.
            //             ? QuestionType.MultipleChoice
            //             : QuestionType.ShortAnswer
            //     )
            // }
            >
                Add One
            </Button>
        </div>
    );
}
