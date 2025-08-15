<template>
  <div class="headerTop container">
    <div class="row">
      <div class="col-logo">
        <div class="logo-box">
          <img class="logo-img" src="@/assets/roop-polymer-logo.png" alt="Roop Polymers Ltd." />
          <span class="company-name">Perfect Plastic LTD.</span>
        </div>
      </div>
      <div class="col-contact">
        <ul class="header-contact">
          <li>
            <span>CALL US</span>
            <div class="contact-value">+91 124 461 0801</div>
          </li>
          <li>
            <span>EMAIL US</span>
            <div class="contact-value">sales@rooppolymers.com</div>
          </li>
          <li>
            <span>CIN NO.</span>
            <div class="contact-value">U18101DL1996PLC079003</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="headerBottom">
    <div class="container">
      <div class="menu-main-menu-container">
        <ul id="menu-main-menu-1" class="menu">
          <li
            class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-50">
            <a>About</a>
            <ul class="sub-menu">
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                <router-link to="/about/overview">An Overview</router-link>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-43 current-menu-item">
                <router-link to="/about/group" class="active">Roop Group</router-link>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-45">
                <router-link to="/about/our-strengths">Our Strengths</router-link>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46">
                <router-link to="/about/milestones">Milestones</router-link>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47">
                <router-link to="/about/accolades">Accolades</router-link>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48">
                <router-link to="/about/global-presence">Global Presence</router-link>
              </li>
            </ul>
          </li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-69">
            <a>Products</a>
            <ul class="sub-menu">
              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-370">
                <a href="https://rooppolymers.com/automotive/two-wheeler/">Automotive</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-70">
                <a href="https://rooppolymers.com/non-automotive/">Non-Automotive</a>
              </li>
            </ul>
          </li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-108">
            <a>Manufacturing</a>
            <ul class="sub-menu">
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-109">
                <a href="https://rooppolymers.com/manufacturing/rubber-molding/">Rubber Molding</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-110">
                <a href="https://rooppolymers.com/manufacturing/rubber-extrusion/">Rubber Extrusion</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-111">
                <a href="https://rooppolymers.com/manufacturing/rubber-hoses/">Rubber Hoses</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-112">
                <a href="https://rooppolymers.com/manufacturing/plastic-molding/">Plastic Molding</a>
              </li>
            </ul>
          </li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-170">
            <a>Product Development</a>
            <ul class="sub-menu">
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-177">
                <a href="https://rooppolymers.com/quality/">Quality</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-178">
                <a href="https://rooppolymers.com/rd-and-testing/">R&amp;D and Testing</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-180">
                <a href="https://rooppolymers.com/design-and-tool-room/">Design and Tool Room</a>
              </li>
            </ul>
          </li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-54">
            <a href="https://rooppolymers.com/clients/">Clients</a>
            <ul class="sub-menu">
              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-313">
                <a target="_blank" href="https://rooppolymers.com/clients/">Our Clients</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-312">
                <a href="https://rooppolymers.com/clients/alliances/">Alliances</a>
              </li>
            </ul>
          </li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-113">
            <a href="https://rooppolymers.com/manufacturing/manufacturing-locations/">Locations</a>
          </li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
            <a href="https://rooppolymers.com/csr/">CSR</a>
          </li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-647">
            <a href="http://careers.rooppolymers.com/">Career</a>
          </li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58">
            <a href="https://rooppolymers.com/contact-us/">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <section class="inner-banner d-flex align-items-center"
    style="background-image:url(https://rooppolymers.com/wp-content/uploads/2018/07/Strengths-1.jpg);">
    <div class="container">
      <div class="inner-banner-info">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li class="active">About</li>
        </ul>
        <h2>Our Strengths</h2>
        <p></p>
        <p>What sets us apart in this competitive world</p>
        <p></p>
      </div>
    </div>
  </section>
  <div class="strength-page">
    <div class="container">
      <div class="strength-wrapper">
        <div class="strength-info">
          <ul>
            <li>Possess more than 45 years of experience in Rubber Auto parts manufacturing</li>
            <li>Offer complete solutions in Rubber &amp; Plastic Processing Technologies i.e. Injection, Compression,
              Transfer Moulding and Extrusion processes</li>
            <li>7 state-of-the-art manufacturing units at geographically diverse locations</li>
            <li>IATF 16949 : 2016, ISO 14001 and OHSAS 18001 certified Plant</li>
            <li>Single window contact point for all our customers available 24×7 for customer support</li>
            <li>A well experienced product development team with deep understanding of the most intricate products
            </li>
            <li>Centralized Rubber Compounding facilities for unparallel economies and consistency.</li>
            <li>Complete In house Testing facilities and a well equipped tool room with latest technology machines and
              software</li>
          </ul>
        </div>
        <div class="strength-img">
          <div class="strength-placeholder"></div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footerArea">
    <div class="container">
      <div class="footertop">
        <div class="row">
          <div class="col-sm-3 col-md-3 col-lg-3">
            <div class="footer-widget">
              <h4>INFORMATION</h4>
              <div class="footer-links">
                <router-link to="/about/overview">OVERVIEW</router-link>
                <a href="https://rooppolymers.com/manufacturing/rubber-molding/">MANUFACTURING</a>
                <a href="https://rooppolymers.com/rd-and-testing/">R&D AND TESTING</a>
                <a href="https://rooppolymers.com/clients/">CLIENTS</a>
                <a href="https://rooppolymers.com/csr/">CSR</a>
                <a target="_blank" href="http://careers.rooppolymers.com/">CAREER</a>
                <a href="https://rooppolymers.com/contact-us/">CONTACT US</a>
                <a href="https://rooppolymers.com/policies/">POLICIES</a>
                <a href="https://rooppolymers.com/annual-return/">ANNUAL RETURN</a>
                <a href="https://rooppolymers.com/notice/">NOTICE</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3 col-md-3 col-lg-3" style="margin-bottom: 15rem;">
            <div class="footer-widget">
              <h4>PRODUCTS</h4>
              <div class="footer-links">
                <a href="https://rooppolymers.com/automotive/two-wheeler/">Automotive</a>
                <a href="https://rooppolymers.com/non-automotive/">Non-Automotive</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3 col-md-3 col-lg-3" style="margin-bottom: 11rem;">
            <div class="footer-info">
              <h4>GET IN TOUCH</h4>
              <div class="contact-info">
                <p>Plot No. 30, Sector-3, IMT Manesar,</p>
                <p>Gurgaon, Haryana - 122 002 (India)</p>
                <p>+91 124 461 0801, +91 124 461 0899</p>
                <p>sales@rooppolymers.com</p>
              </div>
            </div>
          </div>
          <div class="col-sm-3 col-md-3 col-lg-3" style="margin-bottom: 13rem;">
            <div class="footer-contact">
              <h4>STAY CONNECTED</h4>
              <p>We're confident we've provided all the best for you. Stay connected</p>
              <div class="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100063884359007" target="_blank">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/rooppolymers/" target="_blank">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/roop-polymers-ltd/" target="_blank">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="row">
          <div class="col-sm-4">
            <p>Roop Polymers Limited © 2025. All Rights Reserved.</p>
          </div>
          <div class="col-sm-4 text-center">
            <p><a href="https://rooppolymers.com/privacy-policy/">Privacy Policy</a> | <a
                href="https://rooppolymers.com/terms-conditions/">Terms &amp; Conditions</a> | <a href="#.">Sitemap</a>
            </p>
          </div>
          <div class="col-sm-4 text-right">
            <p>Design &amp; Developed by <a href="http://abacusdesk.com" target="_blank">Abacus desk</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import overviewImage from '@/assets/overview.jpg'
