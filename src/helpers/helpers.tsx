/* eslint-disable react-refresh/only-export-components */
import React from '../assets/reactjs.png'
import HTML from '../assets/html.png'
import World from '../assets/world.png'
import Figma from '../assets/figma.png'
import Vue from '../assets/vue.png'
import Support from '../assets/support.png'
import AdobeXd from '../assets/xd.png'
import Meet from '../assets/meet.png'
import Sketch from '../assets/sketch-label.png'
import Avatar1 from '../assets/avatar.png'
import Avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.png'
import Avatar4 from '../assets/avatar4.png'
import Avatar5 from '../assets/avatar5.png'
import Avatar6 from '../assets/avatar6.png'
import Avatar7 from '../assets/avatar7.png'
import Avatar8 from '../assets/avatar8.png'
import { GridColDef, GridCellParams} from '@mui/x-data-grid'
import {Avatar, Stack, Typography,LinearProgress, IconButton,Menu,MenuItem} from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CheckIcon from '@mui/icons-material/Check';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FlagIcon from '@mui/icons-material/Flag';
import TranslateIcon from '@mui/icons-material/Translate';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState } from 'react'



export const teamsData = [
    {
        title:'React Developers',
        img: React,
        description:'We dont make assumptions about the rest of your technology stack, so you can develop new features in React.',
        tech:['react', 'MUI'],
        icons:[Avatar1,Avatar2,Avatar3,Avatar6],
        extra: 25
    },
    {
        title:'Vue.js Dev Team',
        img: Vue,
        description:'The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.',
        tech:['vuejs', 'Developers'],
        icons:[Avatar4,Avatar5,Avatar8,Avatar7],
        extra: 15
    },
    {
        title:'Creative Designers',
        img: AdobeXd,
        description:'A design or product team is more than just the people on it. A team includes the people, the roles they play.',
        tech:['sketch', 'XD'],
        icons:[Avatar1,Avatar2,Avatar3,Avatar6],
        extra: 55
    },
    {
        title:'Support Team',
        img: Support,
        description:'Support your team. Your customer support team is fielding the good, the bad, and the ugly day in and day out.',
        tech:['Zendesk'],
        icons:[Avatar4,Avatar5,Avatar8,Avatar7],
        extra: 35
    },
    {
        title:'Digital Marketing',
        img: World,
        description:'Digital marketing refers to advertising delivered through digital channels such as search engines, websites…',
        tech:['Twitter', 'Email'],
        icons:[Avatar1,Avatar2,Avatar3,Avatar6],
        extra: 19
    },
    {
        title:'Event',
        img: Meet,
        description:'Event is defined as a particular contest which is part of a program of contests. An example of an event is the long…',
        tech:['Hubilo'],
        icons:[Avatar4,Avatar5,Avatar8,Avatar7],
        extra:55
    },
    {
        title:'Figma Resources',
        img: Figma,
        description:'Explore, install, use, and remix thousands of plugins and files published to the Figma Community by designers and developers.',
        tech:['UX/UI', 'FIGMA'],
        icons:[Avatar1,Avatar2,Avatar3,Avatar6],
        extra: 45
    },
    {
        title:'Only for Beginners',
        img: HTML,
        description:'Learn the basics of how websites work, front-end vs back-end, and using a code editor. Learn basic HTML, CSS, and…',
        tech:['HTML', 'CSS'],
        icons:[Avatar4,Avatar5,Avatar8,Avatar7],
        extra: 50
    },
]

export const Connections=[
    {
        user:'Mark Gilbert',
        icon: Avatar1,
        profession: 'UX/UI Designer',
        tech:['Sketch','Figma'],
        projects: 18,
        tasks: 834,
        connections: 129,
        connected:true
    },
    {
        user:'Eugenia Parsons',
        icon: Avatar2,
        profession: 'Developer',
        tech:['Angular','React'],
        projects: 112,
        tasks: '2.31k',
        connections: '1.28k',
        connected:false
    },
    {
        user:'Francis Byrd',
        icon: Avatar3,
        profession: 'Developer',
        tech:['HTML','React'],
        projects: 32,
        tasks: '1.25k',
        connections: 890,
        connected:false
    },
    {
        user:'Leon Lucas',
        icon: Avatar6,
        profession: 'UX/UI Designer',
        tech:['Figma','Sketch', 'Photoshop'],
        projects: 86,
        tasks: '12.4k',
        connections: 890,
        connected:false
    },
    {
        user:'Jayden Rogers',
        icon: Avatar4,
        profession: 'Full Stack Developer',
        tech:['React','HTML', 'Node.js'],
        projects: 244,
        tasks: '23.8k',
        connections: '2.14k',
        connected:true
    },
    {
        user:'Jeanette Powell',
        icon: Avatar5,
        profession: 'SEO',
        tech:['Analysis', 'Writing'],
        projects: 32,
        tasks: '1.28k',
        connections: '1.27k',
        connected:false
    }
]

