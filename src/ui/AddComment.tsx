import {useState} from "react";
import PrimaryButton from "../components/PrimaryButton.tsx";
import {IAddCommentProps} from "../interfaces/Comments.ts";


const AddComment = ({onPost, value = ""}: IAddCommentProps) => {
    const [comment, setComment] = useState(value);

    return <div className="w-full text-end">
        <textarea
            className="w-full block w-full p-2.5 mb-4 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            cols="30"
            rows="5"
            placeholder="Add comment..."
            onChange={(e) => setComment(e.target.value)}
            defaultValue={comment}
        />
        <PrimaryButton title="Update comments" onClick={() => { onPost(comment) }} />
    </div>
}

export default AddComment;
