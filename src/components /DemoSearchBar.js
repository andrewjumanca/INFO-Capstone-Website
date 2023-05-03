import { useRef, useEffect } from 'react';
import '../style/DemoSearchBar.css'

function DemoSearchBar(){
    const inputRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;

        const handleClick = async () => {
            const query = inputRef.current.value;
            // set input to api endpoint
            // const response = await fetch('http://localhost:3000/api/v1?productName=' + query, {
            //   method: 'GET'
            // });
            // const data = await response.json();
            // Do something with the response
        };

        if (button) {
            button.addEventListener('click', handleClick);
        }

        return () => {
            if (button) {
                button.removeEventListener('click', handleClick);
            }
        };
    }, [buttonRef]);

    return(
        <div className="DemoSearchBar">
            <div className="search">
                <input placeholder="Search your product" type="text" name="text" className="input" id="searchQuery" ref={inputRef} />
            </div>
            <div className="send">
                <button className="send-button" id="sendQueryButton" ref={buttonRef}>
                    <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                    </div>
                    </div>
                    <span>Send</span>
                </button>
            </div>
        </div>
    );
}

export default DemoSearchBar;