export const ProjectData = [
    {
        title:'Social Banner',
        icon:World,
        client:'Christian Jimenez',
        budget: '$24.8k/$18.2k',
        startDate : '10/2/19',
        deadline:'12/9/22',
        description:'We are Consulting, Software Development and Web Development Services.',
        hours:'380/244',
        daysLeft: '28',
        task:'328/344',
        percentaje: '95',
        icons:[Avatar1,Avatar2,Avatar3],
        members: '280',
        messages: 15
    },
    {
        title:'Admin Template',
        icon:React,
        client:'Jeffrey Phillips',
        budget: '$2.4k/$1.8k',
        startDate : '18/8/21',
        deadline:'21/6/22',
        description:'Time is our most valuable asset, thats why we want to help you save it by creating…',
        hours:'98/135',
        daysLeft: '15',
        task:'38/90',
        percentaje: '42',
        icons:[Avatar4,Avatar5,Avatar6],
        members: '1.1k',
        messages: 236
    },
    {
        title:'App Design',
        icon:Vue,
        client:'Ricky McDonald',
        budget: '$980/$420',
        startDate : '24/7/21',
        deadline:'8/10/21',
        description:'App design combines the user interface (UI) and user experience (UX).',
        hours:'880/421',
        daysLeft: '45',
        task:'95/140',
        percentaje: '68',
        icons:[Avatar8,Avatar7,Avatar1],
        members: '458',
        messages: 98
    },
    {
        title:'Create Website',
        icon:HTML,
        client:'Hulda Wright',
        budget: '$8.5k/$2.43k',
        startDate : '10/2/19',
        deadline:'12/9/22',
        description:'Your domain name should reflect your products or services so that your...',
        hours:'1.2k/820',
        daysLeft: '126',
        task:'302/420',
        percentaje: '72',
        icons:[Avatar2,Avatar3,Avatar6],
        members: '137',
        messages: 120
    },
    {
        title:'Figma Dashboard',
        icon:Figma,
        client:'Jerry Greene',
        budget: '$52.7k/$28.4k',
        startDate : '12/12/20',
        deadline:'25/12/21',
        description:'Use this template to organize your design project. Some of the key features are…',
        hours:'142/420',
        daysLeft: '5',
        task:'100/285',
        percentaje: '35',
        icons:[Avatar4,Avatar5,Avatar8],
        members: '82',
        messages: 20
    },
    {
        title:'Logo Design',
        icon:AdobeXd,
        client:'Olive Strickland',
        budget: '$1.3k/$655',
        startDate : '17/8/21',
        deadline:'02/11/21',
        description:'Premium logo designs created by top logo designers. Create the branding of business.',
        hours:'580/445',
        daysLeft: '4',
        task:'290/290',
        percentaje: '100',
        icons:[Avatar7,Avatar1,Avatar2],
        members: '16',
        messages: 16
    }
]

export const rows = [
    {
        id:1,
        avatar:'WS',
        title:'Website SEO',
        date: '10 May 2021',
        leader:'Eileen',
        team:[Avatar1,Avatar2,Avatar3,Avatar6],
        status:38,
        actions: MoreVertIcon
    },
    {
        id:2,
        avatar:World,
        title:'Social Banners',
        date: '03 Jan 2021',
        leader:'Owen',
        team:[Avatar4,Avatar5],
        status:45,
        actions: MoreVertIcon
    },
    {
        id:3,
        avatar:Sketch,
        title:'Logo Designs',
        date: '12 Aug 2021',
        leader:'Keith',
        team:[Avatar8,Avatar7,Avatar1,Avatar2],
        status:92,
        actions: MoreVertIcon
    },
    {
        id:4,
        avatar:Sketch,
        title:'IOS App Design',
        date: '19 Abr 2021',
        leader:'Merline',
        team:[Avatar3,Avatar6,Avatar4,Avatar5],
        status:56,
        actions: MoreVertIcon
    },
    {
        id:5,
        avatar:Figma,
        title:'Figma Dashboards',
        date: '08 Abr 2021',
        leader:'Harmonia',
        team:[Avatar8,Avatar7,Avatar1],
        status:25,
        actions: MoreVertIcon
    },
    {
        id:6,
        avatar:HTML,
        title:'Crypto Admin',
        date: '29 Sept 2021',
        leader:'Allyson',
        team:[Avatar2,Avatar3,Avatar6,Avatar4],
        status:36,
        actions: MoreVertIcon
    },
    {
        id:7,
        avatar:React,
        title:'Create Website',
        date: '20 Mar 2021',
        leader:'Georgie',
        team:[Avatar5,Avatar8,Avatar7,Avatar1],
        status:72,
        actions: MoreVertIcon
    },
    {
        id:8,
        avatar:AdobeXd,
        title:'App Design',
        date: '09 Feb 2021',
        leader:'Fred',
        team:[Avatar2,Avatar3,Avatar6,Avatar4],
        status:89,
        actions: MoreVertIcon
    },
    {
        id:9,
        avatar:Figma,
        title:'Angular APIs',
        date: '17 June 2021',
        leader:'Richardo',
        team:[Avatar5,Avatar8,Avatar7,Avatar1],
        status:77,
        actions: MoreVertIcon
    },
    {
        id:10,
        avatar:Vue,
        title:'Admin Template',
        date: '06 Oct 2021',
        leader:'Genevra',
        team:[Avatar2,Avatar3,Avatar6,Avatar4],
        status:100,
        actions: MoreVertIcon
    },

]

