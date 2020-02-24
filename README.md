<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Bundle Message Collector (for special occations)
</h1>

Bundle is an app that collects messages for someone's special occation. The idea of this app was thought of a about 5 years ago, when I took my first steps to learn how to code, so, although it is a relatively simple app, it is something of importance to me. 

This app also allowed me to explore Gatsby, GraphQL, Apollo and Hasura.

[Deployed site](https://www.bundledev.netlify.com)._

## 🚀 Noteworthy Bits

1.  **Code snippet**

    This bit of code utilizes React Hooks to update state, and "mutate" the data on the back end. 

    ```index.js
    
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
        <h2 style={{paddingLeft: "50px", paddingTop: '30px'}}>Create a collection of messages for a special occation.</h2>
        <form style={{paddingTop: '100px', paddingLeft: "100px"}}>
      <input
        name="author_name"
        placeholder="Name"
        onChange={e => setAuthor(e.target.value)}
      />
      <input
        name="subject"
        placeholder="Subject"
        onChange={e => setSubject(e.target.value)}
      />
      <input
        name="message"
        type="text"
        placeholder="Message"
        onChange={e => setMessage(e.target.value)}
      />
      <button  onClick={e => {
        e.preventDefault();
        addMessage({ variables: { author_name: author_name, subject: subject, message: message } });
      }} >Submit</button>
    </form>
    </Layout>
    </>
    )
  }
    ```

2.  **Future Plans**

    Given more time, I would impliment a user login feature. I've looked into PassportJS for this. The ideal app would be one that could handle more than user / special event at a time. In order to do this I would have to build out the back end - create a table for each user, and then also make a message console for each user. 

