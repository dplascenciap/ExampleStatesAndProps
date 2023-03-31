// Step 1: Import React
import React from "react";

// Import other components
import Tweet from "./Tweet";

// Step 2: Create the function "Nav"
const Tweets = (props) => {

    const tweetsArray = [
        {name:"David", age:"35", tweet:"this is a tweet"},
        {name:"Account1", age:"00", tweet:"of course!"},
        {name:"John", age:"15", tweet:"hello world"}
      ]

    return (
        <section>
            <h1>I have {tweetsArray.length} tweets</h1>
            {
                tweetsArray.map((tweetItem) => (
                    <Tweet user = {tweetItem.name} msg = {tweetItem.tweet}/>
                ))
            }
        </section>
    );
}

export default Tweets;
