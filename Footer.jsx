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
     <a href="#"><img src="https://www.shareicon.net/data/128x128/2015/09/20/643708_book_512x512.png" alt="book" /></a>
        <a href="#"><img src="https://www.shareicon.net/data/128x128/2015/08/10/82853_reddit_4096x4096.png" alt="reddit" /></a>
        <a href="#"><img src="https://www.shareicon.net/data/128x128/2016/01/14/702922_globe_512x512.png" alt="globe" /></a>
      
    </div>
    </footer>
  );
}
