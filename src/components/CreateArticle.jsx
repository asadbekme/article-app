import { useState } from "react"
import { Input, TextArea } from "../ui"

const CreateArticle = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')

  return (
    <div className="text-center my-4">
      <h1 className="fs-2">Create article</h1>
      <div className="w-75 mx-auto mt-2">
        <form>
          <Input label={'Title'} state={title} setState={setTitle} />
          <TextArea label={'Description'} state={description} setState={setDescription} />
          <TextArea label={'Body'} state={body} setState={setBody} height={'250px'} />
          <button className="w-100 btn btn-lg btn-primary" type="submit">Create</button>
        </form>
      </div>
    </div>
  )
}

export default CreateArticle