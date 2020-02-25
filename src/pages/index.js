import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Layout from "../components/Layout";

const ADD_MESSAGES = gql`
mutation addMessage($author_name: String!, $subject: String!, $message: String!) {
  insert_palanca(objects: {author_name: $author_name, message: $message, subject: $subject}) {
    returning {
      message
      subject
      author_name
    }
  }
}


`;
function IndexPage(){
 
    const [subject, setSubject]=useState('')
    const [message, setMessage]=useState('')
    const [author_name, setAuthor]=useState('')
    const [addMessage] = useMutation(ADD_MESSAGES)
    console.log(message, author_name, subject)

    return (
      <>
      <Layout>
        <h1 style={{paddingLeft: "240px", paddingTop: '100px'}}>Welcome!</h1>
        <h2 style={{paddingLeft: "50px", paddingTop: '30px'}}>Create a collection of messages for a special occasion.</h2>
        <form style={{paddingTop: '100px', paddingLeft: "100px"}}>
      <input
        name="author_name"
        placeholder="Name"
        type="text"
        value={author_name}
        onChange={e => setAuthor(e.target.value)}
      />
      <input
        name="subject"
        placeholder="Subject"
        type="text"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />
      <input
        name="message"
        type="text"
        value={message}
        placeholder="Message"
        onChange={e => setMessage(e.target.value)}
      />
      <button  onClick={e => {
        e.preventDefault();
        addMessage({ variables: { author_name: author_name, subject: subject, message: message } });
        setAuthor('')
        setSubject('')
        setMessage('')
      }} >Submit</button>
    </form>
    </Layout>
    </>
    )
  }



export default IndexPage;
export { ADD_MESSAGES };