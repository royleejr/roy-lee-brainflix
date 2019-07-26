import mainVideoImage from "../../assets/Images/video-list-0.jpg";
import Image1 from "../../assets/Images/video-list-1.jpg";
import Image2 from "../../assets/Images/video-list-2.jpg";
import Image3 from "../../assets/Images/video-list-3.jpg";
import Image4 from "../../assets/Images/video-list-4.jpg";
import Image5 from "../../assets/Images/video-list-5.jpg";
import Image6 from "../../assets/Images/video-list-6.jpg";
import Image7 from "../../assets/Images/video-list-7.jpg";
import Image8 from "../../assets/Images/video-list-8.jpg";

// Side Video Object
const sideVideoData = [{
    id: '313124141', 
    title: 'Become A Travel Pro In One Easy Lesson', 
    channel: 'Scotty Cranmer', 
    image: Image1
}, 
{
    id: '7473453', 
    title: 'Les Houches The Hidden Gem Of The Chamonix', 
    channel: 'Scotty Cranmer', 
    image: Image2
},
{
    id: '525226343424', 
    title: 'Travel Health Useful Medical Information For', 
    channel: 'Scotty Cranmer', 
    image: Image3
},
{
    id: '6324244242', 
    title: 'Cheap Airline Tickets Great Ways To Save', 
    channel: 'Emily Harper', 
    image: Image4
},
{
    id: '22511553', 
    title: 'Take A Romantic Break In A Boutique Hotel', 
    channel: 'Ethan Owen', 
    image: Image5
},
{
    id: '863534535', 
    title: 'Choose The Perfect Accommodations', 
    channel: 'Lydia Perez', 
    image: Image6
},
{
    id: '86524243442', 
    title: 'Cruising Destination Ideas', 
    channel: 'Timothy Austin', 
    image: Image7
},
{
    id: '243423424', 
    title: 'Train Travel On Track For Safety', 
    channel: 'Scotty Cranmer', 
    image: Image8
},
{
    id: '523423432424242', 
    title: 'BMX Rampage: 2018 Highlights', 
    channel: 'Red Cow', 
    image: mainVideoImage
}]

//Main Video Object
const mainVideoData = {
    id: '523423432424242', 
    title: 'BMX Rampage: 2018 Highlights',
    description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    channel: 'Red Cow',
    image: mainVideoImage,
    views: '1,001,023',
    likes: '110,985',
    duration: 'type of <string>',
    video: 'type of <string>',
    timestamp: '12/18/2018',
    comments: 'type of <array>' 
};


const CommentData = [{
    id: '3132131231',
    name: 'Michael Lyons',
    date: '12/18/2018',
    comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
},
{
    id: '643534532',
    name: 'Gary Wong',
    date: '12/18/2018',
    comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
},
{
    id: '423423525153',
    name: 'Theodore Duncan',
    date: '11/15/2018',
    comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
}]



export {sideVideoData, mainVideoData, CommentData};