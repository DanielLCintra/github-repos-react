import React from 'react'
import { Collection,CollectionItem } from 'react-materialize'

const ReposList = props => {
  return (
    <Collection>
      {
        props.repos.map(repo => (
          <CollectionItem key={repo.id}>{repo.name}</CollectionItem>
        ))
      }
    </Collection>
  )
}

export default ReposList