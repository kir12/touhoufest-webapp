/* 
directions menupage for CJN webapp
these menupages can and should be modified for your convention's needs
and are mainly here to provide a source of reference

fontawesome and bootstrap are imported here for you so you can use them outright (and any other dependencies as you see fit)
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faGlobeAmericas, faPepperHot, faUtensils, faWarning } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
const okamoto  = require("./../images/okamoto.jpg");
const tokyostyle = require("./../images/tokyostyle.webp");
const brazilplate = require("./../images/brazilplate.jpg");
const orientalbreeze = require("./../images/orientalbreeze.jpg");
const noodsfoodtruck = require("./../images/noodsfoodtruck.jpg");
const lupitastacos = require("./../images/lupitas-tacos.jpg");

export const restarauntsPage = {
    "header": (<><FontAwesomeIcon icon={faUtensils} fixedWidth></FontAwesomeIcon> Food</>),
    "fluidImage": (<></>),
    "body": (<>
        <h4>Food Trucks</h4>
        <p>The below food trucks will be catering for TouhouFest for those interested. They will be located in the front entrance of TouhouFest, by the Circular Drive.</p> 

        <Card>
            <Card.Header className="text-center small">Japanese Food</Card.Header>
            <Card.Img src={okamoto} className="rounded-0"/>
            <Card.Body>
                <Card.Title>Okamoto Kitchen</Card.Title>
                <Card.Text>Okamoto Kitchen brings people to authentic, lesser known Japanese dishes liek Chicken Nanban, Cheese, Mochi, and Classic Style Japanese Curry.</Card.Text>
                <Card.Text>The vibrant Akiba-style decor and engaging customer service makes this food truck an experience you'll want to share with your friends!</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center small">
                <Card.Link href="https://okamotokitchen.com/#" target="_blank"><FontAwesomeIcon icon={faGlobeAmericas}/> Link</Card.Link>
                <Card.Link href="https://okamotokitchen.com/TakeOutMenu_Current.pdf" target="_blank"><FontAwesomeIcon icon={faBowlFood}/> Menu</Card.Link>
            </Card.Footer>
        </Card>

        <Card className="mt-2">
            <Card.Header className="text-center small">Japanese Food</Card.Header>
            <Card.Img src={tokyostyle} className="rounded-0"/>
            <Card.Body>
                <Card.Title>Tokyo Style Food Truck</Card.Title>
                <Card.Text>Tokyo Doggie Style Food Truck has been in operation since the spring of 2013, serving CIA alumnus Chef Keith Yokoyama’s tasty creations of Japanese fusion comfort food -- a variety of dishes and specialty beverages that are “culturally authentic and culinarily unique.” The menu includes from original Japanese fusion hot dogs (MUST TRY!), signature Yakiniku Philly Cheese Steak (most popular!), Rice Bowls, to such homemade craft drinks as Lychee Lemonade and Non-dairy boba milk teas. Special meal options (vegetarian/vegan/gluten-free) are also available</Card.Text>
                <Card.Text className="small"><FontAwesomeIcon icon={faWarning}/> Tokyo Style Food Truck will only be at TouhouFest on <b>Sunday</b>.</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center small">
                <Card.Link href="https://www.twitter.com/tokyostyletruck" target="_blank"><FontAwesomeIcon icon={faGlobeAmericas}/> Link</Card.Link>
                <Card.Link href="http://www.tokyostylefoodtruck.com/2021%20Lunch%20Menu.pdf" target="_blank"><FontAwesomeIcon icon={faBowlFood}/> Menu</Card.Link>
            </Card.Footer>
        </Card>

        <Card className="mt-2">
            <Card.Header className="text-center small">Thai Food</Card.Header>
            <Card.Img src={noodsfoodtruck} className="rounded-0"/>
            <Card.Body>
                <Card.Title>Noods Food Truck</Card.Title>
                <Card.Text>After many years of experience in the food truck world we felt a passion to create a new flavor profile that will express our creativity and culinary skills .  Noods is a combination of different types of cuisines that we have brought together to  create amazing flavors that will blow your mind !</Card.Text>
                <Card.Text>Our aromatic broth flavors with different kinds of noodles and toppings were carefully crafted to make the perfect noodle bowl for any crowd. </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center small">
                <Card.Link href="https://www.noodsfoodtruck.com/" target="_blank"><FontAwesomeIcon icon={faGlobeAmericas}/> Link & Menu</Card.Link>
            </Card.Footer>
        </Card>

        <Card className="mt-2">
            <Card.Header className="text-center small">Mexican Food</Card.Header>
            <Card.Img src={lupitastacos} className="rounded-0"/>
            <Card.Body>
                <Card.Title>Lupitas Tacos</Card.Title>
                <Card.Text>A high-quality Mexican Food Truck that serves a variety of delicious dishes with fresh and authentic ingredients.</Card.Text>
                <Card.Text className="small"><FontAwesomeIcon icon={faWarning}/> Lupitas Tacos will only be at TouhouFest on <b>Saturday</b>.</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center small">
                <Card.Link href="https://www.instagram.com/lupitastacos/?hl=en" target="_blank"><FontAwesomeIcon icon={faGlobeAmericas}/> Link</Card.Link>
                <Card.Link href="https://www.bestfoodtrucks.com/truck/lupita-s-tacos/menu" target="_blank"><FontAwesomeIcon icon={faPepperHot}/> Menu</Card.Link>
            </Card.Footer>
        </Card>

        <h4 className="mt-2">Other Options</h4>
        <p> This Google Maps link to <a href = "https://www.google.com/maps/search/Restaurants/@33.834631,-118.3583814,15z/data=!4m8!2m7!3m6!1sRestaurants!2sTorrance+Cultural+Arts+Center,+3330+Civic+Center+Dr,+Torrance,+CA+90503!3s0x80c2b52a55535501:0xbf414574f90a0717!4m2!1d-118.3439379!2d33.8394014?entry=ttu" target="_blank" rel="noreferrer">restaraunts nearby the Torrance Cultural Arts Center</a> may be helpful. Some additional restaraunt recommendations below:</p>

        <Card className="mt-2">
            <Card.Header className="text-center small">Brazillian Food</Card.Header>
            <Card.Img src={brazilplate} className="rounded-0"/>
            <Card.Body className="text-center">
                <Card.Text>Brazillian Plate House</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center small">
                <Card.Link href="https://www.google.com/maps/place/Brazilian+Plate+House/@33.8377178,-118.3618229,927m/data=!3m1!1e3!4m6!3m5!1s0x80c2b4cc39f2a7cf:0xaab6da9555284c93!8m2!3d33.8377961!4d-118.3617372!16s%2Fg%2F11c3vngsl9?authuser=0&entry=ttu" target="_blank"><FontAwesomeIcon icon={faGlobeAmericas}/> Google Maps Link</Card.Link>
            </Card.Footer>
        </Card>

        <Card className="mt-2">
            <Card.Header className="text-center small">Sushi</Card.Header>
            <Card.Img src={orientalbreeze} className="rounded-0"/>
            <Card.Body className="text-center">
                <Card.Text>Oriental Breeze</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center small">
                <Card.Link href="https://www.google.com/maps/place/Oriental+Breeze/@33.8392898,-118.3918499,21z/data=!4m6!3m5!1s0x80c2b4a651d7acb7:0xcedfa5cd53245be8!8m2!3d33.8392898!4d-118.3918499!16s%2Fg%2F1tf3bt94?entry=ttu" target="_blank"><FontAwesomeIcon icon={faGlobeAmericas}/> Google Maps Link</Card.Link>
            </Card.Footer>
        </Card>

    </>),
}