import aboutImage from '@/assets/about-img.jpg'
import missionImage from '@/assets/mission-img.jpg'

export default {
  name: 'AboutRoopGroup',
  data() {
    return {
      overviewImage: overviewImage,
      aboutImage: aboutImage,
      missionImage: missionImage
    }
  }
}
</script>

<style scoped>
.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
@media (min-width: 992px) {
    .col-lg-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .strength-page .col-lg-8 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    .strength-page .col-lg-4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
}
ul {
    list-style-type: none;
    margin: 0;
}
.strength-page .strength-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    max-width: 1400px;
    margin: 0 auto;
}

.strength-page .strength-info {
    flex: 2;
    padding: 40px;
    /* background: #fff; */
    border-radius: 8px;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
}

.strength-page .strength-img {
    flex: 1;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}





.strength-page .strength-info ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.strength-page .strength-info ul li {
    font-size: 15px;
    line-height: 1.6;
    color: #333333;
    margin-bottom: 20px;
    position: relative;
    padding-left: 25px;
    display: flex;
}

.strength-page .strength-info ul li:before {
    content: ">";
    position: absolute;
    left: 0;
    top: 0;
    color: #666;
    font-weight: bold;
    font-size: 16px;
}
.strength-page {
    width: 100%;
    float: left;
    padding: 80px 0;
    background: #dfe0e4;
}



