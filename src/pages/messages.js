import { Link } from "gatsby"
import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import MessageList from "../components/MessageList";
import Layout from "../components/Layout"


function Messages(props){

  return(
  <Layout>
    <MessageList/>
  </Layout>
  )
}

export default Messages;