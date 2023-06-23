import React from 'react'
import './Home.css'
import dtImage from './dt-1.png' // Import the image file

export const Home = () => {
  return (
    <div className='commands-list'>
        <ul>
            <li>Git init</li>
            <p>Initialize a local repository</p>
            <br/>
            <li>Git status</li>
            <p>Helps track unstaged changes</p>
            <br/>
            <li>Git add {"<"}xyz{">"}</li>
            <p>Moves a file with filename="xyz" from unstaged area to staging area</p> 
            {/* Add a comment type pop up for the definition of staging area. */}
            <br/>
            <li>Git add .</li>
            <p>Moves all the files from unstaged area to staging area</p> 
            <br/>
            <li>Git commit -m <i>"write your msg here"</i></li>
            <p>Commit the staged snapshot, with the message="write your msg here"</p> 
            <br/>
            <li>Git remote add {"<"}name{">"} {"<"}URL{">"}</li>
            <p>Create a new connection to a remote repo. After adding a remote, you can use "name" as a shortcut for "URL" in other commands.</p> 
            <p>Ex: git remote add origin https://github.com/MSameeha/MSameeha.git</p> 
            <p>Naming conventions (Not strict but a standard practice) - </p>
            <ol>
                <li>origin - default when you clone. Main remote repo where you intend to push</li>
                <li>upstream - if remote repository was forked, upstream refers to the repository from which your repo was forked</li>
                <li>username or teamname - collaborating on projects</li>
            </ol>
            <br/>
            <li>Git remote -v</li>
            <p>This command will display the names and URLs of all the remote repositories associated with the local repository</p> 
            <br/>
            <li>Git push</li>
            <p>Pushes code to active repo and active branch in local repo</p> 
            <br/>
            <li>Git push "nameOfRepo" "branchToPush"</li>
            <p>Push a branch to your remote repository</p> 
            <br/>
            <li>Git log</li>
            <p>view changes, it has more flags like --summary for detailed, --oneline for brief</p> 
            <br/>
            <li>Git branch "branchName"</li>
            <p>Create a new branch</p> 
        </ul>
        {/* <img src={dtImage} alt="dt" className="dt-image" /> Add this line to display the image */}
    </div>
      
  )
}
