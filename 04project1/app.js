import react from "react";
import reactDOM from "react-dom/client";

/*
              Header
                    - Logo
                    - Navitems
                    - Cart
              Body
                    - Search
                    - ReastaurantList
                         - Restaurant card
                         - image
                         - name
                         - rarting
                         - cousine
              Footer
                    - links
                    - copyrights

            */

const Title = () => {
     return (
          <a href="/">
               <img alt="logo" id="logo" src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" />
          </a>
     );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
          <ul>
                 <li>HOME</li>
                 <li>ABOUT</li>
                 <li>CONTACT</li>
                 <li>Cart</li>
          </ul>
      </div>
    </div>
  );
};

//!       CONFIG DRIVEN UI
const config = [
     {
          "card": {
               "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                         "id": "30494",
                         "name": "Oudh 1590",
                         "cloudinaryImageId": "lb27nnauoh3fzalwczjd",
                         "locality": "Southern Avenue",
                         "areaName": "Southern Avenue",
                         "costForTwo": "₹1000 for two",
                         "cuisines": [
                              "Biryani",
                              "Mughlai",
                              "North Indian",
                              "Awadhi",
                              "Kebabs",
                              "Lucknowi"
                         ],
                         "avgRating": 4.3,
                         "parentId": "686",
                         "avgRatingString": "4.3",
                         "totalRatingsString": "10K+",
                         "promoted": true,
                         "adTrackingId": "cid=13615581~p=0~adgrpid=13615581#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30494~eid=ad963a95-de04-4603-8c68-3743db16118d~srvts=1716021794455~collid=83649",
                         "sla": {
                              "deliveryTime": 40,
                              "lastMileTravel": 3,
                              "serviceability": "SERVICEABLE",
                              "slaString": "40-45 mins",
                              "lastMileTravelString": "3.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                         },
                         "availability": {
                              "nextCloseTime": "2024-05-18 23:00:00",
                              "opened": true
                         },
                         "badges": {
                              "imageBadges": [
                                   {
                                        "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                        "description": "Delivery!"
                                   },
                                   {
                                        "imageId": "newg.png",
                                        "description": "Gourmet"
                                   }
                              ]
                         },
                         "isOpen": true,
                         "type": "F",
                         "badgesV2": {
                              "entityBadges": {
                                   "textExtendedBadges": {},
                                   "textBased": {},
                                   "imageBased": {
                                        "badgeObject": [
                                             {
                                                  "attributes": {
                                                       "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                                       "description": "Delivery!"
                                                  }
                                             },
                                             {
                                                  "attributes": {
                                                       "imageId": "newg.png",
                                                       "description": "Gourmet"
                                                  }
                                             }
                                        ]
                                   }
                              }
                         },
                         "aggregatedDiscountInfoV3": {
                              "header": "50% OFF",
                              "subHeader": "UPTO ₹100"
                         },
                         "orderabilityCommunication": {
                              "title": {},
                              "subTitle": {},
                              "message": {},
                              "customIcon": {}
                         },
                         "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                   "lottie": {},
                                   "video": {}
                              }
                         },
                         "reviewsSummary": {},
                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                         "restaurantOfferPresentationInfo": {},
                         "externalRatings": {
                              "aggregatedRating": {
                                   "rating": "4.3",
                                   "ratingCount": "5K+"
                              },
                              "source": "GOOGLE",
                              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                         },
                         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {},
                    "cta": {
                         "link": "swiggy://menu?restaurant_id=30494&source=collection&query=Biryani",
                         "text": "RESTAURANT_MENU",
                         "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
               },
               "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
               }
          }
     },

     {
          "card": {
               "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                         "id": "25133",
                         "name": "Biryanishk by The Biryani Company",
                         "cloudinaryImageId": "e8efa0601a5d8518a963238a496284a1",
                         "locality": "Near Mudiali",
                         "areaName": "Kalighat",
                         "costForTwo": "₹700 for two",
                         "cuisines": [
                              "Indian",
                              "Biryani"
                         ],
                         "avgRating": 4.4,
                         "parentId": "7327",
                         "avgRatingString": "4.4",
                         "totalRatingsString": "5K+",
                         "promoted": true,
                         "adTrackingId": "cid=13026928~p=4~adgrpid=13026928#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=25133~eid=e15e01c9-877a-4498-80e7-93056db26765~srvts=1716021794455~collid=83649",
                         "sla": {
                              "deliveryTime": 45,
                              "lastMileTravel": 4.4,
                              "serviceability": "SERVICEABLE",
                              "slaString": "45-50 mins",
                              "lastMileTravelString": "4.4 km",
                              "iconType": "ICON_TYPE_EMPTY"
                         },
                         "availability": {
                              "nextCloseTime": "2024-05-18 22:30:00",
                              "opened": true
                         },
                         "badges": {},
                         "isOpen": true,
                         "aggregatedDiscountInfoV2": {},
                         "type": "F",
                         "badgesV2": {
                              "entityBadges": {
                                   "textBased": {},
                                   "imageBased": {},
                                   "textExtendedBadges": {}
                              }
                         },
                         "orderabilityCommunication": {
                              "title": {},
                              "subTitle": {},
                              "message": {},
                              "customIcon": {}
                         },
                         "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                   "lottie": {},
                                   "video": {}
                              }
                         },
                         "reviewsSummary": {},
                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                         "restaurantOfferPresentationInfo": {},
                         "externalRatings": {
                              "aggregatedRating": {
                                   "rating": "--"
                              }
                         },
                         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {},
                    "cta": {
                         "link": "swiggy://menu?restaurant_id=25133&source=collection&query=Biryani",
                         "text": "RESTAURANT_MENU",
                         "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
               },
               "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
               }
          }
     },

     {
          "card": {
               "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                         "id": "202182",
                         "name": "Adil Biryani Restaurant",
                         "cloudinaryImageId": "fwjab7gwqdo39vqvtfvo",
                         "locality": "Park Circus",
                         "areaName": "Park Circus",
                         "costForTwo": "₹300 for two",
                         "cuisines": [
                              "Biryani",
                              "Kebabs",
                              "Mughlai"
                         ],
                         "avgRating": 4.3,
                         "parentId": "18636",
                         "avgRatingString": "4.3",
                         "totalRatingsString": "1K+",
                         "promoted": true,
                         "adTrackingId": "cid=13563155~p=5~adgrpid=13563155#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=202182~eid=7a7893ce-b49f-4bb8-bf2b-0067ce12cc61~srvts=1716021794455~collid=83649",
                         "sla": {
                              "deliveryTime": 43,
                              "lastMileTravel": 4.2,
                              "serviceability": "SERVICEABLE",
                              "slaString": "40-45 mins",
                              "lastMileTravelString": "4.2 km",
                              "iconType": "ICON_TYPE_EMPTY"
                         },
                         "availability": {
                              "nextCloseTime": "2024-05-18 23:59:00",
                              "opened": true
                         },
                         "badges": {},
                         "isOpen": true,
                         "aggregatedDiscountInfoV2": {},
                         "type": "F",
                         "badgesV2": {
                              "entityBadges": {
                                   "textBased": {},
                                   "imageBased": {},
                                   "textExtendedBadges": {}
                              }
                         },
                         "orderabilityCommunication": {
                              "title": {},
                              "subTitle": {},
                              "message": {},
                              "customIcon": {}
                         },
                         "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                   "lottie": {},
                                   "video": {}
                              }
                         },
                         "reviewsSummary": {},
                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                         "restaurantOfferPresentationInfo": {},
                         "externalRatings": {
                              "aggregatedRating": {
                                   "rating": "4.5",
                                   "ratingCount": "20+"
                              },
                              "source": "GOOGLE",
                              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                         },
                         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {},
                    "cta": {
                         "link": "swiggy://menu?restaurant_id=202182&source=collection&query=Biryani",
                         "text": "RESTAURANT_MENU",
                         "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
               },
               "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
               }
          }
     },

     {
          "card": {
               "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                         "id": "317711",
                         "name": "Kabuliwala",
                         "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/12/ef04b804-a424-4f4e-8d4d-6e7912a52635_5c48c5fe-ddd7-46d1-9980-42c79ffd39ba.jpg",
                         "locality": "Santoshpur",
                         "areaName": "Selimpur",
                         "costForTwo": "₹400 for two",
                         "cuisines": [
                              "Biryani",
                              "Mughlai",
                              "Kebabs",
                              "Indian",
                              "Desserts"
                         ],
                         "avgRating": 4.1,
                         "parentId": "5547",
                         "avgRatingString": "4.1",
                         "totalRatingsString": "5K+",
                         "promoted": true,
                         "adTrackingId": "cid=13079267~p=8~adgrpid=13079267#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=317711~eid=925b6adb-fbac-4ec9-af69-a84a599855c5~srvts=1716021794455~collid=83649",
                         "sla": {
                              "deliveryTime": 38,
                              "lastMileTravel": 3,
                              "serviceability": "SERVICEABLE",
                              "slaString": "35-40 mins",
                              "lastMileTravelString": "3.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                         },
                         "availability": {
                              "nextCloseTime": "2024-05-18 23:50:00",
                              "opened": true
                         },
                         "badges": {},
                         "isOpen": true,
                         "type": "F",
                         "badgesV2": {
                              "entityBadges": {
                                   "textBased": {},
                                   "imageBased": {},
                                   "textExtendedBadges": {}
                              }
                         },
                         "aggregatedDiscountInfoV3": {
                              "header": "₹125 OFF",
                              "subHeader": "ABOVE ₹249",
                              "discountTag": "FLAT DEAL"
                         },
                         "orderabilityCommunication": {
                              "title": {},
                              "subTitle": {},
                              "message": {},
                              "customIcon": {}
                         },
                         "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                   "lottie": {},
                                   "video": {}
                              }
                         },
                         "reviewsSummary": {},
                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                         "restaurantOfferPresentationInfo": {},
                         "externalRatings": {
                              "aggregatedRating": {
                                   "rating": "--"
                              }
                         },
                         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {},
                    "cta": {
                         "link": "swiggy://menu?restaurant_id=317711&source=collection&query=Biryani",
                         "text": "RESTAURANT_MENU",
                         "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
               },
               "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
               }
          }
     },

     {
          "card": {
               "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                         "id": "13033",
                         "name": "Royal Indian - Since 1905",
                         "cloudinaryImageId": "gwm7m6m552pxfuoaley5",
                         "locality": "Park Circus",
                         "areaName": "Park Circus",
                         "costForTwo": "₹500 for two",
                         "cuisines": [
                              "Biryani",
                              "Mughlai",
                              "Kebabs",
                              "North Indian"
                         ],
                         "avgRating": 4.5,
                         "parentId": "519349",
                         "avgRatingString": "4.5",
                         "totalRatingsString": "10K+",
                         "promoted": true,
                         "adTrackingId": "cid=13552652~p=10~adgrpid=13552652#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=13033~eid=10ee3129-8d74-4fad-828a-fd713a1ba5bc~srvts=1716021794455~collid=83649",
                         "sla": {
                              "deliveryTime": 45,
                              "lastMileTravel": 4.2,
                              "serviceability": "SERVICEABLE",
                              "slaString": "45-50 mins",
                              "lastMileTravelString": "4.2 km",
                              "iconType": "ICON_TYPE_EMPTY"
                         },
                         "availability": {
                              "nextCloseTime": "2024-05-19 02:00:00",
                              "opened": true
                         },
                         "badges": {},
                         "isOpen": true,
                         "type": "F",
                         "badgesV2": {
                              "entityBadges": {
                                   "textBased": {},
                                   "imageBased": {},
                                   "textExtendedBadges": {}
                              }
                         },
                         "aggregatedDiscountInfoV3": {
                              "header": "10% OFF",
                              "subHeader": "UPTO ₹40"
                         },
                         "orderabilityCommunication": {
                              "title": {},
                              "subTitle": {},
                              "message": {},
                              "customIcon": {}
                         },
                         "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                   "lottie": {},
                                   "video": {}
                              }
                         },
                         "reviewsSummary": {},
                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                         "restaurantOfferPresentationInfo": {},
                         "externalRatings": {
                              "aggregatedRating": {
                                   "rating": "4.2",
                                   "ratingCount": "5K+"
                              },
                              "source": "GOOGLE",
                              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                         },
                         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {},
                    "cta": {
                         "link": "swiggy://menu?restaurant_id=13033&source=collection&query=Biryani",
                         "text": "RESTAURANT_MENU",
                         "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
               },
               "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
               }
          }
     },
     
     {
          "card": {
               "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                         "id": "94438",
                         "name": "Adil Biryani Centre",
                         "cloudinaryImageId": "c8mk6ykomsw9u45g9u8s",
                         "locality": "Park Circus",
                         "areaName": "Central Kolkata",
                         "costForTwo": "₹200 for two",
                         "cuisines": [
                              "Biryani"
                         ],
                         "avgRating": 4.3,
                         "parentId": "27122",
                         "avgRatingString": "4.3",
                         "totalRatingsString": "10K+",
                         "sla": {
                              "deliveryTime": 41,
                              "lastMileTravel": 3,
                              "serviceability": "SERVICEABLE",
                              "slaString": "40-45 mins",
                              "lastMileTravelString": "3.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                         },
                         "availability": {
                              "nextCloseTime": "2024-05-18 23:59:00",
                              "opened": true
                         },
                         "badges": {},
                         "isOpen": true,
                         "type": "F",
                         "badgesV2": {
                              "entityBadges": {
                                   "textBased": {},
                                   "imageBased": {},
                                   "textExtendedBadges": {}
                              }
                         },
                         "aggregatedDiscountInfoV3": {
                              "header": "20% OFF",
                              "subHeader": "UPTO ₹50"
                         },
                         "orderabilityCommunication": {
                              "title": {},
                              "subTitle": {},
                              "message": {},
                              "customIcon": {}
                         },
                         "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                   "lottie": {},
                                   "video": {}
                              }
                         },
                         "reviewsSummary": {},
                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                         "restaurantOfferPresentationInfo": {},
                         "externalRatings": {
                              "aggregatedRating": {
                                   "rating": "4.1",
                                   "ratingCount": "1K+"
                              },
                              "source": "GOOGLE",
                              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                         },
                         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {},
                    "cta": {
                         "link": "swiggy://menu?restaurant_id=94438&source=collection&query=Biryani",
                         "text": "RESTAURANT_MENU",
                         "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
               },
               "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
               }
          }
     }
];


