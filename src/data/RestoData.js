import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import DraftsIcon from '@mui/icons-material/Drafts';


import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

export const restoInfo={
    socials:{
        Facebook:{
            link:'https://www.facebook.com',
            text:'SanaCoding',
            icon:<FacebookIcon/>
        },
        Twitter:{
            link:'https://www.twitter.com',
            text:'MyTwitter',
            icon:<TwitterIcon/>
        },
        Github:{
            link:'https://www.github.com',
            text:'MyGithub',
            icon:<GitHubIcon/>
        },
        Linkedin:{
            link:'https://www.linkedin.com',
            text:'MyLinkedIn',
            icon:<LinkedInIcon/>
        },
        Pintrest:{
            link:'https://www.pintrest.com',
            text:'Pintrest',
            icon:<PinterestIcon/>
        },
        Instagram:{
            link:'https://www.instagram.com',
            text:'Instagram',
            icon:<InstagramIcon/>
        }
    },
    Pages:{
        
    }
}

export const footerGetTouch=[
    {
        icon:<LocationOnIcon/>,
        title:'Silk St, Barbican, London E2Y, UK',
    },
    {
        icon:<PhoneEnabledIcon/>,
        title:'+39-055-123456',
    },
    {
        icon:<DraftsIcon/>,
        title:'booking@webexample.com'
    } 
]