export const ProfileData=[
    {
        section:'about',
        items:[
            {
                title:'Full name',
                icon: PersonOutlineOutlinedIcon,
                data:'John Doe'
            },
            {
                title:'Status',
                icon:CheckIcon,
                data:'active'
            },
            {
                title:'Role',
                icon:StarOutlineIcon,
                data:'Developer'
            },
            {
                title:'Country',
                icon:FlagIcon,
                data:'USA'
            },
            {
                title:'Language',
                icon:TranslateIcon,
                data:'English'
            }
        ]
    },
    {
        section:'contacts',
        items:[
            {
                title:'Contact',
                icon:LocalPhoneIcon,
                data: '(123) 456-7890'
            },
            {
                title:'Skype',
                icon:ChatBubbleOutlineIcon,
                data:'John.doe',
            },
            {
                title:'Email',
                icon:MailOutlineIcon,
                data:'John.doe@example.com'
            }
        ]
    },
    {
        section:'teams',
       items:[
        {
            title:'Backend Developer',
            icon:'',
            data: 126
        },
        {
            title:'React Developer',
            icon:'',
            data: 98
        }
       ]
    },
    {
        section:'overview',
        items:[
            {
                icon:CheckIcon,
                title:'task compiled',
                data:'13.5k',
            },
            {
                icon:PersonOutlineOutlinedIcon,
                title:'Connections',
                data:'897'
            },
            {
                icon:AppRegistrationIcon,
                title:'Projects Compiled',
                data:146
            }
        ]
    }
]
function ActionsCellRenderer(params:GridCellParams){
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return(
        <>
        <IconButton onClick={handleOpenUserMenu} aria-label="settings">
        <params.row.actions />
         </IconButton>
         <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                    <MenuItem onClick={handleCloseUserMenu}>Details</MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>Archive</MenuItem>
                    <MenuItem sx={{color:'red'}} onClick={handleCloseUserMenu}>Delete</MenuItem>
                </Menu>
        </>
    )
}

export const columns: GridColDef[] = [
    { field: 'Name',
     headerName: 'Name',
      width: 300,
     renderCell:(params)=>( 
        <Stack direction={'row'} alignItems={'center'} gap={1}>
            {
            params.row.title === 'Website SEO'
            ?<Avatar sx={{backgroundColor:'lightGreen', color:'#56ca00'}}>{params.row.avatar}</Avatar>
            : <Avatar src={params.row.avatar} />
            }
            <div style={{display:'flex', flexDirection:'column'}}>
                <Typography variant='h6' color="text.secondary">{params.row.title}</Typography>
                <Typography variant='body2' component={'span'} color="text.secondary">{params.row.date}</Typography>
            </div>
        </Stack>
     )    
    },
    { 
      field: 'leader',
      headerName: 'Leader',
      width: 140,
      renderCell:(params)=>(
        <Typography variant='body2' component={'span'} sx={{fontSize:22}} color="text.secondary">{params.row.leader}</Typography>
      )
     },

    { field: 'team',
    headerName: 'Team',
    width: 140,
    renderCell:((params)=>(
        <Stack direction={'row'} alignItems={'center'}>
            {params.row.team.map((item:string)=>(
                <Avatar sx={{width:24, height:24}} src={item} />
            ))}
        </Stack>
    ))
},
    {
      field: 'status',
      headerName: 'Status',
      width: 180,
      renderCell: (params)=>(
             <LinearProgress 
                    sx={{
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: '#9155fd',
                        },
                        height:7,
                        borderRadius:10,
                        width:'100%'
                    }} 
                    variant='determinate' value={params.row.status} />
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 130,
      renderCell:ActionsCellRenderer
    },
  ];