.strength-page .strength-img img {
    height: 22rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.group-page .group-block {
  width: 77%;
  float: left;
  background: #fff;
  padding: 44px 38px;
  margin-bottom: 40px;
  margin-left: 11rem;
  text-align: justify;
}

.group-page .group-block h2 {
  margin: 0 0 24px 0;
  font-size: 30px;
  color: #0073ba;
  letter-spacing: 1px;
  font-family: 'DINPro-Light', sans-serif;
  text-transform: uppercase;
  font-weight: 100;
  display: -webkit-box;
}

.group-page .group-block p:last-child {
  margin-bottom: 0;
}

.group-page .group-block p {
  font-size: 15px;
  line-height: 1.8;
  color: #333333;
  margin-bottom: 20px;
  text-align: justify;
  text-justify: inter-word;
}

.group-page {
  width: 100%;
  float: left;
  padding: 80px 0 40px;
  background: #dfe0e4;
}

@media (min-width: 992px) {
  .col-lg-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/* Header and Navigation Styles */
.footerArea {
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #e5e5e5;
  position: relative;
  z-index: 1;
  clear: both;
  display: block;
}

.footertop {
  width: 100%;
  padding: 60px 0 40px;
  display: block;
}

.footerArea .container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 24px;
}

.footerArea .row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.footerArea .col-sm-3,
.footerArea .col-md-3,
.footerArea .col-lg-3 {
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 15px;
  margin-bottom: 20px;
}

.footer-widget h4,
.footer-info h4,
.footer-contact h4 {
  color: #333;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Montserrat', Arial, sans-serif;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-links a {
  color: #666;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.4;
  transition: color 0.3s ease;
  font-family: 'Montserrat', Arial, sans-serif;
}

.footer-links a:hover,
.footer-links a.active {
  color: #0073ba;
}

.footer-links a.active {
  text-decoration: underline;
  text-decoration-color: #0073ba;
}

.contact-info p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 8px;
  font-family: 'Montserrat', Arial, sans-serif;
}

.footer-contact p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
  font-family: 'Montserrat', Arial, sans-serif;
}

.social-icons {
  display: inline-flex;
  gap: 12px;
}

.social-icons a {
  display: inline-block;
  width: 32px;
  height: 32px;
  background: #f5f5f5;
  border-radius: 50%;
  text-align: center;
  line-height: 32px;
  color: #999;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icons a:hover {
  background: #0073ba;
  color: white;
}

.social-icons i {
  font-size: 14px;
}

.copyright {
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #e5e5e5;
  background: #f8f8f8;
  display: block;
  clear: both;
}

.copyright .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.copyright .col-sm-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding: 0 15px;
}

.copyright .text-center {
  text-align: center;
}

.copyright .text-right {
  text-align: right;
}

