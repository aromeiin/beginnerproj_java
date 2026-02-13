export const Footer = () => {
  return (
    <footer>
     <div clasName="list">
      <ul className="first-list">
       <li><a href="/about">About</a></li>
       <li><a href="/support">Support</a></li>
      </ul>
      <ul className="second-list">
       <li><a href="/preview">Preview</a></li>
       <li><a href="https://www.reddit.com" >Reddit</a></li>
      </ul>
      <ul className="third-list">
       <li><a href="/terms">Terms & Conditions</a></li>
       <li><a href="/privacy">Privacy Policy</a></li>
      </ul>
     </div>
     <p className="copyright">© 2026 All Rights Reserved.</p>
     <div className="icons">
     <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/500px-Icon-round-Question_mark.svg.png" alt="question mark" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/3916/3916611.png" alt="email" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/5070/5070407.png" alt="phone number" /></a>
      
    </div>
    </footer>
  );
}
