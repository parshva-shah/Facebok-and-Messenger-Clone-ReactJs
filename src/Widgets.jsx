import React from 'react'
import './Widgets.css'
function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__name">
                <h3>
                    About the developer
                </h3>
            </div>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fparshva.shah.05%2Fposts%2F1557129531119371%3A0&show_text=true&width=552&appId=851347851962462&height=530"
                width="400"
                height="100%"
                style={{
                    border: "none",
                    overflow: "hidden"
                }}
                scrolling="yes"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media">
            </iframe>
        </div>
    )
}

export default Widgets
