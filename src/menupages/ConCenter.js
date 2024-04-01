/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import touhoufest_map from "./../images/touhoufest_map.png";
import artistalleymap from "./../images/artistalleymap.png";
import { Image } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { CircledBullets } from '../Utils';

function MapModals(){
    const [showOuter, setShowOuter] = useState(false);
    const [showInner, setShowInner] = useState(false);

    return (<>
        <p>Tap to focus in/zoom on either map as needed.</p>

        <h4>Main TouhouFest Map</h4>
        <Figure onClick={() => setShowOuter(true)}>
            <Figure.Image src={touhoufest_map} fluid rounded/>
            <Figure.Caption>Map of the main areas of TouhouFest</Figure.Caption>
        </Figure>

        <p>See below for convention spaces/buildings and map locations:</p>

        <b>George Nakano Theatre</b>
        <ul className="list-unstyled">
            <li><CircledBullets argument="1"/> Registration</li>
            <li><CircledBullets argument="2"/> Artist Alley</li>
        </ul>

        <b>Entry Plaza</b>
        <ul className="list-unstyled">
            <li><CircledBullets argument="3"/> Vendors Booth</li>
            <li><CircledBullets argument="5"/> Cosplay Booths & Cosplay Repair</li>
            <li><CircledBullets argument="6"/> Info Booth | Lost and Found</li>
        </ul>

        <b>Garden Room B</b>
        <ul className="list-unstyled">
            <li><CircledBullets argument="4"/> Panels</li>
        </ul>

        <b>Pine Wind Garden</b>
        <ul className="list-unstyled">
            <li><CircledBullets argument="15"/> Cosplay Meetups</li>
        </ul>

        <b>Toyota Meeting Hall</b>
        <ul className="list-unstyled">
            <li><span className="text-primary"><CircledBullets argument="9"/></span> Gaming Hall 1: Official Touhou Games</li>
        </ul>

        <b>Ken Miller Rec Center</b>
        <ul className="list-unstyled">
            <li><CircledBullets argument="10"/> Gaming Hall 2: Fan Games</li>
            <li><CircledBullets argument="11"/> Music Booths</li>
        </ul>
        
        <b>Entry Foyer</b>
        <ul className="list-unstyled">
            <li><CircledBullets argument="12"/> Community Booths</li>
        </ul>

        <b>Assembly Hall</b>
        <ul className="list-unstyled">
            <li><CircledBullets argument="13"/> Assembly Hall</li>
        </ul>

        <b>Torino Plaza</b>
        <ul className="list-unstyled">
            <li><CircledBullets argument="7"/> Guest Booths</li>
            <li><CircledBullets argument="8"/> Main Stage</li>
        </ul>

        <b>Front Circular Drive</b>
        <ul className="list-unstyled">
            <li><CircledBullets argument="14"/> Food Trucks</li>
        </ul>

        <p className="small"><FontAwesomeIcon icon={faCircleInfo} fixedWidth></FontAwesomeIcon> James Armstrong Theatre (TCAC) and Dance Studios (TCAC) aren't being used by TouhouFest events.</p>

        <h4>Artist Alley Map</h4>
        <Figure onClick={() => setShowInner(true)}>
            <Figure.Image src={artistalleymap} fluid rounded/>
            <Figure.Caption>Map of Artist Alley</Figure.Caption>
        </Figure>

        <Modal show={showOuter} size="lg" onHide={() => setShowOuter(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Outer TouhouFest Map</Modal.Title>
            </Modal.Header>
            <Modal.Body className="align-items-center px-0">
                <Image src={touhoufest_map} fluid/>
            </Modal.Body>
        </Modal>

        <Modal show={showInner} size="lg" onHide={() => setShowInner(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Artist Alley Map</Modal.Title>
            </Modal.Header>
            <Modal.Body className="align-items-center px-0">
                <Image src={artistalleymap} fluid/>
            </Modal.Body>
        </Modal>

    </>);
}

export const conCenterPage = {
    "header": (<><FontAwesomeIcon icon={faMapLocationDot} fixedWidth></FontAwesomeIcon> Convention Maps</>),
    "fluidImage": (<></>),
    "body": (<><MapModals></MapModals></>)
}