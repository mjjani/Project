/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const handleDownloadClick = () => {
        window.open('https://play.google.com/store/apps/details?id=com.dts.freefiremax', '_blank');
    };

    return (
        <div className="text-center">
            <h1>Welcome to <strong className='text-danger'>ঔৣÐȄΜ☢ŅŞঔৣ Esports</strong></h1>
            <img
                src='https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/20248/06bbaa2c9707c761311dc5b76082b5d8.jpg'
                style={{ width: '19.8rem', height: 'auto', borderRadius: '8px', objectFit: 'cover' }}
            />
            <br />
            <br />
            <h2><Link to='https://ff.garena.com/en/'>Welcome to Free Fire</Link></h2>
            <p>Where Your go-to place for amazing services, interesting blogs, and much more.</p>
            <br />
            <p>
                Free Fire Esports is a major part of the mobile
                gaming industry, with Garena Free Fire being one
                of the most popular battle royale games globally.
                The esports scene for Free Fire includes large-scale
                tournaments, regional competitions, and international
                events, attracting both professional teams and casual
                players looking to compete at higher levels. Here’s
                an overview of the key aspects of Free Fire esports:
            </p>
            <br />
            <br />
            <div className='text-left'>
                <p>
                    <strong>1. Tournaments</strong>
                    <br />
                    Free Fire hosts a variety of esports tournaments, 
                    both regional and global, offering large prize 
                    pools and significant exposure for participants. Some notable ones include:

                    Free Fire World Series (FFWS): One of the biggest 
                    global events, where teams from various regions 
                    compete for the title of world champions.
                    Free Fire Continental Series (FFCS): A major 
                    competition with top teams from regions like Asia,
                     Americas, and EMEA.
                    Free Fire Pro League: Regional leagues that serve
                     as qualifiers for international tournaments.
                    Free Fire India Championship (FFIC): A prestigious 
                    competition in India, which is one of the largest markets for Free Fire.
                    <br />
                    <br />
                    <strong>2. Regional Competitions</strong>
                    <br />
                    Free Fire esports is divided into various regional leagues
                    to ensure local teams have a platform to compete and qualify
                    for bigger tournaments. Some regions include:

                    India
                    Latin America
                    Brazil
                    Southeast Asia
                    Europe and Middle East
                    Each region has its own qualifiers and leagues, where the
                    best teams can advance to international competitions.
                    <br />
                    <br />

                    <strong>3. Prize Pools</strong>
                    <br />
                    Free Fire esports tournaments come with significant prize
                    pools. For example, the Free Fire World Series 2021 had a
                    prize pool of $2 million. The high stakes attract professional
                    teams and sponsors, making it a lucrative career for top players.
                    <br />
                    <br />

                    <strong>4. Team Structure</strong>
                    <br />
                    Teams typically consist of 4-5 players, including
                    one substitute. Each player has a specific role:

                    Sniper: Long-range specialist.
                    Rusher: Close-range fighter who aggressively pushes opponents.
                    Support: Provides backup to teammates, often using healing and utility items.
                    Scout/Flanker: Responsible for gathering information and taking
                    wide angles during fights.
                    <br />
                    <br />

                    <strong>5. Player Popularity and Streaming</strong>
                    <br />
                    Many Free Fire pro players also build personal brands through
                    streaming platforms like YouTube, where they showcase their
                    gameplay, provide tips and tricks, or stream live events.
                    Some of the most famous Free Fire esports players have millions of subscribers.
                    <br />
                    <br />

                    <strong>6. Mobile-First Focus</strong>
                    <br />
                    Unlike PC-based esports games, Free Fire is focused on
                    mobile devices, making it accessible to a wider audience.
                    This mobile-first approach has helped it gain massive
                    popularity in regions where mobile gaming dominates,
                    such as Southeast Asia, Latin America, and India.
                    <br />
                    <br />

                    <strong>7. Esports Organizations and Sponsorship</strong>
                    <br />
                    Free Fire esports has attracted various well-known
                    esports organizations that sponsor teams, such as:

                    <div className='text-left'>
                        <ul>
                            <li>LOUD (Brazil)</li>
                            <li>Team Liquid</li>
                            <li>EVOS Esports</li>
                            <li>Total Gaming Esports (India)</li>
                            <li>These organizations provide resources, training,
                                and management to help teams succeed in the competitive landscape.</li>
                        </ul>
                    </div>
                    <br />
                    <br />

                    <strong>8. In-Game Integration</strong>
                    <br />
                    Free Fire often integrates esports into the game itself by
                    showcasing events, allowing players to watch live tournaments
                    in-game, and offering esports-related cosmetics (e.g.,
                    team skins, emotes, and exclusive items).

                    <br />
                    <br />
                    <strong>9. Fan Engagement</strong>
                    <br />
                    Free Fire esports has a massive fanbase, with tournaments
                    streamed live on platforms like YouTube, Booyah!, and
                    Facebook, drawing millions of viewers. The game also
                    engages fans by offering rewards and in-game items during live events.

                    <br />
                    <br />
                    <strong>10. Rise of Local Talent</strong>
                    <br />
                    Countries like Brazil, India, and Indonesia have emerged
                    as key hubs for Free Fire esports talent, with players
                    from these regions dominating many international competitions.
                </p>
            </div>
            <span>Game Download Link here</span>
            <br />
            <div className='btn btn-success' onClick={handleDownloadClick}><h4>Download Game</h4></div>
        </div>
    );
};

export default Home;
