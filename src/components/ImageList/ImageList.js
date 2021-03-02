import React, { useState, useEffect } from 'react'
import { singlePagePhotos, searchPhotos } from '../../UnsplashAPI'
import Image from '../Image/Image'
import './ImageList.css'

const photos = 
[
  {
    "id": "4vrZpOo7fTc",
    "created_at": "2020-03-28T08:37:10-04:00",
    "updated_at": "2021-03-01T06:11:44-05:00",
    "promoted_at": "2020-03-29T05:21:01-04:00",
    "width": 7534,
    "height": 5022,
    "color": "#f35926",
    "blur_hash": "LQO]#L?wPVxZ?v3=x]of-V$*Ataz",
    "description": "iPhone on orange",
    "alt_description": "black iphone 5 on orange surface",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MXwyMTEyMDR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1585399000684-d2f72660f092?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMTEyMDR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=85",
      "regular": "https://images.unsplash.com/photo-1585399000684-d2f72660f092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1585399000684-d2f72660f092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1585399000684-d2f72660f092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/4vrZpOo7fTc",
      "html": "https://unsplash.com/photos/4vrZpOo7fTc",
      "download": "https://unsplash.com/photos/4vrZpOo7fTc/download",
      "download_location": "https://api.unsplash.com/photos/4vrZpOo7fTc/download"
    },
    "categories": [
      
    ],
    "likes": 611,
    "liked_by_user": false,
    "current_user_collections": [
      
    ],
    "sponsorship": {
      "impression_urls": [
        "https://ad.doubleclick.net/ddm/trackimpi/N1224323.3286893UNSPLASH/B25110421.290992928;dc_trk_aid=484333612;dc_trk_cid=143200412;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?",
        "https://pixel.adsafeprotected.com/rfw/st/558772/51294889/skeleton.gif?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_278}&gdpr_pd=${GDPR_PD}"
      ],
      "tagline": "Smarts to Help You Grow",
      "tagline_url": "https://ad.doubleclick.net/ddm/trackclk/N1224323.3286893UNSPLASH/B25110421.290992928;dc_trk_aid=484333612;dc_trk_cid=143200412;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=",
      "sponsor": {
        "id": "D-bxv1Imc-o",
        "updated_at": "2021-03-01T19:49:08-05:00",
        "username": "mailchimp",
        "name": "Mailchimp",
        "first_name": "Mailchimp",
        "last_name": null,
        "twitter_username": "Mailchimp",
        "portfolio_url": "https://mailchimp.com/",
        "bio": "The all-in-one Marketing Platform built for growing businesses.",
        "location": null,
        "links": {
          "self": "https://api.unsplash.com/users/mailchimp",
          "html": "https://unsplash.com/@mailchimp",
          "photos": "https://api.unsplash.com/users/mailchimp/photos",
          "likes": "https://api.unsplash.com/users/mailchimp/likes",
          "portfolio": "https://api.unsplash.com/users/mailchimp/portfolio",
          "following": "https://api.unsplash.com/users/mailchimp/following",
          "followers": "https://api.unsplash.com/users/mailchimp/followers"
        },
        "profile_image": {
          "small": "https://images.unsplash.com/profile-1609545740442-928866556c38image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
          "medium": "https://images.unsplash.com/profile-1609545740442-928866556c38image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
          "large": "https://images.unsplash.com/profile-1609545740442-928866556c38image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
        },
        "instagram_username": "mailchimp",
        "total_collections": 0,
        "total_likes": 11,
        "total_photos": 0,
        "accepted_tos": false
      }
    },
    "user": {
      "id": "A3ZYw608ChU",
      "updated_at": "2021-03-02T00:09:19-05:00",
      "username": "aleno",
      "name": "Adomas Aleno",
      "first_name": "Adomas",
      "last_name": "Aleno",
      "twitter_username": null,
      "portfolio_url": "http://instagram.com/bettrteam",
      "bio": "Hi! I'm an owner of a digital product design studio Bettr. I love UI, UX and taking photos. Feel free to use my photos for your own projects :)",
      "location": "Vilnius  / Bali",
      "links": {
        "self": "https://api.unsplash.com/users/aleno",
        "html": "https://unsplash.com/@aleno",
        "photos": "https://api.unsplash.com/users/aleno/photos",
        "likes": "https://api.unsplash.com/users/aleno/likes",
        "portfolio": "https://api.unsplash.com/users/aleno/portfolio",
        "following": "https://api.unsplash.com/users/aleno/following",
        "followers": "https://api.unsplash.com/users/aleno/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-fb-1525101720-a96606f59ae6.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/profile-fb-1525101720-a96606f59ae6.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/profile-fb-1525101720-a96606f59ae6.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
      },
      "instagram_username": "alenoaleno",
      "total_collections": 0,
      "total_likes": 1,
      "total_photos": 21,
      "accepted_tos": true
    }
  },
  {
    "id": "Z_ePCKX_LAo",
    "created_at": "2021-03-01T09:57:44-05:00",
    "updated_at": "2021-03-01T14:09:18-05:00",
    "promoted_at": "2021-03-01T12:50:06-05:00",
    "width": 5304,
    "height": 7952,
    "color": "#262626",
    "blur_hash": "L49sbsoy}Y$*tQMwrWtRFx5,J7b^",
    "description": null,
    "alt_description": "black and red bmw car steering wheel",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1614609953905-baeff400aab3?ixid=MXwyMTEyMDR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1614609953905-baeff400aab3?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=85",
      "regular": "https://images.unsplash.com/photo-1614609953905-baeff400aab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1614609953905-baeff400aab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1614609953905-baeff400aab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/Z_ePCKX_LAo",
      "html": "https://unsplash.com/photos/Z_ePCKX_LAo",
      "download": "https://unsplash.com/photos/Z_ePCKX_LAo/download",
      "download_location": "https://api.unsplash.com/photos/Z_ePCKX_LAo/download"
    },
    "categories": [
      
    ],
    "likes": 154,
    "liked_by_user": false,
    "current_user_collections": [
      
    ],
    "sponsorship": null,
    "user": {
      "id": "Jh1KBGhbWB8",
      "updated_at": "2021-03-02T00:29:18-05:00",
      "username": "zacwolff",
      "name": "Zac Wolff",
      "first_name": "Zac",
      "last_name": "Wolff",
      "twitter_username": "zzacwolff",
      "portfolio_url": "http://instagram.com/zac.wolff",
      "bio": "UX & Product Designer. Biker. Introvert. \r\n...\r\nPlease credit.",
      "location": "Manhattan",
      "links": {
        "self": "https://api.unsplash.com/users/zacwolff",
        "html": "https://unsplash.com/@zacwolff",
        "photos": "https://api.unsplash.com/users/zacwolff/photos",
        "likes": "https://api.unsplash.com/users/zacwolff/likes",
        "portfolio": "https://api.unsplash.com/users/zacwolff/portfolio",
        "following": "https://api.unsplash.com/users/zacwolff/following",
        "followers": "https://api.unsplash.com/users/zacwolff/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1559172461498-0c3ef3c1acce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/profile-1559172461498-0c3ef3c1acce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/profile-1559172461498-0c3ef3c1acce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
      },
      "instagram_username": "zac.wolff",
      "total_collections": 1,
      "total_likes": 7,
      "total_photos": 214,
      "accepted_tos": true
    }
  },
  {
    "id": "d6Eyz_B1PtQ",
    "created_at": "2021-03-01T08:34:23-05:00",
    "updated_at": "2021-03-01T22:18:45-05:00",
    "promoted_at": "2021-03-01T12:49:17-05:00",
    "width": 3214,
    "height": 4821,
    "color": "#262626",
    "blur_hash": "LGAJ.xoL0KRj%MWBM_ofjZRjt7xa",
    "description": null,
    "alt_description": "man in blue denim jacket standing on brown rock near waterfalls during daytime",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1614605512342-596eea464427?ixid=MXwyMTEyMDR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1614605512342-596eea464427?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=85",
      "regular": "https://images.unsplash.com/photo-1614605512342-596eea464427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1614605512342-596eea464427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1614605512342-596eea464427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/d6Eyz_B1PtQ",
      "html": "https://unsplash.com/photos/d6Eyz_B1PtQ",
      "download": "https://unsplash.com/photos/d6Eyz_B1PtQ/download",
      "download_location": "https://api.unsplash.com/photos/d6Eyz_B1PtQ/download"
    },
    "categories": [
      
    ],
    "likes": 107,
    "liked_by_user": false,
    "current_user_collections": [
      
    ],
    "sponsorship": null,
    "user": {
      "id": "4KLBopp73Pg",
      "updated_at": "2021-03-02T00:24:16-05:00",
      "username": "visualsofdana",
      "name": "visualsofdana",
      "first_name": "visualsofdana",
      "last_name": null,
      "twitter_username": null,
      "portfolio_url": "https://www.instagram.com/visualsofdana/?hl=id",
      "bio": "i take photos and film\r\nif you love my work please follow me on instagram to see more  @visualsofdana",
      "location": "bali, indonesia",
      "links": {
        "self": "https://api.unsplash.com/users/visualsofdana",
        "html": "https://unsplash.com/@visualsofdana",
        "photos": "https://api.unsplash.com/users/visualsofdana/photos",
        "likes": "https://api.unsplash.com/users/visualsofdana/likes",
        "portfolio": "https://api.unsplash.com/users/visualsofdana/portfolio",
        "following": "https://api.unsplash.com/users/visualsofdana/following",
        "followers": "https://api.unsplash.com/users/visualsofdana/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-fb-1610815659-c445876cca23.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/profile-fb-1610815659-c445876cca23.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/profile-fb-1610815659-c445876cca23.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
      },
      "instagram_username": "visualsofdana",
      "total_collections": 0,
      "total_likes": 4,
      "total_photos": 220,
      "accepted_tos": true
    }
  },
  {
    "id": "eVy76le4yRY",
    "created_at": "2021-03-01T09:01:48-05:00",
    "updated_at": "2021-03-01T12:18:03-05:00",
    "promoted_at": "2021-03-01T12:06:00-05:00",
    "width": 3995,
    "height": 5993,
    "color": "#f3f3f3",
    "blur_hash": "LxHoLHogIUoe~qofflj[.8fRWBay",
    "description": null,
    "alt_description": "brown and white concrete building near river during daytime",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1614607206234-f7b56bdff6e7?ixid=MXwyMTEyMDR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1614607206234-f7b56bdff6e7?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85",
      "regular": "https://images.unsplash.com/photo-1614607206234-f7b56bdff6e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1614607206234-f7b56bdff6e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1614607206234-f7b56bdff6e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/eVy76le4yRY",
      "html": "https://unsplash.com/photos/eVy76le4yRY",
      "download": "https://unsplash.com/photos/eVy76le4yRY/download",
      "download_location": "https://api.unsplash.com/photos/eVy76le4yRY/download"
    },
    "categories": [
      
    ],
    "likes": 87,
    "liked_by_user": false,
    "current_user_collections": [
      
    ],
    "sponsorship": null,
    "user": {
      "id": "wyxd-2px_Qo",
      "updated_at": "2021-03-02T00:29:22-05:00",
      "username": "maxvdo",
      "name": "Max van den Oetelaar",
      "first_name": "Max",
      "last_name": "van den Oetelaar",
      "twitter_username": null,
      "portfolio_url": "http://www.maxvandenoetelaar.com",
      "bio": "✖️ ✖️ ✖️",
      "location": "Amsterdam, The Netherlands",
      "links": {
        "self": "https://api.unsplash.com/users/maxvdo",
        "html": "https://unsplash.com/@maxvdo",
        "photos": "https://api.unsplash.com/users/maxvdo/photos",
        "likes": "https://api.unsplash.com/users/maxvdo/likes",
        "portfolio": "https://api.unsplash.com/users/maxvdo/portfolio",
        "following": "https://api.unsplash.com/users/maxvdo/following",
        "followers": "https://api.unsplash.com/users/maxvdo/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1600882868165-1e6a7362fa7dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/profile-1600882868165-1e6a7362fa7dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/profile-1600882868165-1e6a7362fa7dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
      },
      "instagram_username": "maxvandenoetelaar",
      "total_collections": 0,
      "total_likes": 93,
      "total_photos": 172,
      "accepted_tos": true
    }
  },
  {
    "id": "l8hdir8d02A",
    "created_at": "2021-03-01T08:39:03-05:00",
    "updated_at": "2021-03-01T21:29:20-05:00",
    "promoted_at": "2021-03-01T10:42:52-05:00",
    "width": 4608,
    "height": 6854,
    "color": "#262626",
    "blur_hash": "LJBpnXNGM{%2_NWBM{WBx]s:WBRj",
    "description": "Walking on bridge in Amsterdam",
    "alt_description": "woman in black coat standing near body of water during daytime",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1614605638098-6f2f3c3cb2e9?ixid=MXwyMTEyMDR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1614605638098-6f2f3c3cb2e9?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85",
      "regular": "https://images.unsplash.com/photo-1614605638098-6f2f3c3cb2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1614605638098-6f2f3c3cb2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1614605638098-6f2f3c3cb2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/l8hdir8d02A",
      "html": "https://unsplash.com/photos/l8hdir8d02A",
      "download": "https://unsplash.com/photos/l8hdir8d02A/download",
      "download_location": "https://api.unsplash.com/photos/l8hdir8d02A/download"
    },
    "categories": [
      
    ],
    "likes": 64,
    "liked_by_user": false,
    "current_user_collections": [
      
    ],
    "sponsorship": null,
    "user": {
      "id": "Mtz0Jum3gmM",
      "updated_at": "2021-03-01T23:34:15-05:00",
      "username": "redcharlie",
      "name": "redcharlie",
      "first_name": "redcharlie",
      "last_name": null,
      "twitter_username": null,
      "portfolio_url": null,
      "bio": "Charl van Rooy | Amsterdam-based creator | Follow me on Instagram for more @redcharlie1",
      "location": "Amsterdam",
      "links": {
        "self": "https://api.unsplash.com/users/redcharlie",
        "html": "https://unsplash.com/@redcharlie",
        "photos": "https://api.unsplash.com/users/redcharlie/photos",
        "likes": "https://api.unsplash.com/users/redcharlie/likes",
        "portfolio": "https://api.unsplash.com/users/redcharlie/portfolio",
        "following": "https://api.unsplash.com/users/redcharlie/following",
        "followers": "https://api.unsplash.com/users/redcharlie/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1551042373726-3ac135be48fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/profile-1551042373726-3ac135be48fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/profile-1551042373726-3ac135be48fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
      },
      "instagram_username": "redcharlie1",
      "total_collections": 0,
      "total_likes": 82,
      "total_photos": 155,
      "accepted_tos": true
    }
  },
  {
    "id": "Ze1s1X_DTXc",
    "created_at": "2021-02-08T19:55:54-05:00",
    "updated_at": "2021-03-01T16:19:17-05:00",
    "promoted_at": null,
    "width": 6000,
    "height": 4000,
    "color": "#a6c0c0",
    "blur_hash": "LPH_f2?ax]t7%LM{RkafD4aKe-WV",
    "description": null,
    "alt_description": "two people sitting on chair in front of Surface devices",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1612832020548-b80943980765?ixid=MXwyMTEyMDR8MXwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1612832020548-b80943980765?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMTEyMDR8MXwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85",
      "regular": "https://images.unsplash.com/photo-1612832020548-b80943980765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MXwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1612832020548-b80943980765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MXwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1612832020548-b80943980765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MXwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/Ze1s1X_DTXc",
      "html": "https://unsplash.com/photos/Ze1s1X_DTXc",
      "download": "https://unsplash.com/photos/Ze1s1X_DTXc/download",
      "download_location": "https://api.unsplash.com/photos/Ze1s1X_DTXc/download"
    },
    "categories": [
      
    ],
    "likes": 32,
    "liked_by_user": false,
    "current_user_collections": [
      
    ],
    "sponsorship": {
      "impression_urls": [
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=8321383&rnd=[timestamp]&gdpr=&gdpr_consent=&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
      ],
      "tagline": "Original by Design",
      "tagline_url": null,
      "sponsor": {
        "id": "N-JSeSTCz68",
        "updated_at": "2021-03-01T23:09:12-05:00",
        "username": "surface",
        "name": "Surface",
        "first_name": "Surface",
        "last_name": null,
        "twitter_username": "surface",
        "portfolio_url": "http://surface.com",
        "bio": "Follow us @Surface. #OriginalByDesign",
        "location": null,
        "links": {
          "self": "https://api.unsplash.com/users/surface",
          "html": "https://unsplash.com/@surface",
          "photos": "https://api.unsplash.com/users/surface/photos",
          "likes": "https://api.unsplash.com/users/surface/likes",
          "portfolio": "https://api.unsplash.com/users/surface/portfolio",
          "following": "https://api.unsplash.com/users/surface/following",
          "followers": "https://api.unsplash.com/users/surface/followers"
        },
        "profile_image": {
          "small": "https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
          "medium": "https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
          "large": "https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
        },
        "instagram_username": "surface",
        "total_collections": 0,
        "total_likes": 0,
        "total_photos": 84,
        "accepted_tos": true
      }
    },
    "user": {
      "id": "N-JSeSTCz68",
      "updated_at": "2021-03-01T23:09:12-05:00",
      "username": "surface",
      "name": "Surface",
      "first_name": "Surface",
      "last_name": null,
      "twitter_username": "surface",
      "portfolio_url": "http://surface.com",
      "bio": "Follow us @Surface. #OriginalByDesign",
      "location": null,
      "links": {
        "self": "https://api.unsplash.com/users/surface",
        "html": "https://unsplash.com/@surface",
        "photos": "https://api.unsplash.com/users/surface/photos",
        "likes": "https://api.unsplash.com/users/surface/likes",
        "portfolio": "https://api.unsplash.com/users/surface/portfolio",
        "following": "https://api.unsplash.com/users/surface/following",
        "followers": "https://api.unsplash.com/users/surface/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
      },
      "instagram_username": "surface",
      "total_collections": 0,
      "total_likes": 0,
      "total_photos": 84,
      "accepted_tos": true
    }
  },
  {
    "id": "YQTxNo3745Y",
    "created_at": "2021-03-01T06:01:02-05:00",
    "updated_at": "2021-03-01T08:46:52-05:00",
    "promoted_at": "2021-03-01T07:45:58-05:00",
    "width": 4000,
    "height": 5578,
    "color": "#f3f3f3",
    "blur_hash": "LcJ7m*.8%1js_N-;t6WCyDbwoJof",
    "description": null,
    "alt_description": "topless man sitting on brown grass field during daytime",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1614595145313-c7e1765be457?ixid=MXwyMTEyMDR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1614595145313-c7e1765be457?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85",
      "regular": "https://images.unsplash.com/photo-1614595145313-c7e1765be457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1614595145313-c7e1765be457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1614595145313-c7e1765be457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/YQTxNo3745Y",
      "html": "https://unsplash.com/photos/YQTxNo3745Y",
      "download": "https://unsplash.com/photos/YQTxNo3745Y/download",
      "download_location": "https://api.unsplash.com/photos/YQTxNo3745Y/download"
    },
    "categories": [
      
    ],
    "likes": 111,
    "liked_by_user": false,
    "current_user_collections": [
      
    ],
    "sponsorship": null,
    "user": {
      "id": "pRDcwTuEVQA",
      "updated_at": "2021-03-02T00:29:23-05:00",
      "username": "dianasimumpande",
      "name": "Diana Simumpande",
      "first_name": "Diana",
      "last_name": "Simumpande",
      "twitter_username": "dianaincolour",
      "portfolio_url": "http://dianasimumpande.com",
      "bio": "A 24-year-old Auckland based photographer and creative.",
      "location": "Auckland NZ",
      "links": {
        "self": "https://api.unsplash.com/users/dianasimumpande",
        "html": "https://unsplash.com/@dianasimumpande",
        "photos": "https://api.unsplash.com/users/dianasimumpande/photos",
        "likes": "https://api.unsplash.com/users/dianasimumpande/likes",
        "portfolio": "https://api.unsplash.com/users/dianasimumpande/portfolio",
        "following": "https://api.unsplash.com/users/dianasimumpande/following",
        "followers": "https://api.unsplash.com/users/dianasimumpande/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1570000444129-6d92d69f61a1image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/profile-1570000444129-6d92d69f61a1image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/profile-1570000444129-6d92d69f61a1image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
      },
      "instagram_username": "diana.sim",
      "total_collections": 0,
      "total_likes": 10,
      "total_photos": 19,
      "accepted_tos": true
    }
  },
  {
    "id": "GSPFjHIx2tE",
    "created_at": "2021-03-01T06:01:02-05:00",
    "updated_at": "2021-03-01T08:46:52-05:00",
    "promoted_at": "2021-03-01T07:45:36-05:00",
    "width": 3698,
    "height": 2769,
    "color": "#262626",
    "blur_hash": "L554mnxa0}EMxus:WBI;S4S2oJ$%",
    "description": null,
    "alt_description": "woman with black hair looking at the moon",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1614595198554-9e8ef1c50171?ixid=MXwyMTEyMDR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1614595198554-9e8ef1c50171?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85",
      "regular": "https://images.unsplash.com/photo-1614595198554-9e8ef1c50171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1614595198554-9e8ef1c50171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1614595198554-9e8ef1c50171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/GSPFjHIx2tE",
      "html": "https://unsplash.com/photos/GSPFjHIx2tE",
      "download": "https://unsplash.com/photos/GSPFjHIx2tE/download",
      "download_location": "https://api.unsplash.com/photos/GSPFjHIx2tE/download"
    },
    "categories": [
      
    ],
    "likes": 98,
    "liked_by_user": false,
    "current_user_collections": [
      
    ],
    "sponsorship": null,
    "user": {
      "id": "pRDcwTuEVQA",
      "updated_at": "2021-03-02T00:29:23-05:00",
      "username": "dianasimumpande",
      "name": "Diana Simumpande",
      "first_name": "Diana",
      "last_name": "Simumpande",
      "twitter_username": "dianaincolour",
      "portfolio_url": "http://dianasimumpande.com",
      "bio": "A 24-year-old Auckland based photographer and creative.",
      "location": "Auckland NZ",
      "links": {
        "self": "https://api.unsplash.com/users/dianasimumpande",
        "html": "https://unsplash.com/@dianasimumpande",
        "photos": "https://api.unsplash.com/users/dianasimumpande/photos",
        "likes": "https://api.unsplash.com/users/dianasimumpande/likes",
        "portfolio": "https://api.unsplash.com/users/dianasimumpande/portfolio",
        "following": "https://api.unsplash.com/users/dianasimumpande/following",
        "followers": "https://api.unsplash.com/users/dianasimumpande/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1570000444129-6d92d69f61a1image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/profile-1570000444129-6d92d69f61a1image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/profile-1570000444129-6d92d69f61a1image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
      },
      "instagram_username": "diana.sim",
      "total_collections": 0,
      "total_likes": 10,
      "total_photos": 19,
      "accepted_tos": true
    }
  },
  {
    "id": "QvTJYfO93-c",
    "created_at": "2021-03-01T06:54:14-05:00",
    "updated_at": "2021-03-01T08:27:37-05:00",
    "promoted_at": "2021-03-01T07:45:34-05:00",
    "width": 4160,
    "height": 6240,
    "color": "#f3f3f3",
    "blur_hash": "LdM%+e~qWXf59FIUxut7E1RPM{kB",
    "description": null,
    "alt_description": "white and gray ceramic tiles",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1614598632980-35ee54daa5b9?ixid=MXwyMTEyMDR8MHwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1614598632980-35ee54daa5b9?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85",
      "regular": "https://images.unsplash.com/photo-1614598632980-35ee54daa5b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1614598632980-35ee54daa5b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1614598632980-35ee54daa5b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/QvTJYfO93-c",
      "html": "https://unsplash.com/photos/QvTJYfO93-c",
      "download": "https://unsplash.com/photos/QvTJYfO93-c/download",
      "download_location": "https://api.unsplash.com/photos/QvTJYfO93-c/download"
    },
    "categories": [
      
    ],
    "likes": 143,
    "liked_by_user": false,
    "current_user_collections": [
      
    ],
    "sponsorship": null,
    "user": {
      "id": "wZ-KG9UsM6U",
      "updated_at": "2021-03-02T00:14:23-05:00",
      "username": "grantritchie",
      "name": "Grant Ritchie",
      "first_name": "Grant",
      "last_name": "Ritchie",
      "twitter_username": "Grantritchie",
      "portfolio_url": "http://instagram.com/grantritchie",
      "bio": "Photographer and Creative Director at @studioyoke (www.studioyoke.co.uk)\r\n\r\n",
      "location": "Nottingham ",
      "links": {
        "self": "https://api.unsplash.com/users/grantritchie",
        "html": "https://unsplash.com/@grantritchie",
        "photos": "https://api.unsplash.com/users/grantritchie/photos",
        "likes": "https://api.unsplash.com/users/grantritchie/likes",
        "portfolio": "https://api.unsplash.com/users/grantritchie/portfolio",
        "following": "https://api.unsplash.com/users/grantritchie/following",
        "followers": "https://api.unsplash.com/users/grantritchie/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1533291089444-71342a1230fd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/profile-1533291089444-71342a1230fd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/profile-1533291089444-71342a1230fd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
      },
      "instagram_username": "grantritchie ",
      "total_collections": 3,
      "total_likes": 91,
      "total_photos": 59,
      "accepted_tos": true
    }
  },
  {
    "id": "WtPs6YNmXDg",
    "created_at": "2021-03-01T05:49:24-05:00",
    "updated_at": "2021-03-01T08:46:52-05:00",
    "promoted_at": "2021-03-01T07:45:19-05:00",
    "width": 2369,
    "height": 3552,
    "color": "#d9d9d9",
    "blur_hash": "LiKUNDM{Xmxu4TxaW=Rj4.s:VrR*",
    "description": null,
    "alt_description": "white and orange labeled carton beside white ceramic mug",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1614595579437-c43574854ecf?ixid=MXwyMTEyMDR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1614595579437-c43574854ecf?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=85",
      "regular": "https://images.unsplash.com/photo-1614595579437-c43574854ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1614595579437-c43574854ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1614595579437-c43574854ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTEyMDR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/WtPs6YNmXDg",
      "html": "https://unsplash.com/photos/WtPs6YNmXDg",
      "download": "https://unsplash.com/photos/WtPs6YNmXDg/download",
      "download_location": "https://api.unsplash.com/photos/WtPs6YNmXDg/download"
    },
    "categories": [
      
    ],
    "likes": 61,
    "liked_by_user": false,
    "current_user_collections": [
      
    ],
    "sponsorship": null,
    "user": {
      "id": "X7mUIQNmTbs",
      "updated_at": "2021-03-02T00:29:22-05:00",
      "username": "jens_johnsson",
      "name": "Jens Johnsson",
      "first_name": "Jens",
      "last_name": "Johnsson",
      "twitter_username": null,
      "portfolio_url": "http://instagram.com/jens_johnsson",
      "bio": "Hello! I'm a freelancing Art Director sharing some perhaps useful snapshots from my life. I shoot it all on film with my dads old Canon 650. 📸🎞\r\n\r\nBusiness inquiries: contact@jensjohnsson.se",
      "location": "Stockholm, Sweden",
      "links": {
        "self": "https://api.unsplash.com/users/jens_johnsson",
        "html": "https://unsplash.com/@jens_johnsson",
        "photos": "https://api.unsplash.com/users/jens_johnsson/photos",
        "likes": "https://api.unsplash.com/users/jens_johnsson/likes",
        "portfolio": "https://api.unsplash.com/users/jens_johnsson/portfolio",
        "following": "https://api.unsplash.com/users/jens_johnsson/following",
        "followers": "https://api.unsplash.com/users/jens_johnsson/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1527713378527-de021fb84cdf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/profile-1527713378527-de021fb84cdf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/profile-1527713378527-de021fb84cdf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
      },
      "instagram_username": "jens_johnsson",
      "total_collections": 10,
      "total_likes": 34,
      "total_photos": 115,
      "accepted_tos": true
    }
  }
]
  
const ImageList = () => {
  // const [photos, setPhotos] = useState([])
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])

  const pageNumber = 1
  useEffect(() => {
      // fetch(`${singlePagePhotos}&page=${pageNumber}&per_page=50`).then((res) => res.json()).then(data => setPhotos(data))
  }, [])
  
  const handleChange = (event) => {
      setInput(event.target.value)
  }

  const handleKeyPressed= (event) => {
      setResults([])
      if(input) {
        fetch(`${searchPhotos}&page=1&query=${input}&per_page=50`).then((res) => res.json()).then(data => setResults(data.results))
      }
  }

  return (
    <>
      <div className="search-container">
        <input 
          value={input} 
          type='text' 
          placeholder='Search'
          onChange={handleChange}
          onKeyUp={handleKeyPressed}
          className='search-input' />
      </div>
      <div className='imagelist-container'>
      {
        input ?
        (
          results.map((data) => <Image image={data.urls} user={data.user} alt={data.alt_description}/>)
        ):
        (
          photos.map((data) => <Image image={data.urls} user={data.user} alt={data.alt_description}/>)
        )
    }
      </div>
    </>
  )
}

export default ImageList
