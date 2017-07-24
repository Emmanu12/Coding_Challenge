# Topicvoting

Topicvoting is a web app. Users can add topic,upvote or downvote topics.

1.  Users can add new topics by clicking 'New topic' button.
2.  Then after adding Topic title and Descrition, users can click save button.
3.  In the topic list, Users can upvote or downvote a topic.
4.  Top 20 list displays top 20 topics in the topic list in the basis of upvoting count.

## Components

| header  -- Displays the top header, Header containig 'Topic Voting' text

| topic   -- Parent component of all other components that deal with topic

    | best-list    --Display top 20 topics

    | topic-detail --Display details of a topic when that topic is clicked in the topic list

    | topic-edit   --For adding new topic, invoked when 'New Topic' button pressed

    | topic-list   --Display all topics, lists all topic-item

        | topic-item  --Single item in topic list

    | topic-start  --Ask user to select a topic from topic list
    


## Service

topic.service.ts -- Contain functions for getting topic list, Getting topic detail when that topic is pressed, Adding topic and refreshing top 20 list.

## Pipe

order.pipe.ts -- Sort the topics in descending order on the basis of upvote count.
