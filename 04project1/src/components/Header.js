export const Title = () => {
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

export default HeaderComponent;