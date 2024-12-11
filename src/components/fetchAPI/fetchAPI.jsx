'use client'

import React, { useState, useEffect } from 'react';
import './fetchAPI.css';

function FetchAPI() {
  const [data, setData] = useState([]);

  async function githubAPI() {
    try {
      const response = await fetch('https://api.github.com/users/alen-gebles/events', {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      });
      const result = await response.json();
      setData(result);
      console.log(result)
    } catch (error) {
      console.error('Error fetching GitHub API:', error);
    }
  }

  useEffect(() => {
    githubAPI();
  }, []);

  return (
    <section className='mini-container fetchAPI-container'>
    <div className='gitEvents'>
      {data.filter(event => event.type === 'PushEvent').slice(0, 3).map((event, index) => (

        <div key={index} className="eventBox">
            {event.payload?.commits?.map((commit, i) => (
              <>

                <div key={index} className='gitActionRow_left'>
                  {
                    event.type === 'PushEvent' ? 
                      <svg className='gitPushIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg>
                    :
                      <svg className='gitPushIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"></path></svg>
                  }
                  <p>#{index + 1}</p>
                </div>

                <div key={index} className='gitActionRow_rigth'>
                  <p>{commit.message}</p>
                </div>

              </>
            ))}
          </div>
          
        ))}
    </div>
      
    </section>
  );
}

export default FetchAPI;