.copyright p {
  margin: 0;
  font-size: 12px;
  color: #666;
  line-height: 1.5;
  font-family: 'Montserrat', Arial, sans-serif;
}

.copyright a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.copyright a:hover {
  color: #0073ba;
}

/* About Page Styles */
.about-page h4 {
  margin: 0 auto 50px;
  font-size: 24px;
  color: #0073ba;
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.about-page {
  width: 100%;
  float: left;
  padding: 80px 0;
  background: #dfe0e4;
}

.about-page .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.about-page .row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.about-page .col-sm-6,
.about-page .col-md-6,
.about-page .col-lg-6 {
  padding: 0 20px;
  margin-bottom: 60px;
}

.about-page .col-sm-9,
.about-page .col-md-9,
.about-page .col-lg-9,
.about-page .col-sm-3,
.about-page .col-md-3,
.about-page .col-lg-3 {
  padding: 0 20px;
  margin-bottom: 40px;
}

.about-page .col-sm-6,
.about-page .col-md-6,
.about-page .col-lg-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.about-page .col-sm-9,
.about-page .col-md-9,
.about-page .col-lg-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.about-page .col-sm-3,
.about-page .col-md-3,
.about-page .col-lg-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.about-img img {
  width: 92%;
  height: 33rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 0;
  margin-left: 31px;
}

.about-text h3 {
  color: #0073ba;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-text p {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
  text-align: justify;
}

.mission-block .mission-text h2 {
  margin: 0 0 24px 0;
  font-size: 30px;
  color: #0073ba;
  letter-spacing: 1px;
  font-family: 'DINPro-Light', sans-serif;
  text-transform: uppercase;
  margin-bottom: 1rem;
  margin-right: 12rem;
  font-weight: 100;
}

.mission-block {
  display: flex;
  align-items: center;
  background: white;
  padding: 40px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  height: 19rem;
  width: 56rem;
  margin-left: 2rem;
}

.mission-img {
  flex: 0 0 180px;
  margin-right: 35px;
  margin-left: -3rem;
  margin-top: 0.3rem;
}

.mission-img img {
  width: 21.5rem;
  height: 19rem;
}

.mission-text h2 {
  color: #0073ba;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.mission-text p {
  font-size: 15px;
  line-height: 1.7;
  color: #333;
  margin: 0;
  text-align: justify;
}

.value-block {
  background: white;
  padding: 40px;
  height: 19rem;
}

.value-block h2 {
  color: #0073ba;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 100;
  margin-right: 1rem;
}

.value-block ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.value-block ul li {
  font-size: 15px;
  color: #333;
  margin-bottom: 15px;
  position: relative;
  line-height: 1.4;
  margin-left: 1rem;
  margin-right: 4rem;
}

.value-block ul li:before {
  content: ">";
  position: absolute;
  left: 0;
  color: #666;
  font-weight: bold;
  font-size: 16px;
}

/* Header Styles */
.headerTop {
  width: 100%;
  background: #f2f6f8;
  padding: 0.5rem 0;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.col-logo {
  flex: 0 0 auto;
}

.logo-box {
  display: flex;
  align-items: center;
  padding: 12px 32px 12px 16px;
  border-radius: 2px;
  margin-left: 10rem;
}

.logo-img {
  height: 70px;
  width: 70px;
  margin-right: 18px;
  background: transparent;
}

.company-name {
  font-size: 2.5rem;
  color: #1976d2;
  font-family: 'Montserrat', Arial, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
}

.col-contact {
  flex: 1 1 auto;
  margin-left: 6rem;
}

.header-contact {
  display: flex;
  gap: 21px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.header-contact li {
  text-align: left;
}

.header-contact span {
  display: block;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #0073ba;
  font-family: 'DINPro-Bold', sans-serif;
}

.contact-value {
  display: inline-block;
  color: #333333;
  font-family: 'DINPro-Light', sans-serif;
}

.headerBottom {
  background: #fff;
  border-bottom: 1.5px solid #e5e5e5;
  width: 100%;
  margin: 0;
  padding: 0;
}

.headerBottom .container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 24px;
  margin-left: 11rem;
}

.menu-main-menu-container {
  width: 100%;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 12px;
}

.menu>li {
  position: relative;
}

.menu>li>a {
  display: block;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #111111;
  line-height: 57px;
  font-family: 'DINPro-Medium', sans-serif;
  border-bottom: 3px solid transparent;
  padding: 0 10px;
}

.menu>li.current-menu-ancestor>a,
.menu>li.current-menu-parent>a,
.menu>li.current-menu-item>a {
  color: #1976d2;
  border-bottom: 3px solid #1976d2;
}

.menu>li>a:hover {
  color: #1976d2;
}

.menu>li:hover>ul.sub-menu {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  min-width: 220px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  z-index: 10;
}

.menu>li>ul.sub-menu {
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu>li>ul.sub-menu>li {
  width: 100%;
}

.menu>li>ul.sub-menu>li>a {
  display: block;
  padding: 12px 20px;
  color: #111;
  text-decoration: none;
  font-size: 15px;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
  transition: background 0.2s, color 0.2s;
}

.menu>li>ul.sub-menu>li>a:hover {
  background: #f2f6f8;
  color: #0073ba;
}

/* Banner Styles */
.inner-banner {
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  min-height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 40px 0;
}

.inner-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 115, 186, 0.7);
  z-index: 1;
}

.inner-banner .container {
  position: relative;
  z-index: 2;
  margin-left: 10rem;
}

.inner-banner-info {
  color: white;
}

.inner-banner-info ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 12px;
  margin-bottom: 25px;
  align-items: center;
}