const reastaurantList = [
     {
          name: "Burger King",
          rating: "4.5",
          cousine: ["Indian", "Chinese", "Continental"],
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
     },
     {
          name: "Burger King",
          rating: "4.5",
          cousine: ["Indian", "Chinese", "Continental"],
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
     },
     {
          name: "Burger King",
          rating: "4.5",
          cousine: ["Indian", "Chinese", "Continental"],
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
     },
     {
          name: "Burger King",
          rating: "4.5",
          cousine: ["Indian", "Chinese", "Continental"],
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
     },
     {
          name: "Burger King",
          rating: "4.5",
          cousine: ["Indian", "Chinese", "Continental"],
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
     },
     {
          name: "Burger King",
          rating: "4.5",
          cousine: ["Indian", "Chinese", "Continental"],
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
     },
];

const burgerKing = {
     name: "Burger King",
     rating: "4.5",
     cousine: ["Indian", "Chinese", "Continental"],
     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
};

const i=2;
const Card = ({cloudinaryImageId, name, avgRatingString, cuisines, id})=>{
     // const {cloudinaryImageId, name, avgRatingString, cuisines} = restaurant;
     console.log(id);
     return (
          <div className="card">
               <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
               <h2>{name}</h2>
               <p>{avgRatingString} Stars</p>
               <p>{cuisines.join(" ")}</p>
          </div>
     );
}



const Body = () => {
     return (
        <div className="restaurant-list">
          {
               config.map((restaurant)=>{
                    return <Card {...restaurant.card.card.info} key={restaurant.card.card.info.id} id={restaurant.card.card.info.id}/>
               })
          }
        </div>
     );
}

const Footer = ()=>{
     return (<p>Footer</p>);
}

const AppLayout = () => {
  return (
     <>
     <HeaderComponent />
     <Body />
     <Footer />
     </>
);
};

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
