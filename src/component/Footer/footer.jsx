import React from "react";
import './footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instgram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


export default function(){
    return (
        <div className="footer">
            <div className="footer-icon">
                <img src={youtube_icon} alt="" />
                <img src={twitter_icon} alt="" />
                <img src={instgram_icon} alt="" />
                <img src={facebook_icon} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Centre</li>
                <li>Investor Relationship</li>
                <li>Jobs</li>
                <li>Terms of Users</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preference</li>
                <li>Contacts us</li>
            </ul>
            <p className="copyright-text">© 1997-2023 Netflix, Inc.</p>
        </div>
    )
}