.inner-banner-info ul li {
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.inner-banner-info ul li.active a {
  color: white;
  text-decoration: none;
}

.inner-banner-info ul li:not(.active) {
  opacity: 0.8;
}

.inner-banner-info h2 {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.1;
  color: #fff;
  display: flex;
}

.inner-banner-info p {
  font-size: 20px;
  margin: 0;
  line-height: 1.4;
  opacity: 0.95;
  font-weight: 400;
  display: flex;
}

/* Router link styles */
.menu>li>ul.sub-menu>li>a.router-link-active,
.menu>li>ul.sub-menu>li>a.router-link-exact-active {
  background: #f2f6f8;
  color: #0073ba;
  font-weight: 600;
}

.menu>li>ul.sub-menu>li>a.router-link-active:hover,
.menu>li>ul.sub-menu>li>a.router-link-exact-active:hover {
  background: #f2f6f8;
  color: #0073ba;
}

.inner-banner-info ul li a.router-link-active,
.inner-banner-info ul li a.router-link-exact-active {
  color: white;
  text-decoration: none;
}

.footer-links a.router-link-active,
.footer-links a.router-link-exact-active {
  color: #0073ba;
  text-decoration: underline;
  text-decoration-color: #0073ba;
}

/* Responsive styles */
@media (max-width: 900px) {
  .row {
    flex-direction: column;
    align-items: flex-start;
  }

  .col-contact {
    justify-content: flex-start;
    margin-top: 12px;
    width: 100%;
  }

  .header-contact {
    gap: 24px;
  }

  .logo-box {
    width: 100%;
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {

  .footerArea .col-sm-3,
  .footerArea .col-md-3,
  .footerArea .col-lg-3 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .copyright .row {
    flex-direction: column;
    gap: 10px;
  }

  .copyright .col-sm-4 {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
  }

  .copyright .text-right {
    text-align: center;
  }
}

@media (max-width: 480px) {

  .footerArea .col-sm-3,
  .footerArea .col-md-3,
  .footerArea .col-lg-3 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .footertop {
    padding: 40px 0 30px;
  }
}

.strength-placeholder {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #0073ba 0%, #005a8b 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 115, 186, 0.2);
}

.strength-placeholder::before {
  content: "Our Strengths";
}
</style>